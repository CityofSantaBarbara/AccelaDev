//ASIUA:BUILDING/OVER THE COUNTER/UNDERGROUND WATER SERVICE/NA
//Set the Detail Description
var totPoints = "";
if (AInfo["Desired Scoping and Conditioning Questions 1"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The current location of this water service is the same location that was previously approved by the Ci ";
}
if (AInfo["Desired Scoping and Conditioning Questions 2"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The new water service will be installed in accordance with the manufacturer’s installation ";
}
if (AInfo["Desired Scoping and Conditioning Questions 3"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All materials are nationally listed ";
}
if (AInfo["Desired Scoping and Conditioning Questions 4"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All trenching and erosion control methods shall meet all State and local codes adopted by the City of Santa Barbara ";
}
if (AInfo["The water piping replacement does not include"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "The water piping replacement does not include any work in the interior of the structure ";
}
if (AInfo["All water piping replacement shall occur only on private property"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "All water piping replacement shall occur only on private property ";
}

updateWorkDesc(String(totPoints));

//******************END*****************//