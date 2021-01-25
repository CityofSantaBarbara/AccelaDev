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
//			10-17-2019		Chad			Original
// ********************************************************************************************************
logDebug("Start of ASA:Planning/*/*/*");
var asiFieldandValue = "";
var lookupValue = null;

if (publicUser) {
	lookupValue = "publicUser";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookup("PLN_APPLICATION_LIST_ASA", lookupValue);
	logDebug("the asiFieldandValue is:"+asiFieldandValue);
}
else {
	lookupValue = "backOffice";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookup("PLN_APPLICATION_LIST_ASA", lookupValue);
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
else logDebug("look up not found!");logDebug("End of ASA:Planning/*/*/*");
