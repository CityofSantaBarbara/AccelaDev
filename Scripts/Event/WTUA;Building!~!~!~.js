// WTUA:Building/*/*/*

/* following block of code was in Accela but not Github... it was added by "ADMIN" 12-22-2016
if (wfTask == "Permit Issuance" && wfStatus == "Issued")
editAppSpecific("Permit Issued Date", sysDateMMDDYYYY);
if (wfTask == "Permit Issuance" && wfStatus == "Issued")
editAppSpecific("Permit Expiration Date", dateAdd(null, 180));
if (wfTask == "Permit Status" && wfStatus == "Permit Issued")
editAppSpecific("Permit Issued Date", sysDateMMDDYYYY);
if (wfTask == "Permit Status" && wfStatus == "Permit Issued")
editAppSpecific("Permit Expiration Date", dateAdd(null, 180));
if (wfTask == "Permit Issuance" && wfStatus == "Issued")
licEditExpInfo(null, AInfo["Permit Expiration Date"]);
if (wfTask == "Permit Status" && wfStatus == "Permit Issued")
licEditExpInfo(null, AInfo["Permit Expiration Date"]);
// end ADMIN code
*/
//script205_DeactivateSpecInsp();

//Script 202 - Auto create inspections for Building
/*------------------------------------------------------------------------------------------------------/
| Purpose		: Auto create inspections for building
| Notes			: Assumed the following mapping (between the approved wftask & the inspection type to be scheduled):
			 wfTask :Electrical Plan Review/ InspTypes : Electrical Final,Electrical Rough
                         wfTask :Mechanical Plan Review/ InspTypes : :Mechanical Final,:Mechanical Rough
                         wfTask :Plumbing Plan Review/ InspTypes : Plumbing Final,Plumbing Rough
                         wfTask :Structural Plan Review/ InspTypes : Framing Final,Framing Rough
| Created by	: ISRAA
| Created at	: 01/02/2018 16:19:04
|
/------------------------------------------------------------------------------------------------------*/

//**********************************************************************************
//* updates made 6/5 for automation of BLD conditions creation for plan review tasks
//* EK
createConditionForPlanReview();

//**********************************************************************************

logDebug("WTUB;Building/*/*/* ------------------------>> Status check on Event flow");
include("5074_Building_WF_Accept_Plans_Withdrawn");

if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
	var tasksToCheck = [ "Mechanical Plan Review", "Electrical Plan Review", "Plumbing Plan Review", "Structural Plan Review" ];
	//createAutoInspection(tasksToCheck);
}

// Script #205

if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
	if(AInfo["Special Inspections"] != "Yes")
	{
		deactivateTask("Special Inspections Check","BLD_NEWCON_INSPSUB");
		deactivateTask("Special Inspections Check","BLD_MASTER_INSPSUB");
	}

	if(!isTaskStatus("Engineering Review","Approved with FEMA Cert Required"))
	{
		deactivateTask("FEMA Elevation Certification","BLD_NEWCON_INSPSUB");
		deactivateTask("FEMA Elevation Certification","BLD_MASTER_INSPSUB");
	}
	
	if(!isTaskStatus("Waste Water Review","Approved Inspection Required"))
	{
		deactivateTask("Waste Water","BLD_NEWCON_INSPSUB");
		deactivateTask("Waste Water","BLD_MASTER_INSPSUB");
	}

}

if(isTaskActive("Subtasks Complete","BLD_NEWCON_INSPSUB")&& allTasksComplete("BLD_NEWCON_INSPSUB","Subtasks Complete"))
{
    closeTask("Subtasks Complete","Complete","","", "BLD_NEWCON_INSPSUB")
}

// Script#206
if(isTaskActive("Subtasks Complete","BLD_MASTER_INSPSUB") && allTasksComplete("BLD_MASTER_INSPSUB","Subtasks Complete"))
{
	closeTask("Subtasks Complete","Complete","","", "BLD_MASTER_INSPSUB")
}

/**ACCELA CIVIC PLATFORM TO CRM SCRIPTING LOGIC 
 * Workflow automation for all Building Records 
 * @namespace WTUA:Building///
 * @requires INCLUDES_CRM
 */

//Retreive Enterprise CRM Function File 
eval(getScriptText("INCLUDES_CRM", null, false));

//logDebug("*** BEGIN process_WF_JSON_Rules for CRM (Building) ***");
// execute workflow propagation rules
//process_WF_JSON_Rules(capId, wfTask, wfStatus);
//logDebug("*** FINISH process_WF_JSON_Rules for CRM (Building) ***");

//Retreive Custom CRM Logic File
//includesCrmCustomWorkflowRules();


