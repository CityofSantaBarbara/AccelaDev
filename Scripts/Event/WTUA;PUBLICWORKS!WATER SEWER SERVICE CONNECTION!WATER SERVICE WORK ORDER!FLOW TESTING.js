//Added by Nicole Folman
//Ticket #SR-99583
//WTUA:PublicWorks/Water Sewer Service Connection/Water Service Work Order/Flow Testing

if (wfTask == "Work Order Issuance" && wfStatus == "Issued") {
    logDebug("PBW Fire Hydrant Flow Test Work Order Notification");
//Get Report and Report Parameters
   
 var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
     var toEmail = "nfolman@santabarbaraca.gov";
     var ccEmail = "nfolman@santabarbaraca.gov"; //blank for now
     var theURL = "";
     var emailParameters = aa.util.newHashtable();

     addParameter(emailParameters, "$$RecordID$$", cap.getCapModel().getAltID());
     //var someaddress = getAddressInALineLocal(capId);
     addParameter(emailParameters, "$PERMITADDR$", someaddress);
     //var workDesc = workDescGet(capId);
     addParameter(emailParameters, "$PERMITWRKDESC$", workDesc);
     //var wfComment = fTask.getDispositionComment();
     addParameter(emailParameters, "$TASKCOMMENTS$", wfcomment);

     var emailTemplate = "PBW_WD_FIREHYDRANT_ISSUED";
     var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
     var fileNames = [];
    
     aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
     logDebug( ": Sent Fire Hydrant Flow Email template " + emailTemplate + " To Roger and Jesus ");
}
