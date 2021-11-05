//CTRCA;BUILDING!OVER THE COUNTER!SOLAR!NA.js
//CTRCA:BUILDING/OVER THE COUNTER/SOLAR/NA
//Added by Gray Quarter
//Start - New On Demand SOLAR record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_SOLAR_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand SOLAR record for ACA
