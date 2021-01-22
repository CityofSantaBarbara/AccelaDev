
var myCapId = "BLD2019-05207";
var myUserId = "ADMIN";
var eventName = "";

/* CTRCA  */  //var eventName = "ConvertToRealCapAfter";
/* ASA  */  //var eventName = "ApplicationSubmitAfter";
/* WTUA */  var eventName = "WorkflowTaskUpdateAfter";  wfTask = "License Issuance";	  wfStatus = "Issued";  wfDateMMDDYYYY = "01/27/2015";
/* IRSA */  //var eventName = "InspectionResultSubmitAfter" ; inspResult = "Failed"; inspResultComment = "Comment";  inspType = "Roofing"
/* ISA  */  //var eventName = "InspectionScheduleAfter" ; inspType = "Roofing"
/* PRA  */  //var eventName = "PaymentReceiveAfter";

var useProductInclude = true; //  set to true to use the "productized" include file (events->custom script), false to use scripts from (events->scripts)
var useProductScript = true;  // set to true to use the "productized" master scripts (events->master scripts), false to use scripts from (events->scripts)
var runEvent = true; // set to true to simulate the event and run all std choices/scripts for the record type.

/* master script code don't touch */ aa.env.setValue("EventName",eventName); var vEventName = eventName;  var controlString = eventName;  var tmpID = aa.cap.getCapID(myCapId).getOutput(); if(tmpID != null){aa.env.setValue("PermitId1",tmpID.getID1()); 	aa.env.setValue("PermitId2",tmpID.getID2()); 	aa.env.setValue("PermitId3",tmpID.getID3());} aa.env.setValue("CurrentUserID",myUserId); var preExecute = "PreExecuteForAfterEvents";var documentOnly = false;var SCRIPT_VERSION = 3.0;var useSA = false;var SA = null;var SAScript = null;var bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS","SUPER_AGENCY_FOR_EMSE"); if (bzr.getSuccess() && bzr.getOutput().getAuditStatus() != "I") { 	useSA = true; 		SA = bzr.getOutput().getDescription();	bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS","SUPER_AGENCY_INCLUDE_SCRIPT"); 	if (bzr.getSuccess()) { SAScript = bzr.getOutput().getDescription(); }	}if (SA) {	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",SA,useProductScript));	eval(getScriptText("INCLUDES_ACCELA_GLOBALS",SA,useProductScript));	/* force for script test*/ showDebug = true; eval(getScriptText(SAScript,SA,useProductScript));	}else {	eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS",null,useProductScript));	eval(getScriptText("INCLUDES_ACCELA_GLOBALS",null,useProductScript));	}	eval(getScriptText("INCLUDES_CUSTOM",null,useProductInclude));if (documentOnly) {	doStandardChoiceActions2(controlString,false,0);	aa.env.setValue("ScriptReturnCode", "0");	aa.env.setValue("ScriptReturnMessage", "Documentation Successful.  No actions executed.");	aa.abortScript();	}var prefix = lookup("EMSE_VARIABLE_BRANCH_PREFIX",vEventName);var controlFlagStdChoice = "EMSE_EXECUTE_OPTIONS";var doStdChoices = true;  var doScripts = false;var bzr = aa.bizDomain.getBizDomain(controlFlagStdChoice ).getOutput().size() > 0;if (bzr) {	var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice ,"STD_CHOICE");	doStdChoices = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";	var bvr1 = aa.bizDomain.getBizDomainByValue(controlFlagStdChoice ,"SCRIPT");	doScripts = bvr1.getSuccess() && bvr1.getOutput().getAuditStatus() != "I";	}	function getScriptText(vScriptName, servProvCode, useProductScripts) {	if (!servProvCode)  servProvCode = aa.getServiceProviderCode();	vScriptName = vScriptName.toUpperCase();	var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();	try {		if (useProductScripts) {			var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(), vScriptName);		} else {			var emseScript = emseBiz.getScriptByPK(aa.getServiceProviderCode(), vScriptName, "ADMIN");		}		return emseScript.getScriptText() + "";	} catch (err) {		return "";	}}logGlobals(AInfo); if (runEvent && typeof(doStandardChoiceActions) == "function" && doStdChoices) try {doStandardChoiceActions(controlString,true,0); } catch (err) { logDebug(err.message) } if (runEvent && typeof(doScriptActions) == "function" && doScripts) doScriptActions(); var z = debug.replace(/<BR>/g,"\r");  aa.print(z);

