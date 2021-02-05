var lookupValue = wfTask + "::" + wfStatus;
logDebug("the lookup is:"+lookupValue);
var asiFieldandValue = "" + lookupOnlyActive("PLN_APPLICATION_LIST_WF", lookupValue);
logDebug("the asiFieldandValue is:"+asiFieldandValue);
	
if (asiFieldandValue.indexOf("::") > -1 ) { 
	var asiFieldValArr = asiFieldandValue.split("::");
	var asiField = asiFieldValArr[0];
	var asiVal = asiFieldValArr[1];
	logDebug("the asi Field is:"+asiField);
	logDebug("the asi Value is:"+asiVal);
	editAppSpecific(asiField,asiVal);
} 
else logDebug("look up not found!");
