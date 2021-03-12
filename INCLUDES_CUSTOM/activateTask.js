function activateTask(wfstr) { // optional process name, optional Cap id
	var useProcess = false;
	var processName = "";
	if (arguments.length == 2) {
		processName = arguments[1]; // subprocess
		if (processName) useProcess = true;
	}

	var itemCap = capId;
	var recNum = "";
	if (arguments.length == 3)  itemCap = arguments[2];

	var workflowResult = aa.workflow.getTasks(itemCap);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage());
				if (itemCapId) {
		        recNum = aa.cap.getCapID(itemCapId).getOutput();

		        if(!recNum) { //If record didn't return from first api call above, try splitting up into per Ids and then getting the capID.
		            var perIds = itemCapId.toString().split('-');
		            recNum = aa.cap.getCapID(perIds[0],perIds[1],perIds[2]).getOutput();
		        }
		    }
          slackDebug(recNum + " activateTask() : ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage());
					return false;
			 }

	for (i in wfObj) {
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  && (!useProcess || fTask.getProcessCode().equals(processName))) {
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();

			if (useProcess)
				aa.workflow.adjustTask(itemCap, stepnumber, processID, "Y", "N", null, null)
			else
				aa.workflow.adjustTask(itemCap, stepnumber, "Y", "N", null, null)

			logMessage("Activating Workflow Task: " + wfstr);
			logDebug("Activating Workflow Task: " + wfstr);
		}
	}
}
