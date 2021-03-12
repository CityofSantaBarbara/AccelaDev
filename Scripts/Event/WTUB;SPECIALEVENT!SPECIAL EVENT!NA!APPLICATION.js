//Gray Quarter Inc.
//WTUB;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION


//*******START - $0 Balance*********
logDebug("balanceDue " + balanceDue);
if(true){
	if((wfTask == "Permit Issuance" && wfStatus == "Issued") 
		&& (parseInt(balanceDue) > 0)
		){
		cancel = true;
		showMessage = true;
		comment("Cannot final the permit because there is balance due of $" + balanceDue);
    }
}
//*******END - $0 Balance*********
