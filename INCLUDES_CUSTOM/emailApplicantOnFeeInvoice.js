//********************************************************************************************************
//Script 		Email Applicant on Fee Invoice  ********* Script #27
//Record Types:	*/*/*/*
//
//Event: 		IFA
//
//Desc:			When a fee is invoiced let the Applicant know.
//
//Assumptions:
//				If an applicant does not have an email this script will return a warning to the User
//
//
//Created By: Silver Lining Solutions 
//********************************************************************************************************
// Change Log
//         		Date		Name		Modification
//			09/11/2018	Eric		orig
//			12/07/2018	Chad		took out "return null" when no staff found, send email anyway
//			02/12/2019	Chad		adding aca url to parameters for template - city can use this as example.
//			05/08/2020	Chad		new template, new parameters
//			06/01/2020	Chad		new requirement 05/27/2020 -check to see if the fee has been voided.  If so, do not send a notice!
//********************************************************************************************************
function emailApplicantOnFeeInvoice()
{
	logDebug("Script 27 Email Applicant on Fee Invoice - Begin");

	if (!publicUser) handleFeeInvoiceNotificationEmail();
	logDebug("Script 27 Email Applicant on Fee Invoice - End");
}