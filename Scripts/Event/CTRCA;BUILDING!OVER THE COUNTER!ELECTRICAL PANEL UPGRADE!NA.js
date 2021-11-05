//CTRCA;BUILDING!OVER THE COUNTER!ELECTRICAL PANEL UPGRADE!NA.js
//CTRCA:BUILDING/OVER THE COUNTER/ELECTRICAL PANEL UPGRADE/NA
//Added by Gray Quarter
//Start - New On Demand Electrical Panel Upgrade record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_ELE_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand Electrical Panel Upgrade record for ACA
