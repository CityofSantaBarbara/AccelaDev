//ASA;BUILDING!OVER THE COUNTER!WATER HEATER!NA.js
//ASA:BUILDING/OVER THE COUNTER/WATER HEATER/NA
//Added by Gray Quarter
//New On Demand WATER HEATER record for ACA
removeAllFees(capId);
updateFee("BLD_ITM_0820", "BLD LINE ITEMS", "FINAL", 1, "Y");


//Other fees that need to be added.
//****************************************//
//SMIP Category 1 - Smaller Residential - This fee is $13 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5001
//Fee Schedule: BLD LINE ITEMS
// estValue is populated by master scripts
//var fee = Math.max(13,estValue * .00013).toFixed(2);
var fee = Math.max(0.5, estValue * 0.00013).toFixed(2);

updateFee("BLD_ITM_5001", "BLD LINE ITEMS", "FINAL", fee, "Y");
//SB 1473 - Building Standards Commission Fee - This fee is $4 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5000
//Fee Schedule: BLD LINE ITEMS
// estValue is populated by master scripts
//var fees = Math.max(4,estValue * .00004).toFixed(2);
var fees = Math.max(1, estValue * 0.00004).toFixed(2);

updateFee("BLD_ITM_5000", "BLD LINE ITEMS", "FINAL", fees, "Y");
//Technology Fee (8% BLD PLN & PBW fees)
//Fee Item Code: BLD_ITM_0018
//Fee Schedule: BLD LINE ITEMS
updateFee("BLD_ITM_0018", "BLD LINE ITEMS", "FINAL", 1, "Y");
//Records Management (5% of BLD & PLN fees)
//Fee Item Code: BLD_ITM_2040
//Fee Schedule: BLD LINE ITEMS
updateFee("BLD_ITM_2040", "BLD LINE ITEMS", "FINAL", 1, "Y");
//********************End************************//


//Set the Detail Description
var totPoints = "";
if (AInfo["Like-for-like tank style gas or electric water heater replacement WITHOUT fuel gas piping"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "Like-for-like tank style gas or electric water heater replacement WITHOUT fuel gas piping or electrical system modifications ";
}
if (AInfo["Like-for-like tank style gas or electric water heater replacement WITH fuel gas piping"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "Like-for-like tank style gas or electric water heater replacement WITH fuel gas piping or electrical system modifications ";
}
if (AInfo["New ondemand water heater replacing existing tank gas or electric water heater WITHOUT fuel gas pipe"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "New on-demand water heater replacing existing tank gas or electric water heater WITHOUT fuel gas piping modifications ";
}
if (AInfo["New ondemand water heater replacing existing tank gas or electric water heater WITH fuel gas piping"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "New on-demand water heater replacing existing tank gas or electric water heater WITH fuel gas piping modifications ";
}
if (AInfo["New on-demand water heater replacing existing ondemand water heater WITHOUT fuel gas piping"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "New on-demand water heater replacing existing on-demand water heater WITHOUT fuel gas piping modifications ";
}
if (AInfo["New on-demand water heater replacing existing on-demand water heater WITH fuel gas piping"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "New on-demand water heater replacing existing on-demand water heater WITH fuel gas piping modifications ";
}

updateWorkDesc(String(totPoints));

//******************END*****************//