//Added by Gray Quarter ZenDesk #634
//START Santa Barbara Sharepoint #266
//Auto Run and attach report to record and send email notification
   if (wfTask == "Plans Coordination" && wfStatus == "Corrections Required") {
        logDebug("Correction Required");
		var capContactResult = aa.people.getCapContactByCapID(capId);
		var toEmail = []
		
		 if (capContactResult.getSuccess()) {
            var Contacts = capContactResult.getOutput();
            for (yy in Contacts)
                if (Contacts[yy].getEmail() != null)
                    toEmail.push("" + Contacts[yy].getEmail());

            if (toEmail.length > 0) {
                //Get Report and Report Parameters
                var reportTemplate = "BLD Plan Check Corrections"; // needs editing
                var reportParameters = aa.util.newHashtable();
                addParameter(reportParameters, "PermitNum", capId.getCustomID());
                if (AInfo["Plan Review Distribution Count"] == "1") {
                    addParameter(reportParameters, "Condition_Type", "Review 1");
                }
				if (AInfo["Plan Review Distribution Count"] == "2") {
                    addParameter(reportParameters, "Condition_Type", "Review 2");
                }
				if (AInfo["Plan Review Distribution Count"] == "3") {
                    addParameter(reportParameters, "Condition_Type", "Review 3");
                }
				if (AInfo["Plan Review Distribution Count"] == "4") {
                    addParameter(reportParameters, "Condition_Type", "Review 4");
                }
				if (AInfo["Plan Review Distribution Count"] == "5") {
                    addParameter(reportParameters, "Condition_Type", "Review 5");
                }
				if (AInfo["Plan Review Distribution Count"] == "6") {
                    addParameter(reportParameters, "Condition_Type", "Review 6");
                }
				if (AInfo["Plan Review Distribution Count"] == "7") {
                    addParameter(reportParameters, "Condition_Type", "Review 7");
                }
				if (AInfo["Plan Review Distribution Count"] == "8") {
                    addParameter(reportParameters, "Condition_Type", "Review 8");
                }
				logDebug("in the report template if statement" + reportParameters);
                //
                var rptFile = generateReport4Save(capId, reportTemplate, "Building", reportParameters)
				var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var ccEmail = ""; //blank for now
				var count = (parseInt(AInfo["Plan Review Distribution Count"],10) + 1).toFixed(0);
                var emailParameters = aa.util.newHashtable();
				addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
				addParameter(emailParameters, "$$Submittal$$", AInfo["Plan Review Distribution Count"]);
				addParameter(emailParameters, "$$submittalCount$$", count);
				logDebug("in the Email parameters if statement" + emailParameters);
                var emailTemplate = "BLD PLAN CHECK CORRECTIONS";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
                if (rptFile) {
                    fileNames.push(String(rptFile));
                }
                conEmailStr = toEmail.join(";");
                ccEmailStr = ccEmail;
                aa.document.sendEmailAndSaveAsDocument(fromEmail, conEmailStr, ccEmailStr, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts " + conEmailStr);
            }
        }
			 else
                logDebug("Couldn't send email to, no valid email address");
	
    }
/*
Added by Nicole Folman
Specifically for Building Pre-Application record type
When the Workflow Task Comments Issued is in the status of "Comments Issued" run the "BLD PRE Plan Check Corrections" report and send it in and 
email to the applicant using the email template "BLD PRE PLAN CHECK CORRECTIONS"
*/
if (wfTask == "Comments Issued" && wfStatus == "Comments Issued") {
    logDebug("Comments Issued");
    var capContactResult = aa.people.getCapContactByCapID(capId);
    var toEmail = []
    
     if (capContactResult.getSuccess()) {
        var Contacts = capContactResult.getOutput();
        for (yy in Contacts)
            if (Contacts[yy].getEmail() != null)
                toEmail.push("" + Contacts[yy].getEmail());

        if (toEmail.length > 0) {
            //Get Report and Report Parameters
            var reportTemplate = "BLD PRE Plan Check Corrections"; // needs editing
            var reportParameters = aa.util.newHashtable();
            addParameter(reportParameters, "PermitNum", capId.getCustomID());
            logDebug("in the report template if statement" + reportParameters);
            //
            var rptFile = generateReport4Save(capId, reportTemplate, "Building", reportParameters)
            var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
            var ccEmail = "nfolman@santabarbaraca.gov"; //blank for now
            var emailParameters = aa.util.newHashtable();
            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
            addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
            logDebug("in the Email parameters if statement" + emailParameters);
            var emailTemplate = "BLD PRE PLAN CHECK CORRECTIONS";
            var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
            var fileNames = [];
            if (rptFile) {
                fileNames.push(String(rptFile));
            }
            conEmailStr = toEmail.join(";");
            ccEmailStr = ccEmail;
            aa.document.sendEmailAndSaveAsDocument(fromEmail, conEmailStr, ccEmailStr, emailTemplate, emailParameters, capId4Email, fileNames);
            logDebug( "BLD PRE: Sent Email template " + emailTemplate + " To Contacts " + conEmailStr);
        }
    }
         else
            logDebug("BLD PRE - Couldn't send email to, no valid email address");

}


if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
                logDebug("County Assessor permit issuance email");
		//Get Report and Report Parameters
              
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
            var toEmail = "Jason@grayquarter.com";
            var ccEmail = ""; //blank for now
            //var ccEmail = "CDRecords@SantaBarbaraCA.gov"; //blank for now
                var theURL = "https://landuse-dt.santabarbaraca.gov/CitizenAccessTrain";
                var emailParameters = aa.util.newHashtable();
	        addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));
                
                var emailTemplate = "BLD_PERMIT_ISSUED_ASSESSOR";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

