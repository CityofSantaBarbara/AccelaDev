//Added by Nicole Folman
//Ticket #SR-99583
//WTUA:PublicWorks/Water Sewer Service Connection/Water Service Work Order/Flow Testing

//Script to auto send email notification to Roger and Jesus when the Work Order Issuance task is set to Issued.

try{
    if (wfTask == "Work Order Issuance" && wfStatus == "Issued") {
        logDebug("*****************PBW Fire Hydrant Flow Test Work Order Notification*****************");
    //Get Report and Report Parameters
    
        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
        var toEmail = "nfolman@santabarbaraca.gov;";
        var ccEmail = ""; //blank for now
        var theURL = "";
        var emailParameters = aa.util.newHashtable();  

        addParameter(emailParameters, "$$RecordID$$", cap.getCapModel().getAltID());

        var addressResult = aa.address.getAddressByCapId(capId);
           if (addressResult.getSuccess()) {
               var addressArray = addressResult.getOutput();
               if (addressArray.length > 0) {
                   var address = addressArray[0];
                   var displayAddress = address.getDisplayAddress();
                   logDebug("Address: " + displayAddress);
                   addParameter(emailParameters, "$$Address$$", displayAddress);
               } else {
                   logDebug("No addresses found for this Cap ID.");
               }
           } else {
               logDebug("**ERROR: Failed to get addresses " + addressResult.getErrorMessage());
           }

        var capModel = cap.getCapModel();
        var workDescModel = capModel.getCapWorkDesModel();
        var workDescription = workDescModel.getDescription();
        logDebug("Work Description: " + workDescription);
        addParameter(emailParameters, "$$WorkDesc$$", workDescription);

        var wfTaskResult = aa.workflow.getTask(capId, wfTask);
            if (wfTaskResult.getSuccess()) {
                wfTask = wfTaskResult.getOutput();
                var wfComment = wfTask.getDispositionComment();
                logDebug("Workflow Comment: " + wfComment);
                addParameter(emailParameters, "$$WorkflowComment$$", wfComment);
            } else {
                logDebug("**ERROR: Failed to get workflow task " + wfTaskResult.getErrorMessage());
            }

        var emailTemplate = "PBW_WD_FIREHYDRANT_ISSUED";
        var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
        var fileNames = [];

        aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
        logDebug( ": Sent Fire Hydrant Flow Email template " + emailTemplate + " To Roger and Jesus ");
    }
} catch (err) { 
    logDebug("A JavaScript Error occurred: WTUA:PublicWorks/Water Sewer Service Connection/Water Service Work Order/Flow Testing: " + err.message); 
    logDebug(err.stack);
}
