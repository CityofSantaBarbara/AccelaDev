if (publicUser) {
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

    capObj = aa.cap.getCap(capId).getOutput();
    pAppName = capObj.getSpecialText();
    addParameter(emailParams, "$$SpecialText$$", pAppName);
    logDebug(pAppName);

    docListResult = aa.document.getCapDocumentList(capId ,currentUserID);
    docListArray = docListResult.getOutput()
	varDocLast = docListArray.length;
	varLastPos = varDocLast -1
	docLastCat = docListArray[varLastPos].getDocCategory();
	docLastDate = docListArray[varLastPos].getFileUpLoadDate();
    logDebug(docLastDate);
    var string = docLastDate.toString();
    logDebug(string)
    //var parts = string.split(" ")[0].split("-"); // Extract date components
    //var year = parts[0];
    //var month = parts[1];
    //var day = parts[2];
    //var time = parts[3];
    //var formattedDate = month + "/" + day + "/" + year + " " + time;
    var inputDate = string
    var formattedDate = convertDateFormat(inputDate);
    addParameter(emailParams, "$$UploadDate$$", formattedDate);
    logDebug(formattedDate);
    var attachments = [];
    logDebug("Sending email to " + toEmail + " with template " + emailTemplate + " and params " + emailParams);
    sendNotification(fromEmail, toEmail, ccEmail, emailTemplate, emailParams, attachments);
    //updateAppStatus("Document Received", "Updated via script");
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

function convertDateFormat(inputDate) {
    const regex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}\.\d+)$/;
    const match = inputDate.match(regex);
  
    if (!match) {
      throw new Error("Invalid date format");
    }
  
    const [, year, month, day, hours, minutes, seconds] = match;
  
    const formattedDate =
      month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  
    return formattedDate;
  }