if (!appMatch('Building/Over the Counter/*/*') && wfTask == "Inspection" && wfStatus == "Final Inspection Complete") {
    runAsyncEvent("ASYNC_INSP_SUMMARY_REPORT_SEND_EMAIL",capIDString,currentUserID);
  }
/*
if (wfTask == "Inspection" && wfStatus == "Final Inspection Complete") {
               logDebug("County Assessor email");
	       //Get Report and Report Parameters
              
	        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
                var toEmail = "Jason@grayquarter.com";
                var ccEmail = ""; //blank for now
                //var ccEmail = "CDRecords@SantaBarbaraCA.gov"; //blank for now
                var theURL = "https://landuse-dt.santabarbaraca.gov/CitizenAccessTrain";
                var emailParameters = aa.util.newHashtable();
		        addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));

                var emailTemplate = "BLD_PERMIT_FINAL_INSPECTION_APP_ASSESSOR";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}
*/
if (wfTask == "Inspection" && wfStatus == "Permit Expired") {
    logDebug("County Assessor email");
//Get Report and Report Parameters
   
 var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
     var toEmail = "Jason@grayquarter.com";
     var ccEmail = ""; //blank for now
     //var ccEmail = "CDRecords@SantaBarbaraCA.gov"; //blank for now
     var theURL = "https://landuse-dt.santabarbaraca.gov/CitizenAccessTrain";
     var emailParameters = aa.util.newHashtable();
     addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
     addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
     addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));

     var emailTemplate = "BLD_PERMIT_EXPIRED_APP_ASSESSOR";
     var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
     var fileNames = [];
    
     aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
     logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
}

//GQ Ticket 3545
if (wfTask == "B-Structural" && wfStatus == "Routed to Reviewer") {
    logDebug("BLD External Plan Reviewer Notification");
//Get Report and Report Parameters
   
 var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
     var toEmail = "";
     var ccEmail = ""; //blank for now
     var theURL = "https://landuse-dt.santabarbaraca.gov/CitizenAccessTrain";
     var emailParameters = aa.util.newHashtable();
        moeFound = false;
        anitaFound = false;
        samFound = false;
        thisConEmail = "";
        thisConFirstName = "";
        conArray = getContactArray();
        if (conArray && conArray.length > 0) {
            for (var i=0; i<conArray.length;i++) {
                thisContact = conArray[i];
                conType = thisContact.contactType;
                if (conType == "Applicant") {
                    thisConFirstName = thisContact.firstName;
                    thisConLastName = thisContact.lastName;
                    if (thisConLastName == "Folman" && thisConFirstName == "Nicole")
                        anitaFound = true;
                    if (thisConLastName == "rutledge" && thisConFirstName == "raven")
                        moeFound = true;
                    if (thisConLastName == "Jackson" && thisConFirstName == "Jason")
                        samFound = true;
                    // if (thisConLastName == "Nounvilaythong" && thisConFirstName == "Anita")
                    //     anitaFound = true;
                    // if (thisConLastName == "Heivand" && thisConFirstName == "Moe")
                    //     moeFound = true;
                    // if (thisConLastName == "Phillips" && thisConFirstName == "Sam")
                    //     samFound = true;
                    thisConEmail = thisContact.email;
                    if (moeFound || anitaFound || samFound) break;
                }
            }
        }
        if (moeFound || anitaFound || samFound) {
            toEmail = thisConEmail;
            // sub into email token if you want the name in the text of the email...
            addParameter(emailParameters, "$$HelloName$$", thisConFirstName);
        }

     addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
     var someaddress = getAddressInALineLocal(capId);
     addParameter(emailParameters, "$$addressLine$$", someaddress);
     addParameter(emailParameters, "$$acaRecordUrl$$", getACARecordURL(theURL));
     var count = AInfo["Plan Review Distribution Count"];
     //var count = getAppSpecific("Plan Review Distribution Count");
     addParameter(emailParameters, "$$submittalCount$$", count);

     var emailTemplate = "BLD External Plan Reviewer Notification";
     var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
     var fileNames = [];
    
     aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
     logDebug( ": Sent Email template " + emailTemplate + " To Contacts ");
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

//END Santa Barbara Sharepoint #266	

