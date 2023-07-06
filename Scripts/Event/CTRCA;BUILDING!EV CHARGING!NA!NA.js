//CTRCA;BUILDING!EV CHARGING!NA!NA.js
//CTRCA:BUILDING/EV CHARGING/NA/NA
//Added by Gray Quarter
//Start - New On Demand EV CHARGING record for ACA

if (publicUser) {
  //runReportAsyncAttach(capId, "On Demand Permit Record","PermitNum",capId.getCustomID());
  runAsyncEvent("ASYNC_ONDEMAND_EVCHARGING_SEND_EMAIL",capIDString,currentUserID);
}


//END - New On Demand EV CHARGING record for ACA
