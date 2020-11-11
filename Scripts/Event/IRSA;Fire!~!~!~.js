//***
// added script 9 logic here to keep this script from closing tasks for NFPA 13 record types here

//********************************************************************************************************
//Script 		73 FIR - Close out cases 
//Record Types:	Fire!~!~!~ 
//
//Event: 		InspectionResultSubmitAfter
//
//Desc:			Details for the scrip requirements identified with group webex: 
//              Trigger: Inspection Result After 
//              Criteria Record Types: All Fire Records â€“ no exceptions Inspection Group: Inspection Types: â€˜Fire Finalâ€™ 
//				Inspection Result: â€˜Passedâ€™ 
//				Action Close Workflow Task Task = â€˜Inspectionâ€™ 
//				Status = â€˜Final Inspection Passedâ€™ 
//				Task = â€˜Closeâ€™ Status = â€˜Closedâ€™ Close Record Application Status = â€˜Closedâ€™
//
//Created By: ASH 8-14-2018
//********************************************************************************************************
// Change Log
//         		Date		Name			Modification
//				08-14-2018	Alec			Initial Draft
//********************************************************************************************************


logDebug("start of IRSA:Fire!~!~!~");

if (inspType == "Fire Final" && inspResult == "Passed" && appTypeString != "Fire/Sprinkler System/Commercial - NFPA 13/NA" ) {
	logDebug("Criteria met at inspection type of fire final");
	closeTask("Inspection","Final Inspection Passed","Auto Closed by Script","Auto Closed by Script");
	closeTask("Close","Closed","Auto Closed by Script","Auto Closed by Script");
	updateAppStatus("Closed","Auto Closed by Script");
	}


logDebug("The Middle of the Script");





logDebug("end of IRSA:Fire!~!~!~");
