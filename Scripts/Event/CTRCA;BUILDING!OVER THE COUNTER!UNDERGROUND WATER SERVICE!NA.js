//CTRCA;BUILDING!OVER THE COUNTER!UNDERGROUND WATER SERVICE!NA.js
//CTRCA:BUILDING/OVER THE COUNTER/UNDERGROUND WATER SERVICE/NA
//Added by Gray Quarter
//Start - New On Demand UNDERGROUND WATER SERVICE record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_UNDERGROUND_WATER_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand UNDERGROUND WATER SERVICE record for ACA
