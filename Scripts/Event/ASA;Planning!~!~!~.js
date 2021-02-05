// ********************************************************************************************************
// Script 		ASA:Planning/~/~/~.js
// Record Types: all
//
// Event: 	ASA	
//
// Desc:	this script is for app submit global actions
//
// Created By: Silver Lining Solutions
// ********************************************************************************************************
// Change Log
//         	Date		Name			Modification
//		10-17-2019	Chad			Original
//		02/05/2021	Chad			Added new logic for Planning Application list mgt
// ********************************************************************************************************
logDebug("Start of ASA:Planning/*/*/*");
var asiFieldandValue = "";
var lookupValue = null;

if (publicUser) {
	docListResult = aa.document.getCapDocumentList(capId ,currentUserID);
	var docWasUploaded = false;
	if (docListResult.getSuccess()) {
		docListArray = docListResult.getOutput();
		varDocLast = docListArray.length;
		if ( varDocLast > 0 ) {
			docWasUploaded =true;
		}
	}
	lookupValue = "publicUser";

	if (docWasUploaded) {
		lookupValue = "DocUploadedPubUser";
	}

	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookupOnlyActive("PLN_APPLICATION_LIST_ASA", lookupValue);
	logDebug("the asiFieldandValue is:"+asiFieldandValue);
	

}
else {
	lookupValue = "backOffice";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookupOnlyActive("PLN_APPLICATION_LIST_ASA", lookupValue);
	logDebug("the asiFieldandValue is:"+asiFieldandValue);
}

if (asiFieldandValue.indexOf("::") > -1 ) { 
	var asiFieldValArr = asiFieldandValue.split("::");
	var asiField = asiFieldValArr[0];
	var asiVal = asiFieldValArr[1];
	logDebug("the asi Field is:"+asiField);
	logDebug("the asi Value is:"+asiVal);
	editAppSpecific(asiField,asiVal);
} 
else logDebug("look up not found!");
logDebug("End of ASA:Planning/*/*/*");
