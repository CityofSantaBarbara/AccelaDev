function notificationParamBuild(emailParameters)
{
	addParameter(emailParameters, "$$altID$$", cap.getCapModel().getAltID());
	addParameter(emailParameters, "$$recordAlias$$", cap.getCapType().getAlias());
	addParameter(emailParameters, "$$wfComments$$", wfComment);
	addParameter(emailParameters, "$$recAddress$$", getAddress(capId));
	addParameter(emailParameters, "$$recDescription$$", getWorkDescription(capId));
	
	return emailParameters;
}