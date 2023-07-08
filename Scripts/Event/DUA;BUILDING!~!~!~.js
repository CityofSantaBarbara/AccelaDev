if (publicUser) {
	// && //cap.isCompleteCap()) {
	//&& !matches(capStatus, "Document Received 
	logDebug("Starting email ");
	var fromEmail = lookup("SCRIPT_EMAIL_FROM", "AGENCY_FROM");
	var toEmail = getPrimaryContactsEmail(capId);
	var ccEmail = "";
	var emailTemplate = "BLD DOCUMENT UPLOAD";
	var emailParams = aa.util.newHashtable();
	addParameter(emailParams, "$$RecordID$$", capIDString);

	capObj = aa.cap.getCap(capId).getOutput();
	pAppName = capObj.getSpecialText();
	addParameter(emailParams, "$$SpecialText$$", pAppName);
	logDebug(pAppName);

	docListResult = aa.document.getCapDocumentList(capId, currentUserID);
	docListArray = docListResult.getOutput()
	varDocLast = docListArray.length;
	varLastPos = varDocLast - 1
	docLastCat = docListArray[varLastPos].getDocCategory();
	docLastDate = docListArray[varLastPos].getFileUpLoadDate();
	logDebug(docLastDate);
	var string = docLastDate.toString();
	logDebug(string)
	var parts = string.split(" ")[0].split("-"); // Extract date components
	var year = parts[0];
	var month = parts[1];
	var day = parts[2];
	var formattedDate = month + "/" + day + "/" + year;
	addParameter(emailParams, "$$UploadDate$$", formattedDate);
	logDebug(formattedDate);
	var attachments = [];
	logDebug("Sending email to " + toEmail + " with template " + emailTemplate + " and params " + emailParams);
	sendNotification(fromEmail, toEmail, ccEmail, emailTemplate, emailParams, attachments);
	//updateAppStatus("Document Received", "Updated via script");
}

/**
* 
* @param {CapIDModel} cId - The CapIDModel of the record to get the primary contact email for. 
* @returns {String} - The primary contact email address for the record. If no primary contact is found, returns all contact email addresses separated by a comma.  
*/
function getPrimaryContactsEmail(cId) {
    var primaryEmail;
    var emailArray = [];
    var capContactResult = aa.people.getCapContactByCapID(cId);
    if (capContactResult.getSuccess()) {
        var capContactArray = capContactResult.getOutput();

        for (var contact in capContactArray){
            var thisContact = capContactArray[contact].getPeople();
            if (thisContact.email) {
                emailArray.push(thisContact.email);
            }
            if(thisContact.flag == 'Y' && thisContact.email && String(thisContact.email).indexOf("@") > 0  ){
                primaryEmail = thisContact.email;
                return primaryEmail;
            }
        }
        return emailArray.join(", ");
    }
    return "";
}