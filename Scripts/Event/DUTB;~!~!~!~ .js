showMessage = true;
validateDocument();

function validateDocument(){

	if(docCapStatus && (docCapStatus == "Revisions Required")){
		cancel = true;
		comment(" You can not edit the document because current records status is : " + docCapStatus);
	}
	
	
}
