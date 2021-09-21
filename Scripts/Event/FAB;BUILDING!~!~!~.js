//********************************************************************************************************
//Script 		FAB;BUILDING!~!~!~
//Event: 		Fee Assess Before
//Created By: Gray Quarter
//********************************************************************************************************
// Change Log
//         		Date		Name			        Modification
//				09-20-2021	Gray Quarter			Initial Draft
//********************************************************************************************************
logDebug("start FAB;BUILDING!~!~!~ to check correct fee!");
/*
//START - ZenDesk Ticket #1969 NRS Over/Under Fee Update
newList = String(FeeItemsList).replace("[","").replace("]","");  
newList = newList + "";
feeItemArr = newList.split("|");
for (var fIndex in feeItemArr) {
    thisFeeItem = String(feeItemArr[fIndex]);
    logDebug(thisFeeItem);
//New A Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_10") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_010") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New A Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_11") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_011") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New B Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_20") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_020") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New B Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_21") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_021") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New E Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_30") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_030") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New E Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_31") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_031") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New F Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_40") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_040") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New F Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_41") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_041") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New H Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_50") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_050") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New H Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_51") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_051") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New I Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_60") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_060") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New I Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_61") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_061") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New R1 Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_70") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_070") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New R1 Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_71") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_071") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New R2 Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_80") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_080") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New R2 Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_81") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_081") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New M Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_90") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_090") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New M Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_91") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_091") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New S Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_102") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_100") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New S Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_103") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_101") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New Shell Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_109") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_110") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New Shell Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_112") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_111") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//New Res Shell Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_119") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_120") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New Res Shell Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_122") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_121") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
    */
//New R3 Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_129") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_130") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//New R3 Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_132") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_131") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
/*
//TI A Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_139") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_140") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI A Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_142") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_141") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI B Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_149") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_150") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI B Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_152") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_151") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI E Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_159") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_160") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI E Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_162") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_161") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI F Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_169") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_170") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI F Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_172") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_171") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI H Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_179") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_180") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI H Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_182") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_181") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI I Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_189") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_190") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI I Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_192") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_191") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI M Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_199") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_200") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI M Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_202") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_201") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI R1 Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_209") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_210") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI R1 Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_212") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_211") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI R2 Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_219") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_220") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI R2 Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_222") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_221") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
//TI S Occupancy Plan Check Fee
    if (thisFeeItem == "BLD_NRS_229") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_230") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
        }
//TI S Occupancy Inspection Fee
    if (thisFeeItem == "BLD_NRS_232") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        if (parseFloat(feeQty) >= 1000) {
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft over 1000 sq ft. Please use the fee that  is (Over 1000 sq ft)");
            }
        }
    if (thisFeeItem == "BLD_NRS_231") {
        newQtyList =  String(FeeItemsQuantityList).replace("[","").replace("]","");  
        newQtyList = newQtyList + "";
        feeQtyArray = newQtyList.split("|");
        feeQty = feeQtyArray[fIndex];
        logDebug("Before Second IF")
        if (parseFloat(feeQty) < 1000) {
            logDebug("Here we are")
            cancel = true;
            showMessage= true;
            comment("You have selected a sq ft Under 1000 sq ft. Please use the fee that is (Under 1000 sq ft)");
            }
    }
}
*/
//END - ZenDesk Ticket #1969 NRS Over/Under Fee Update
logDebug("end  FAB;BUILDING!~!~!~ to check correct fee!");

