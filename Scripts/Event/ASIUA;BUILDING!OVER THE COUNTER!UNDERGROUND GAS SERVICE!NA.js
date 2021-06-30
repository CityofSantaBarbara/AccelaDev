//ASIUA:BUILDING/OVER THE COUNTER/UNDERGROUND GAS SERVICE/NA
//Set the Detail Description
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