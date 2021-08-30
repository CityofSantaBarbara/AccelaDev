//ASA;BUILDING!OVER THE COUNTER!REROOF!NA.js
//ASA:BUILDING/OVER THE COUNTER/REROOF/NA
//Added by Gray Quarter
//New On Demand Re-Roof record for ACA
removeAllFees(capId);

var feeToAdd = [];
var bigRoof = parseInt(AInfo["Roof Square Footage"]) >= 3001;

// JHS assumes these are in order, most $$ to least $$

//Add the Fees from the one that is "CHECKED" and has a higher $ amount.
if (
  AInfo["Re-Roof Types"] == "Like for Like" || AInfo["Re-Roof Types"] == "Other"
) {
  feeToAdd.push("BLD_ITM_1090");
  if (bigRoof) feeToAdd.push("BLD_ITM_1100");
} else if (AInfo["Re-Roof Types"] == "Certified PVC Cool Roof") {
  feeToAdd.push("BLD_ITM_1090");
  if (bigRoof) feeToAdd.push("BLD_ITM_1100");
} else if (AInfo["Re-Roof Types"] == "Remove & Reset Tile Over New Weather Barrier") {
  feeToAdd.push("BLD_ITM_1090");
  if (bigRoof) feeToAdd.push("BLD_ITM_1100");
} else if (AInfo["Re-Roof Types"] == "Overlay Like for Like") {
  feeToAdd.push("BLD_ITM_1060");
  if (bigRoof) feeToAdd.push("BLD_ITM_1070");
}

for (var i in feeToAdd) {
  updateFee(feeToAdd[i], "BLD LINE ITEMS", "FINAL", 1, "Y");
}

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
if (
  AInfo["Re-Roof Types"] == "Like for Like"
  ) {
  if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Like for Like Tear-Off and Replace Composition Roofing ";
  } if (
    AInfo["Re-Roof Types"] == "Remove & Reset Tile Over New Weather Barrier"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Like for Like Remove & Re-Set Tile Roofing ";
  }
 if (
  AInfo["Re-Roof Types"] == "Overlay Like for Like"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Like for Like Composition Overlay Roofing ";
  }
 if (
  AInfo["Re-Roof Types"] == "Certified PVC Cool Roof"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Like-for-Like Color - Certified Cool Roof ";
  }
  

  updateWorkDesc(String(totPoints));

//******************END*****************//
