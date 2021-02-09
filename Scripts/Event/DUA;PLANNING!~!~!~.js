var asiFieldandValue = "";
var lookupValue = null;

if (publicUser) {
	var fileDate = convertDate(cap.getFileDate()); 
	fileDate.setHours(0,0,0,0);
	var localToday = new Date();
	localToday.setHours(0,0,0,0);  //strip the time out of the date
	
	if ( fileDate.toString() == localToday.toString() ) { 
		lookupValue = "NewAppPublicUser";
	}
	else { 
		lookupValue = "publicUser";
	}
	
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookupOnlyActive("PLN_APPLICATION_LIST_DUA", lookupValue);
	logDebug("the asiFieldandValue is:"+asiFieldandValue);
}
else {
	lookupValue = "backOffice";
	logDebug("the lookup is:"+lookupValue);
	asiFieldandValue = "" + lookupOnlyActive("PLN_APPLICATION_LIST_DUA", lookupValue);
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
