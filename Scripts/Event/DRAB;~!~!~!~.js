showMessage = true;
showDebug = false;
validateDocument();

function validateDocument(){

	//aa.print("capstatus="+docCapStatus );
	if (docCapStatus && (docCapStatus == "Permit Cancelled" || docCapStatus == "Closed" || docCapStatus == "Application Withdrawn" || docCapStatus == "Permit Expired" || docCapStatus == "Completed" || docCapStatus == "Complete" || docCapStatus == "Void")) {
		cancel = true;
		comment(" You can not edit the document because current records status is : " + docCapStatus);
	}
	
	
}
