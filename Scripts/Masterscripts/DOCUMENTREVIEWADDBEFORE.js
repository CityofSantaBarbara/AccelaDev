aa.print("DocumentReviewAddBefore Start");var mailFrom = "shell.wang@achievo.com";var mailCC = "martha.liu@achievo.com;alex.zheng@beyondsoft.com;james.liang@beyondsoft.com;james.shi@beyondsoft.com;eric.he@beyondsoft.com";var subject		= 'You have released the permission to review the document';var emailContent	= 'This is an automated email notification to add permisson for your Review task.  Please do not reply to this email.';var capIDModel = null;var documentID = null;var userID = null;var entityAssociationModels = aa.env.getValue("DocumentReviewModels");var externalUserDept = aa.env.getValue("externalUserDept");var acaWebServiceSite = "http://eric-he01/";if(entityAssociationModels != null){	aa.print("DocumentReviewModels Length is:"+entityAssociationModels.size());	var it = entityAssociationModels.iterator();	while(it.hasNext())	{		var model = it.next();		aa.print("ID			=:" + model.getResID());		aa.print("Document ID		=:" + model.getDocumentID());		aa.print("Entity Type		=:" + model.getEntityType());		aa.print("Entity ID		=:" + model.getEntityID());		aa.print("User ID		=:" + model.getEntityID1());		aa.print("Process ID		=:" + model.getEntityID2());		aa.print("Step Number		=:" + model.getEntityID3());		aa.print("Assign Pages		=:" + model.getTaskReviewPages());		aa.print("Assign Comments	=:" + model.getTaskReviewComments());		aa.print("id1	=:" + model.getID1());		aa.print("id2	=:" + model.getID2());		aa.print("id3	=:" + model.getID3());		if(capIDModel ==null && "TASK" == model.getEntityType() && model.getID1()!=null && model.getID2()!=null  &&  model.getID3()!=null )		{			capIDModel = getCapIDModel(model.getID1(),model.getID2(),model.getID3());		}		if(documentID==null && model.getDocumentID() != null)		{			documentID = model.getDocumentID();		}		userID = model.getEntityID1();		if(externalUserDept ==  model.getEntityID() && model.getEntityID1()!='' && model.getEntityID1()!=null)		{			sendEmailByExtUser(model.getEntityID1())		}		else if(userID && userID !='')		{			sendEmailByUserID(userID);		}		else if(model.getEntityID() && model.getEntityID()!='')		{			sendEmailByDeptName(model.getEntityID());		}	 }	 }else{	  aa.print("ERROR: Cannot find the parameter 'DocumentReviewModels'.");}aa.env.setValue("ScriptReturnCode","0");aa.env.setValue("ScriptReturnMessage", "DocumentReviewAddBefore  End");/* * Send email by usre ID */function sendEmailByUserID(userID){	var peopleScriptModel = aa.people.getSysUserByID(userID);	if(peopleScriptModel.getSuccess())	{		var sysUserModel = peopleScriptModel.getOutput();		sendEmailByUserModel(sysUserModel);	}	else	{				aa.print("Can't get current user model by ID!");	}}/* * Send email by Department name */function sendEmailByDeptName(deptName){	var peopleScriptModel = aa.people.getSysUserListByDepartmentName(deptName);	if(peopleScriptModel.getSuccess())	{		var sysUserModels = peopleScriptModel.getOutput();		for(var i = 0;i<sysUserModels.length;i++ )		{			var sysUserModel = sysUserModels[i];			sendEmailByUserModel(sysUserModel);		}	}	else	{				aa.print("Not any user(s) under the Department!");	}}/* *Send email by External user */function sendEmailByExtUser(email){	if(email!= '' && email !=null)	{		var templateName = "DOCUMENT_REVIEW_ADD_BEFORE";		var emailParameters = aa.util.newHashtable();		if(capIDModel!=null)		{			addParameter(emailParameters, "$$AltID$$",capIDModel.getCustomID());			addParameter(emailParameters, "$$CapID$$",capIDModel.toString());			}		if(documentID!=null)		{			addParameter(emailParameters, "$$documentID$$",documentID);		}		if(capIDModel!=null && documentID!=null)		{			addParameter(emailParameters, "$$acaURL1$$",getACAUrl(acaWebServiceSite,capIDModel,'1000',documentID));			addParameter(emailParameters, "$$acaURL2$$",getACAUrl(acaWebServiceSite,capIDModel,'1001',documentID));		}				addParameter(emailParameters, "$$isExternalUser$$","Yes");		var reviewerResult = aa.bizDomain.getBizDomainByValue("EXTERNAL_REVIEWERS", email);		if(reviewerResult.getSuccess())		{		addParameter(emailParameters, "$$Assignee$$",reviewerResult.getOutput().getDispDescription());				}		sendNotification(email, templateName, emailParameters, null);	}	else	{				aa.print("It have not set up any email address for external user!");	}}/* * Send email by SysUserModel */function sendEmailByUserModel(sysUserModel){	if(sysUserModel && sysUserModel.getEmail() != '' && sysUserModel.getEmail() !=null)	{		var templateName = "DOCUMENT_REVIEW_ADD_BEFORE";		var emailParameters = aa.util.newHashtable();		if(capIDModel!=null)		{			addParameter(emailParameters, "$$AltID$$",capIDModel.getCustomID());			addParameter(emailParameters, "$$CapID$$",capIDModel.toString());		}		if(documentID!=null)		{			addParameter(emailParameters, "$$documentID$$",documentID);		}		if(capIDModel!=null && documentID!=null)		{			addParameter(emailParameters, "$$acaURL1$$",getACAUrl(acaWebServiceSite,capIDModel,'1000',documentID));			addParameter(emailParameters, "$$acaURL2$$",getACAUrl(acaWebServiceSite,capIDModel,'1001',documentID));		}		addParameter(emailParameters, "$$isExternalUser$$","No");				var reviewerResult = aa.people.getSysUserByID(userID);				if(reviewerResult.getSuccess())		{		addParameter(emailParameters, "$$Assignee$$",reviewerResult.getOutput().getFullName());				}		sendNotification(sysUserModel.getEmail(), templateName, emailParameters, null);	}	else	{				aa.print("It have not set up any email address for current user!");	}}/* * add parameter */function addParameter(pamaremeters, key, value){	if(key != null)	{		if(value == null)		{			value = "";		}		pamaremeters.put(key, value);	}}function getCapID(){	var model = entityAssociationModels.get(0);    var id1 = model.getID1();	var id2 = model.getID2();	var id3 = model.getID3();    return aa.cap.createCapIDScriptModel(id1, id2, id3);}/* * Send notification */function sendNotification(userEmailTo,templateName,params,reportFile){	var result = null;	result = aa.document.sendEmailAndSaveAsDocument(mailFrom, userEmailTo, mailCC, templateName, params, getCapID(), reportFile);	if(result.getSuccess())	{		aa.log("Send email successfully!");		return true;	}	else	{		aa.log("Fail to send mail.");		return false;	}}//Add value to map.function addParameter(pamaremeters, key, value){	if(key != null)	{		if(value == null)		{			value = "";		}			pamaremeters.put(key, value);	}}function getCapIDModel(id1,id2,id3){	var capId = null;	var capIdModelResult = aa.cap.getCapID(id1,id2,id3);	if(capIdModelResult.getSuccess())	{		capId = capIdModelResult.getOutput();	}	return capId;}function getACAUrl(acaWebServiceSite,capID,acaUrlType,docSeqNo){	var acaUrl = "";	var capIDModel = capID;	var capResult = aa.cap.getCap(capIDModel.getID1(), capIDModel.getID2(), capIDModel.getID3());	if(!capResult.getSuccess())	{		return acaUrl;	}	var cap = capResult.getOutput().getCapModel();	acaUrl = acaWebServiceSite + "/urlrouting.ashx?type="+acaUrlType;		acaUrl += "&altID=" + cap.getAltID();	if("1001" ==acaUrlType)	{	   acaUrl += "&agency=" + aa.getServiceProviderCode();		   acaUrl += "&SeqNo=" + docSeqNo;		   	}	else if ("1000" ==acaUrlType) 	{	  acaUrl += "&agencyCode=" + aa.getServiceProviderCode();	  acaUrl += "&Module=" + cap.getModuleName();	}		return acaUrl;}