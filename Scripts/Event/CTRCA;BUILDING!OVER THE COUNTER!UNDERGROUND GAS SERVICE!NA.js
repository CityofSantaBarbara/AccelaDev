//CTRCA;BUILDING!OVER THE COUNTER!WATER HEATER!NA.js
//CTRCA:BUILDING/OVER THE COUNTER/WATER HEATER/NA
//Added by Gray Quarter
//Start - New On Demand WATER HEATER record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_UNDERGROUND_GAS_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand WATER HEATER record for ACA
