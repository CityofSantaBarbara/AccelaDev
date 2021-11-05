//ASIUA:BUILDING/OVER THE COUNTER/SOLAR/NA
//Set the Detail Description
var totPoints = "";
if (AInfo["Solar Photovoltaic"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "Solar Photovoltaic up to 10 kW AC CEC rating ";
}
if (AInfo["Solar Photovoltaic and Battery Energy"] == "CHECKED") {
  if (totPoints != "") totPoints += "& ";
  totPoints = totPoints + "Solar Photovoltaic up to 10kW and Battery Energy Storage up to 27 kWh ";
}

updateWorkDesc(String(totPoints));

//******************END*****************//