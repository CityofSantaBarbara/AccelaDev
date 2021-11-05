//ASIUA:BUILDING/OVER THE COUNTER/WATER HEATER/NA
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