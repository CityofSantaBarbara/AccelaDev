//get Applicant contact email
var capContactResult = aa.people.getCapContactByCapID(capId);
if (capContactResult.getSuccess()) {
  var Contacts = capContactResult.getOutput();
  for (yy in Contacts) {
    tmpContactType = Contacts[yy]
      .getCapContactModel()
      .getPeople()
      .getContactType();
    if (tmpContactType == "Applicant") {
      var paEmail = Contacts[yy].getCapContactModel().getPeople().getEmail();
      if (paEmail != null && paEmail != undefined) {
        var reportFiles = new Array();

        aa.print("Email: " + paEmail);
        //var emailFrom = "SBCityLDT_Test@SantaBarbaraCA.gov";
        var emailFrom = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
        var emailTo = paEmail;
        var emailCC = "";
        var emailTemplate = "BLD ON DEMAND PERMIT";
        var emailParameters = aa.util.newHashtable();
        emailParameters.put("$$Applicantemail$$", paEmail);
        //emailParameters.put("$$firstName$$");
        //emailParameters.put("$$lastName$$");
        emailParameters.put("$$altID$$", capIDString);
        //generate report
        var user = "ADMIN"; // Setting the User Name
        var reportNames = new Array();
        reportNames.push(["/On Demand Permit Record"]);
        
        for (var i in reportNames) {
          logDebug("running " + reportNames[i][0]);
          var report = aa.reportManager.getReportInfoModelByName(
            reportNames[i][0]
          );
          report = report.getOutput();
          report.setModule("Building");
          report.setCapId(capId);
          var parameters = aa.util.newHashMap();
          parameters.put("PermitNum", capIDString);
        
          report.setReportParameters(parameters);
          var permit = aa.reportManager.hasPermission(reportNames[i][0], user);
          if (permit.getOutput().booleanValue()) {
            var reportResult = aa.reportManager.getReportResult(report);
            if (reportResult) {
              var reportOutput = reportResult.getOutput();
              if (reportOutput) {
                var reportFile = aa.reportManager
                  .storeReportToDisk(reportOutput)
                  .getOutput();
                reportFiles.push(reportFile);
              }
            }
          }
        }

        if (reportFiles.length > 0) {
          var capIDScriptModel = aa.cap.createCapIDScriptModel(
            capId.getID1(),
            capId.getID2(),
            capId.getID3()
          );
          //Email report
          var sendResult = aa.document.sendEmailAndSaveAsDocument(
            emailFrom,
            emailTo,
            emailCC,
            emailTemplate,
            emailParameters,
            capIDScriptModel,
            reportFiles
          );
          //var sendResult = aa.document.sendEmailAndSaveAsDocument("ray.li2@hpe.com", "ray.li2@hpe.com", emailCC, "PERMIT_ISSUED_NOTICE", emailParameters, capIDScriptModel, null);

          if (sendResult.getSuccess()) {
            logDebug(
              "SUCCESS, Building Module Report emailed with an pdf attachment"
            );
          } else {
            logDebug("ERROR" + sendResult.getErrorMessage());
          }
        }
      }
    }
  }
}


function generateReportForASyncEmail(itemCap, reportName, module, parameters) {
  //returns the report file which can be attached to an email.
  var vAltId;
  var user = currentUserID; // Setting the User Name
  var report = aa.reportManager.getReportInfoModelByName(reportName);
  var permit;
  var reportResult;
  var reportOutput;
  var vReportName;
  report = report.getOutput();
  report.setModule(module);
  report.setCapId(itemCap);
  report.setReportParameters(parameters);
  
  vAltId = itemCap.getCustomID();
  report.getEDMSEntityIdModel().setAltId(vAltId);
  
  permit = aa.reportManager.hasPermission(reportName, user);
  if (permit.getOutput().booleanValue()) {
  reportResult = aa.reportManager.getReportResult(report);
  if (!reportResult.getSuccess()) {
  logDebug("System failed get report: " + reportResult.getErrorType() + ":" + reportResult.getErrorMessage());
  return false;
  } else {
  reportOutput = reportResult.getOutput();
  vReportName = reportOutput.getName();
  logDebug("Report " + vReportName + " generated for record " + itemCap.getCustomID() + ". " + parameters);
  return vReportName;
  }
  } else {
  logDebug("Permissions are not set for report " + reportName + ".");
  return false;
  }
  }
  
  function generateReport4Save(itemCap, reportName, module, parameters) {
  //returns the report file which can be attached to an email.
  var user = currentUserID;   // Setting the User Name
  var report = aa.reportManager.getReportInfoModelByName(reportName);
  report = report.getOutput();
  report.setModule(module);
  report.setCapId(itemCap.getCustomID());
  report.setReportParameters(parameters);
  var edms = new com.accela.v360.reports.proxy.EDMSEntityIdModel();
  edms.setCapId(itemCap.getID1() + "-" + itemCap.getID2() + "-" + itemCap.getID3());
  edms.setAltId(itemCap.getCustomID());
  report.setEDMSEntityIdModel(edms)
  var permit = aa.reportManager.hasPermission(reportName, user);
  if (permit.getOutput().booleanValue()) {
  var reportResult = aa.reportManager.getReportResult(report);
  if (reportResult.getSuccess()) {
  reportOutput = reportResult.getOutput();
  if (reportOutput != null) {
    var reportFile = aa.reportManager.storeReportToDisk(reportOutput);
    reportFile = reportFile.getOutput();
    return reportFile;
  }
  else {
    logDebug("ERROR: No temp file available");
    return false;
  }
  } else {
  logDebug("System failed get report: " + reportResult.getErrorType() + ":" + reportResult.getErrorMessage());
  return false;
  }
  } else {
  logDebug("You have no permission.");
  return false;
  }
  }