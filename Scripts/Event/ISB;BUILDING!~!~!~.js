// GQ Ticket #270   


var capStatus = cap.getCapStatus();

if(capStatus != "Issued" && capStatus != "Permit Issued"){
	//cancel scheduling
	//logDebug("You Can't Schedule This!!!");	
	showMessage = true;
	showDebug = false;
	comment("Inspections may not be scheduled until a permit has been issued!");
	cancel = true;
}

function addComboInspection(rInspArr) {
    for (var x in rInspArr) {
        var rInspection = rInspArr[x];
        var rInsp = uObj.getOutput();
        var rPhone = inspObj.getRequestPhoneNum();
        var rCom = inspObj.getInspectionComments();
        var rDate = inspObj.getScheduledDate();
        var rTime = inspObj.getScheduledTime();
        aa.inspection.scheduleInspection(capId, rInsp, rDate, rTime, rInspection, rPhone + ' ' + rCom);
    }
}

if (inspType.equals('Underground Electric')) {
// list of the inspection types that are then scheduled.
    rInspArr = new Array('Initial Erosion Control');
    addComboInspection(rInspArr);
}
