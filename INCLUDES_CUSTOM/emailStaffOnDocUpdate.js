//********************************************************************************************************
//Script 		Email Staff on Document Update
//Record Types:	?*/*/*/*
//
//Event: 		DUA
//
//Desc:			When a Revision Required Document gets resubmitted thru ACA. Email the Santa Barbara Staff 
// 				that is assigned to the Plan Distributed Workflow Task. Also set the Workflow Task Plans 
//				Distribution Status to Revisions Received.
//
//Assumptions:
//				Staff must always be assigned to Plans Distribution 
//				Staff must have a valid email defined in their User Profile
//
//Psuedo Code:	
// 				use Document Update Notification template
//
//Created By: Silver Lining Solutions 
//********************************************************************************************************
// Change Log
//         		Date		Name			Modification
//				08/15/2018	Eric 			Initial Development
//				09/11/2018	Eric			moved this code to incl custom and made mods to include all 
//											dept bus rules
//********************************************************************************************************
function emailStaffOnDocUpdate()
{
	logDebug("Script 31 Email Staff on Document Update - Begin");

	if (appMatch("Building/*/*/*"))
	{
		activateTask("Plans Distribution");
		updateTask("Plans Distribution","Revisions Received","auto updated by script","auto updated by script");
	}
	
	handleNotificationEmail();

	logDebug("Script 31 Email Staff on Document Update - End");
}