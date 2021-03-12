
//*********************Begin********************//
//***** Written by Gray Quarter			//
//***** Deployed on 09/22/2020 			//
//***** Override standard function with new api functionality available for CoA//
//***** //
//********************End************************//

function addStdCondition(cType, cDesc) // optional cap ID
{
    var itemCap = capId;
    if (arguments.length == 3) {
        itemCap = arguments[2]; // use cap ID specified in args
    }
    if (!aa.capCondition.getStandardConditions) {
        logDebug("addStdCondition function is not available in this version of Accela Automation.");
    }
    else {
        standardConditions = aa.capCondition.getStandardConditions(cType, cDesc).getOutput();
        for (i = 0; i < standardConditions.length; i++)
            if (standardConditions[i].getConditionType().toUpperCase() == cType.toUpperCase() && standardConditions[i].getConditionDesc().toUpperCase() == cDesc.toUpperCase()) //EMSE Dom function does like search, needed for exact match
            {
                standardCondition = standardConditions[i];

                var addCapCondResult = aa.capCondition.createCapConditionFromStdCondition(itemCap, standardCondition.getConditionNbr());

                if (addCapCondResult.getSuccess()) {
                    logDebug("Successfully added condition (" + standardCondition.getConditionDesc() + ")");
                }
                else {
                    logDebug("**ERROR: adding condition (" + standardCondition.getConditionDesc() + "): " + addCapCondResult.getErrorMessage());
                }
            }
    }
}
