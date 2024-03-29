//ASA;BUILDING!OVER THE COUNTER!SOLAR!NA.js
//ASA:BUILDING/OVER THE COUNTER/SOLAR/NA
//Added by Gray Quarter
//New On Demand SOLAR record for ACA
removeAllFees(capId);

updateFee("BLD_ITM_0030", "BLD LINE ITEMS", "FINAL", 1, "Y");

if (AInfo['Encroch'] == 'CHECKED') {
  updateFee("PDW2", "PBW_BLD_TRANS_REV", "FINAL", 1, "Y");
}
//Other fees that need to be added.
//****************************************//
//SMIP Category 1 - Smaller Residential - This fee is $13 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5001
//Fee Schedule: BLD LINE ITEMS FY2021
// estValue is populated by master scripts
//var fee = Math.max(13,estValue * .00013).toFixed(2);
var fee = Math.max(0.5, estValue * 0.00013).toFixed(2);

updateFee("BLD_ITM_5001", "BLD LINE ITEMS", "FINAL", fee, "Y");
//SB 1473 - Building Standards Commission Fee - This fee is $4 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5000
//Fee Schedule: BLD LINE ITEMS FY2021
// estValue is populated by master scripts
//var fees = Math.max(4,estValue * .00004).toFixed(2);
var fees = Math.max(1, estValue * 0.00004).toFixed(2);

updateFee("BLD_ITM_5000", "BLD LINE ITEMS", "FINAL", fees, "Y");
//Technology Fee (8% BLD PLN & PBW fees)
//Fee Item Code: BLD_ITM_0018
//Fee Schedule: BLD LINE ITEMS FY2021
updateFee("BLD_ITM_0018", "BLD LINE ITEMS", "FINAL", 1, "Y");
//Records Management (5% of BLD & PLN fees)
//Fee Item Code: BLD_ITM_2040
//Fee Schedule: BLD LINE ITEMS FY2021
updateFee("BLD_ITM_2040", "BLD LINE ITEMS", "FINAL", 1, "Y");
//********************End************************//


//Set the Detail Description
var totPoints = "";
if (AInfo["Solar Photovoltaic and Battery Energy"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "Solar Photovoltaic up to 10kW and Battery Energy Storage up to 27 kWh ";
}

updateWorkDesc(String(totPoints));

//******************END*****************//
