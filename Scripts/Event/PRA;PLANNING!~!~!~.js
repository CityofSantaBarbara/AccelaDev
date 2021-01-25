var asiFieldandValue = "";
var lookupValue = null;

if (publicUser && (balanceDue <= 0)) {
	lookupValue = "publicUser";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookup("PLN_APPLICATION_LIST_PRA", lookupValue);
	logDebug("the asiFieldandValue is:"+asiFieldandValue);
}
else if (!(publicUser) && (balanceDue <= 0)) {
	lookupValue = "backOffice";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookup("PLN_APPLICATION_LIST_PRA", lookupValue);
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
