//********************************************************************************************************
//Script                
//Record Types: Planning!Application!General!NA 
//
//Event:                              one time
//
//Desc:                                Remove Zir Area 1 from Conditions at 630 Garden Street
//                                                                        
//                                                         this will use the function removeParcelCondition.
//
//Created By: Christina McGuire
//********************************************************************************************************
// Change Log
//                           Date                     Name                                  Modification
//                                                         01-21-2020         CGM                                    Initial Draft
//********************************************************************************************************

/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| START User Configurable Parameters
|
|     Only variables in the following section may be changed.  If any other section is modified, this
|     will no longer be considered a "Master" script and will not be supported in future releases.  If
|     changes are made, please add notes above.
/------------------------------------------------------------------------------------------------------*/

var controlString = "DocumentUploadAfter";                                                       // Standard choice for control
var preExecute = "PreExecuteForAfterEvents"                                                     // Standard choice to execute first (for globals, etc)
var documentOnly = false;                                                                                           // Document Only -- displays hierarchy of std choice steps

/*------------------------------------------------------------------------------------------------------/
| END User Configurable Parameters
/------------------------------------------------------------------------------------------------------*/
var SCRIPT_VERSION = 9.0;
var useCustomScriptFile = true;  // if true, use Events->Custom Script and Master Scripts, else use Events->Scripts->INCLUDES_*
var useSA = false;
var SA = null;
var SAScript = null;
var bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_FOR_EMSE");
if (bzr.getSuccess() && bzr.getOutput().getAuditStatus() != "I") {
                useSA = true;
                SA = bzr.getOutput().getDescription();
                bzr = aa.bizDomain.getBizDomainByValue("MULTI_SERVICE_SETTINGS", "SUPER_AGENCY_INCLUDE_SCRIPT");
                if (bzr.getSuccess()) {
                                SAScript = bzr.getOutput().getDescription();
                }
}



/*
useAppSpecificGroupName=true;
var dNow = "" + dateAdd(null,0); 
editAppSpecific("GMP RESIDENTIAL 2.Update Date",dNow)
editAppSpecific("GMP NONRESIDENTIAL 2.Update Date",dNow)

if (publicUser) {
  editAppSpecific("GMP RESIDENTIAL 2.Updated By",publicUserID);
  editAppSpecific("GMP NONRESIDENTIAL 2.Updated By",publicUserID);
}
else {
  editAppSpecific("GMP RESIDENTIAL 2.Updated By",currentUserID);
  editAppSpecific("GMP NONRESIDENTIAL 2.Updated By",currentUserID);
}
  
  

useAppSpecificGroupName=false;
*/

removeParcelCondition ("031-160-015", "Notice", "ZIR Area 1");