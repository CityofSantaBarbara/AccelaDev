function notificationDistributionBuild(emailList)
{
	var email = "";
	var emailListArray = emailList.split(",");
	for (var i=0; i<emailListArray.length;i++)
	{
		if (emailListArray[i] == "AppStaff")
		{
			var staff = getRecordAssignedStaffEmail();
			if (staff){email += "; " + staff; logDebug("email: " + email);}
		}
		else if (emailListArray[i] == "WFStaff")
		{
			var staff = getTaskAssignedStaffEmail("Plans Distribution");
			if (staff){email += "; " + staff; logDebug("email: " + email);}
		}
		else
		{
			var contactType = emailListArray[i];
			var capContactResult = aa.people.getCapContactByCapID(capId);
			if (capContactResult.getSuccess())
			{
				var Contacts = capContactResult.getOutput();
				for (yy in Contacts)
					if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
						if (Contacts[yy].getEmail() != null)
						{
							email += ";" + Contacts[yy].getEmail();
							logDebug("email: " + email);
						}
			}
		}
	}

	return email;
}