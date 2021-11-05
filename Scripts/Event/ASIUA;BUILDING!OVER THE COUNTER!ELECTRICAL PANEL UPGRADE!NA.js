//ASIUA:BUILDING/OVER THE COUNTER/ELECTRICAL PANEL UPGRADE/NA
//Set the Detail Description
var totPoints = "";
if (
  AInfo[
    "Replace with New Recessed"
  ] == "CHECKED"
  ) {
  if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Replace with New Recessed <400 amp electrical panel in same location ";
  } if (
  AInfo[
    "Replace with New Surface Mounted"
  ] == "CHECKED"
  ) {
    if(totPoints != '') totPoints+= '& ';
  totPoints = totPoints + "Replace with New Surface Mounted <400 amp electrical panel in same location ";
  }
 

  updateWorkDesc(String(totPoints));

//******************END*****************//
