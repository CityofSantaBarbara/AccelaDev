aa.print("Here in runReportASync");

//Get environmental variables pass into the script
var reportTemplate = aa.env.getValue("reportTemplate");
var vRParams = aa.env.getValue("vRParams");
var vChangeReportName = aa.env.getValue("vChangeReportName");
var capId = aa.env.getValue("CapId");

//Set variables used in the script
var vReportName;

//Start modification to support batch script, if not batch then grab globals, if batch do not.
if (aa.env.getValue("eventType") != "Batch Process") {
	/* Begin Code needed to call master script functions ---------------------------------------------------*/
	var SCRIPT_VERSION = 3.0;
	aa.env.setValue("CurrentUserID", "ADMIN");
	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS", null, true));
	eval(getScriptText("INCLUDES_ACCELA_GLOBALS", null, true));
	eval(getScriptText("INCLUDES_CUSTOM", null, true));

	function getScriptText(vScriptName, servProvCode, useProductScripts) {
		if (!servProvCode)
			servProvCode = aa.getServiceProviderCode();
		vScriptName = vScriptName.toUpperCase();
		var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
		try {
			if (useProductScripts) {
				var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);
			} else {
				var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");
			}
			return emseScript.getScriptText() + "";
		} catch (err) {
			return "";
		}
	}
}
/* End Code needed to call master script functions -----------------------------------------------------*/

//Generate report and get report name
vReportName = false;
if (reportTemplate != '' && reportTemplate != null) {
	//generate and get report file
	vReportName = generateReport(capId, reportTemplate, aa.getServiceProviderCode(), vRParams, 'Y');

	//update the report name if one was provided. this will be used to update the saved report's name
	if (vReportName != false && vChangeReportName != null && vChangeReportName != "") {
		if (editDocumentName(vReportName, vChangeReportName) == true) {
			vReportName = vChangeReportName;
		}
	}
}