function getLPLicNum(pCapId) {
    //Function find licensed professionals number
            var newLicNum = null;
        var licProf = aa.licenseProfessional.getLicensedProfessionalsByCapID(pCapId).getOutput();
        if (licProf != null)
            for(x in licProf)
            {
                            newLicNum = licProf[x].getLicenseNbr();
                    // logDebug("Found " + licProf[x].getLicenseNbr());
                            return newLicNum;
            }
        else
            // logDebug("No licensed professional on source");
                    return null;
    }