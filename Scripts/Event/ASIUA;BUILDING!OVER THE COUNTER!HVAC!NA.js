//ASIUA:BUILDING/OVER THE COUNTER/HVAC/NA
//Set the Detail Description

var totPoints = "";
if (
  AInfo[
    "Remove and Replace Wall Heater"
  ] == "CHECKED"
  ) {
  if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Remove and Replace Wall Heater ";
  } if (
  AInfo[
    "Remove and Replace only the HVAC furnace and fan"
  ] == "CHECKED"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Remove and Replace only the HVAC furnace and fan ";
  }
 if (
  AInfo[
    "Remove and Replace the HVAC furnace fan and all duct work"
  ] == "CHECKED"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Remove and Replace the HVAC furnace fan and all duct work ";
  }
 if (
  AInfo[
    "Remove and Replace the HVAC furnace fan duct work and exterior condensing unit"
  ] == "CHECKED"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Remove and Replace the HVAC furnace fan duct work and exterior condensing unit ";
  }
  

  updateWorkDesc(String(totPoints));

//******************END*****************//