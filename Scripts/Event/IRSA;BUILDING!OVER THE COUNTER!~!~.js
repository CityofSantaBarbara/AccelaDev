//********************************************************************************************************
//Inspection Result Submit After for OnDemand Records.
//Created By: Gray Quarter Inc. 6/8/21
//********************************************************************************************************

//GQ - Zen Desk Ticket #1728
logDebug("start of IRSA;BUILDING!OVER THE COUNTER!~!~");

if ((inspType == "Building Final - Not Occupied" 
	|| inspType == "Final Electrical"
	|| inspType == "Final Mechanical"
	|| inspType == "Final Plumbing")
	&& inspResult == "Passed") {
	closeTask("Inspection","Final Inspection Complete","Auto Closed by Script","Auto Closed by Script");
	//closeTask("Close","Closed","Auto Closed by Script","Auto Closed by Script");
	updateAppStatus("Complete","Auto Closed by Script");
	}
	logDebug("Criteria met at inspection type of " + inspType);
logDebug("end of IRSA;BUILDING!OVER THE COUNTER!~!~");
