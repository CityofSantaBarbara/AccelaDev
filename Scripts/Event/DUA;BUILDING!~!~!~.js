if (publicUser && capStatus) {
    if(documentModelArray) {
        var docList = documentModelArray.toArray();
        logDebug("Documents uploaded: " + docList.length);
        var documentObj = docList[0];
        var docCategory = "";
        var docName = "";
        if(documentObj) {
            docCategory = documentObj.getDocCategory();
            docName = documentObj.getDocName();
        }
        // && //cap.isCompleteCap()) {
        //&& !matches(capStatus, "Document Received 
        logDebug("Starting email ");
        var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM"); 
        //var toEmail = getPrimaryContactsEmail(capId);
        var toEmail = getContactEmailByType(capId, "Applicant");
        var ccEmail = "";
        var emailTemplate = "BLD DOCUMENT UPLOAD";
        var emailParams = aa.util.newHashtable();
        addParameter(emailParams, "$$RecordID$$", capIDString);
        addParameter(emailParams, "$$docName$$", docName);
        addParameter(emailParams, "$$docCategory$$", docCategory);

        var capObj = aa.cap.getCap(capId).getOutput();
        var pAppName = capObj.getSpecialText();
        addParameter(emailParams, "$$SpecialText$$", pAppName);
        logDebug(pAppName);
        var uploadDate = new Date();
        var formattedDate = aa.util.formatDate(uploadDate, "MM/dd/yyyy")        
        addParameter(emailParams, "$$UploadDate$$", formattedDate);
        logDebug(formattedDate);
        var attachments = [];
        logDebug("Sending email to " + toEmail + " with template " + emailTemplate + " and params " + emailParams);
        sendNotification(fromEmail, toEmail, ccEmail, emailTemplate, emailParams, attachments);
        //updateAppStatus("Document Received", "Updated via script");
    }
}

/**
* 
* @param {CapIDModel} cId  - The capId of the record to get the contact email for.
* @param {string} contactType - The contact type to get the email for.
* @returns {string[]} - An array of contact email addresses for the record.
*/
function getContactEmailByType(cId, contactType) {
    var emailArray = [];
    var capContactResult = aa.people.getCapContactByCapID(cId);
    if (capContactResult.getSuccess()) {
        var capContactArray = capContactResult.getOutput();

        for (var contact in capContactArray){
            var thisContact = capContactArray[contact].getPeople();
            if(thisContact.contactType == contactType && thisContact.email && String(thisContact.email).indexOf("@") > 0  ){
                emailArray.push(thisContact.email);
            }
        }
    }
    return emailArray;
}