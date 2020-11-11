function getLPLicType(pCapId) {
    //Function find licensed professionals number
        var newLicType = null;
        var licProf = aa.licenseProfessional.getLicensedProfessionalsByCapID(pCapId).getOutput();
        if (licProf != null)
        for(x in licProf)
        {
            newLicType = licProf[x].getLicenseType();
            // logDebug("Found " + licProf[x].getLicenseType());
            return newLicType;
        }
        else
        // logDebug("No licensed professional on source");
            return null;
    }