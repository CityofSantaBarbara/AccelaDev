//CTRCA;BUILDING!OVER THE COUNTER!HVAC!NA.js
//CTRCA:BUILDING/OVER THE COUNTER/HVAC/NA
//Added by Gray Quarter
//Start - New On Demand HVAC record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_HVAC_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand HVAC record for ACA
