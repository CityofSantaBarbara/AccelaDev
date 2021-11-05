//ASIUA:BUILDING/OVER THE COUNTER/REROOF/NA
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