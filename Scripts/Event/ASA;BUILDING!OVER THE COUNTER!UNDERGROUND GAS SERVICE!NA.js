//ASA;BUILDING!OVER THE COUNTER!UNDERGROUND GAS SERVICE!NA.js
//ASA:BUILDING/OVER THE COUNTER/UNDERGROUND GAS SERVICE/NA
//Added by Gray Quarter
//New On Demand UNDERGROUND GAS SERVICE record for ACA
removeAllFees(capId);
updateFee("BLD_ITM_0750", "BLD LINE ITEMS FY2021", "FINAL", 1, "Y");


//Other fees that need to be added.
//****************************************//
//SMIP Category 1 - Smaller Residential - This fee is $13 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5001
//Fee Schedule: BLD LINE ITEMS FY2021
// estValue is populated by master scripts
//var fee = Math.max(13,estValue * .00013).toFixed(2);
var fee = Math.max(0.5, estValue * 0.00013).toFixed(2);

updateFee("BLD_ITM_5001", "BLD LINE ITEMS FY2021", "FINAL", fee, "Y");
//SB 1473 - Building Standards Commission Fee - This fee is $4 per every $100,000 and calculated from the Addional Info "Job Value"
//Fee Item Code: BLD_ITM_5000
//Fee Schedule: BLD LINE ITEMS FY2021
// estValue is populated by master scripts
//var fees = Math.max(4,estValue * .00004).toFixed(2);
var fees = Math.max(1, estValue * 0.00004).toFixed(2);

updateFee("BLD_ITM_5000", "BLD LINE ITEMS FY2021", "FINAL", fees, "Y");
//Technology Fee (8% BLD PLN & PBW fees)
//Fee Item Code: BLD_ITM_0018
//Fee Schedule: BLD LINE ITEMS FY2021
updateFee("BLD_ITM_0018", "BLD LINE ITEMS FY2021", "FINAL", 1, "Y");
//Records Management (5% of BLD & PLN fees)
//Fee Item Code: BLD_ITM_2040
//Fee Schedule: BLD LINE ITEMS FY2021
updateFee("BLD_ITM_2040", "BLD LINE ITEMS FY2021", "FINAL", 1, "Y");
//********************End************************//


//Set the Detail Description
var totPoints = "";
if (AInfo["Desired Scoping and Conditioning Questions 1"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The current location of this gas service is the same location that was previously approved by the City of Santa Barbara ";
}
if (AInfo["Desired Scoping and Conditioning Questions 2"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The new gas service will be installed in accordance with the manufacturers installation ";
}
if (AInfo["Desired Scoping and Conditioning Questions 3"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All materials are nationally listed ";
}
if (AInfo["Desired Scoping and Conditioning Questions 4"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All trenching and erosion control methods shall meet all State and local codes adopted by the City of Santa Barbara ";
}
if (AInfo["The gas piping replacement does not include"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The gas piping replacement does not include any work in the interior of the structure ";
}
if (AInfo["All gas piping replacement shall occur only on private property"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All gas piping replacement shall occur only on private property ";
}

updateWorkDesc(String(totPoints));

//******************END*****************//