//
// User code goes here
//

try {
	showDebug = true;

	var sql = "select b1_alt_id, b1_file_dd,b1_appl_status from b1permit where serv_prov_code = 'SANTABARBARA' and B1_FILE_DD > TO_DATE('1/1/2008', 'MM/DD/YYYY') and b1_appl_status in ('Issued','Permit Issued')";
	var r = doSQL(sql);
	var outArray = []
	for (var i in r) {
		if (i > 100) continue;
		var o = {}
		o.capId = "" + r[i].b1_alt_id;
		o.date = "" + r[i].b1_file_dd;
		o.status = "" + r[i].b1_appl_status;
		capId = aa.cap.getCapID(r[i].b1_alt_id).getOutput();
		var p = getPrimaryParcel(capId);
		if (p) {
			o.parcel = String(p.getParcel());
			o.inspArea = String(getGISInfo(aa.getServiceProviderCode(), "Building Permit Inspection Areas", "Region", "-5"));
		}
		outArray.push(o);
	}
	logDebug(JSON.stringify(outArray));
	
	}
catch (err) {
	logDebug("A JavaScript Error occured: " + err.message + " at line " + err.lineNumber + " stack: "+ err.stack);
	}
// end user code
aa.env.setValue("ScriptReturnCode", "0"); 	aa.env.setValue("ScriptReturnMessage", debug)

function getPrimaryParcel(capId) 
	{
	// ths function will return the primary parcel for the record. If there is only one parcel 
	// and it is set not as the primary it will return that parcel
	// if there are multiple parcels on the record and none of them are 
	// marked as primary it will return the last one in the list.
	capParcelResult = aa.parcel.getParcelandAttribute(capId, null);
	
	if (capParcelResult.getSuccess()) 
		{
			parcels = capParcelResult.getOutput().toArray();
			if (parcels.length > 0){
				for (var p in parcels)
				{
					thisParcel = parcels[p];
					if (thisParcel.getPrimaryParcelFlag() == "Y")
						{
						return thisParcel;
						break;
						}
				}
				return thisParcel;
			} else {
				return null;
				}
		}
	
	}
	
function doSQL(sql) {
        try {
		var array = [];
		var initialContext = aa.proxyInvoker.newInstance("javax.naming.InitialContext", null).getOutput();
		var ds = initialContext.lookup("java:/AA");
		var conn = ds.getConnection();
		var sStmt = conn.prepareStatement(sql);

		if (sql.toUpperCase().indexOf("SELECT") == 0) {
			aa.print("executing " + sql);
			var rSet = sStmt.executeQuery();
			while (rSet.next()) {
				var obj = {};
				var md = rSet.getMetaData();
				var columns = md.getColumnCount();
				for (i = 1; i <= columns; i++) {
								obj[md.getColumnName(i)] = String(rSet.getString(md.getColumnName(i)));
				}
				obj.count = rSet.getRow();
				array.push(obj)
				}
						rSet.close();
						aa.print("...returned " + array.length + " rows");
						aa.print(JSON.stringify(array));
						return array
		} else if (sql.toUpperCase().indexOf("UPDATE") == 0) {
			aa.print("executing update: " + sql);
			var rOut = sStmt.executeUpdate();
			aa.print(rOut + " rows updated");
		} else {
			aa.print("executing : " + sql);
			var rOut = sStmt.execute();
			aa.print(rOut);
		}
		sStmt.close();
		conn.close();
	} catch (err) {
			aa.print(err.message);
	}
}