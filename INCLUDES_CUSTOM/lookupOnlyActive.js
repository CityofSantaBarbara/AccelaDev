function lookupOnlyActive(stdChoice,stdValue) {
	var strControl;
	var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoice,stdValue);

   	if (bizDomScriptResult.getSuccess()) {
		var bizDomScriptObj = bizDomScriptResult.getOutput();
		
		if (bizDomScriptObj.getAuditStatus() != "I") {
			var wtfIsUp = bizDomScriptObj.getBizDomain();
			strControl = "" + bizDomScriptObj.getDescription(); // had to do this or it bombs.  who knows why?
			logDebug("lookup(" + stdChoice + "," + stdValue + ") = " + strControl);
		}
		else {
			logDebug("lookup(" + stdChoice + "," + stdValue + ") is inactive or not found!"); 
		}
	}
	else {
		logDebug("lookup(" + stdChoice + "," + stdValue + ") does not exist");
	}
	return strControl;
}
