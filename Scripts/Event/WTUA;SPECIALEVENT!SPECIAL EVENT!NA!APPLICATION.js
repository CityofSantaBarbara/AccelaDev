//Gray Quarter Inc.
//WTUA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
/*
if (wfTask == "Application Submittal" && wfStatus == "Department Review"){
    deactivateTask("PBW Transportation");
    deactivateTask("Comm Dev Bldg Safety");
    deactivateTask("SBPD");
    deactivateTask("Comm Dev Planning");
    deactivateTask("SBFD");
    deactivateTask("Risk Mgmt");
    deactivateTask("Creeks");
    deactivateTask("Environmental Services");
    deactivateTask("WF Parking");
    deactivateTask("City Admin Office");
    deactivateTask("Parks and Rec");
    deactivateTask("Public Works Streets");
}
*/

//*******START - Send Issued Permit*********
if (wfTask == "Permit Issuance" && wfStatus == "Issued") {
    runAsyncEvent("ASYNC_SPECIALEVENT_PERMIT_SEND_EMAIL",capIDString,currentUserID);
  }
//*******END - Send Issued Permit*********

//*******START - Email to Building & Safety*********
if ( (wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Stage is 24 inches high or more"] == "CHECKED"
        || AInfo["Building a structure"] == "CHECKED"
        || AInfo["Installing temporary electrical wiring for event"] == "CHECKED"
        || AInfo["Large towed generator with a grounding rod"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "CDBuildingCode@SantaBarbaraCa.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}
//*******END - Email to Building & Safety*********

//*******START - Email to Fire Prevention 2*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Tent dimensions are 400 square feet or more"] == "CHECKED" 
        || AInfo["Canopy dimensions are 700 square feet or more"] == "CHECKED" 
        || AInfo["The event is a market trade show exhibit or has a similar vendor set up"] == "CHECKED"
        || AInfo["The entire event or a smaller area within the event will be enclosed in fencing"] == "CHECKED"
        || AInfo["Equipment with an open flame"] == "CHECKED"
        || AInfo["Carnival Rides or Games"] == "CHECKED"
        || AInfo["Parade Floats"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "FirePrevention2@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}
//*******END - Email to Fire Prevention 2*********

//*******START - Email to SBPD*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Parade Vehicles orFloats"] == "CHECKED" 
        || AInfo["Parade Floats"] == "CHECKED" 
        || AInfo["Parade Horses"] == "CHECKED"
        || AInfo["Car Show Vehicles"] == "CHECKED"
        || AInfo["Requesting uniformed City police officers"] == "CHECKED"
        || AInfo["Event includes"] == "CHECKED"
        || AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
        || AInfo["Alcohol will be served at the event"] == "CHECKED"
        || AInfo["Road Closure Equipment"] == "CHECKED"
        || AInfo["Event set-up or equipment will be left at the event site overnight"] == "CHECKED"
        || AInfo["Hiring professional security guards to monitor the event"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
	        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "OHoodes@sbpd.com";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate +  toEmail);
}

//*******END - Email to SBPD*********

//*******START - Email to Public Works Streets*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Signage placed along walk race cycling event routes"] == "CHECKED"
        ||AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
        ||AInfo["Requesting to park an oversized-vehicle on a City street"] == "CHECKED"
        ||AInfo["Requesting to reserve parking area along a City Street"] == "CHECKED"
        ||AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
        ||AInfo["Requesting access to a City water hydrant"] == "CHECKED"
        ||AInfo["Road Closure Equipment"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "PWCounter@SantaBarbaraCA.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}

//*******END - Email to Public Works Streets*********

//*******START - Email to Parks & Rec*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
        ||AInfo["Requesting use of City Volleyball Courts"] == "CHECKED"
        || AInfo["Event set-up or equipment will be left at the event site overnight"] == "CHECKED"
        || AInfo["Hiring professional security guards to monitor the event"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "specialevents@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}

//*******END - Email to Parks & Rec*********

//*******START - Email to City of Santa Barbara Finance Dept*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") &&
    (AInfo["Vendors selling food and beverages in a park or beach"] == "CHECKED"
        ||AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "businesslicense@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}

//*******END - Email to City of Santa Barbara Finance Dept*********

//*******START - Email to Water Front Parking*********
if ((wfTask == "Application Submittal" && wfStatus == "Department Review") && 
    (AInfo["Use of City Waterfront Parking Lot"] == "CHECKED"
        ||AInfo["Parking for a food truck or trailer"] == "CHECKED"
        ||AInfo["Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot"] == "CHECKED")
    ){
        //activateTask("Comm Dev Bldg Safety");
        //logDebug("Department Notification email");
		//Get Email Notification and Parameters
        var fromEmail = "SBCityLDT_Train@santabarbaraca.gov";
                var toEmail = "jason@grayquarter.com";
                //var toEmail = "cbarrios@santabarbaraca.gov";
                var ccEmail = ""; //blank for now
                var emailParameters = aa.util.newHashtable();
	            addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
                addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
                                
                var emailTemplate = "SE_ASSIGN_DEPART_TASK_NOTICE";
                var capId4Email = aa.cap.createCapIDScriptModel(capId.getID1(), capId.getID2(), capId.getID3());
                var fileNames = [];
               
                aa.document.sendEmailAndSaveAsDocument(fromEmail, toEmail, ccEmail, emailTemplate, emailParameters, capId4Email, fileNames);
                logDebug( ": Sent Email template " + emailTemplate + toEmail);
}

//*******END - Email to Water Front Parking*********

