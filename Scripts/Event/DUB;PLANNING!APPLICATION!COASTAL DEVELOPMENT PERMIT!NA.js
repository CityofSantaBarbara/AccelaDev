//DUB;PLANNING!APPLICATION!COASTAL DEVELOPMENT PERMIT!NA.js
//DUB:PLANNING/APPLICATION/COASTAL DEVELOPMENT PERMIT/NA
//Added by Gray Quarter Ticket #1699
//Start - Stop Documents from being uploaded thru ACA on CDO records

showMessage = true;
if(publicUser){
    cancel = true;
    comment("Uploading documents is not allowed for this record.");
}
 
//END - Stop Documents from being uploaded thru ACA on CDO records 