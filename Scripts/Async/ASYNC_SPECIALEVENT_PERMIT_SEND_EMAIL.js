//get Event Applicant contact email
var capContactResult = aa.people.getCapContactByCapID(capId);
if (capContactResult.getSuccess()) {
  var Contacts = capContactResult.getOutput();
  for (yy in Contacts) {
    tmpContactType = Contacts[yy]
      .getCapContactModel()
      .getPeople()
      .getContactType();
    if (tmpContactType == "Event Organizer") {
      var paEmail = Contacts[yy].getCapContactModel().getPeople().getEmail();
      if (paEmail != null && paEmail != undefined) {
        var reportFiles = new Array();

        aa.print("Email: " + paEmail);
        var emailFrom = "SBCityLDT_Test@santabarbaraca.gov";
        var emailTo = paEmail;
        var emailCC = "";
        var emailTemplate = "SE_PERMIT_ISSUED";
        var emailParameters = aa.util.newHashtable();
        emailParameters.put("$$Applicantemail$$", paEmail);
        //emailParameters.put("$$firstName$$");
        //emailParameters.put("$$lastName$$");
        emailParameters.put("$$altID$$", capIDString);
        //generate report
        var user = "ADMIN"; // Setting the User Name
        var reportNames = new Array();
        //reportNames.push(["Special Event Sample"]);
        reportNames.push(["Special Event Permit"]);
        
        for (var i in reportNames) {
          logDebug("running " + reportNames[i][0]);
          var report = aa.reportManager.getReportInfoModelByName(
            reportNames[i][0]
          );
          report = report.getOutput();
          report.setModule("SpecialEvent");
          report.setCapId(capId);
          var parameters = aa.util.newHashMap();
          parameters.put("AGENCY_ALT_ID", capIDString);
        
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
              "SUCCESS, SpecialEvent Module Report emailed with an pdf attachment"
            );
          } else {
            logDebug("ERROR" + sendResult.getErrorMessage());
          }
        }
      }
    }
  }
}
