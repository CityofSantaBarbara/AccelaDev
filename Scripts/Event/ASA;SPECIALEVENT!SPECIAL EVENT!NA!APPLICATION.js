//ASA;SPECIALEVENT!SPECIAL EVENT!NA!APPLICATION
//ASA:SPECIALEVENT/SPECIAL EVENT/NA/APPLICATION

//START FEES SECTION
removeAllFees(capId);
//ALWAYS ADD
updateFee('SE_001', 'SE_GENERAL', 'FINAL', 1, 'Y');
//END FEES SECTION


//START COA - Add depending Custom Field Question

//*************Nonprofit Organization***************
if (AInfo["501C3"] == "Yes"
    && !appHasCondition("Special Event Requirements", null, "Proof of Non-Profit Status Required", null)) {
    addStdCondition("Special Event Requirements", "Proof of Non-Profit Status Required");
}
//*************Event Location - Use of City Park**********************
if (AInfo["Alameda Park East"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Chase Palm Park Alameda Park East", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Chase Palm Park Alameda Park East");
}
if (AInfo["Alameda Park West"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Alameda Park West", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Alameda Park West");
}
if (AInfo["Chase Palm Park Plaza"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Chase Palm Park Plaza", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Chase Palm Park Plaza");
}
if (AInfo["Chase Palm Park Great Meadow"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Chase Palm Park Great Meadow", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Chase Palm Park Great Meadow");
}
if (AInfo["Chase Palm Park Field"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Chase Palm Park Field", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Chase Palm Park Field");
}
if (AInfo["De La Guerra Plaza"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: De La Guerra Plaza", null)) {
    addStdCondition("Special Event Requirements", "Event Location: De La Guerra Plaza");
}
if (AInfo["Leadbetter Grassy Area"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Leadbetter Grassy Area", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Leadbetter Grassy Area");
}
if (AInfo["Leadbetter Picnic Site"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Leadbetter Picnic Area", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Leadbetter Picnic Area");
}
if (AInfo["Mackenzie Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: MacKenzie Park", null)) {
    addStdCondition("Special Event Requirements", "Event Location: MacKenzie Park");
}
if (AInfo["Oak Park Main"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Oak Park - Main", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Oak Park - Main");
}
if (AInfo["Oak Park Sycamore"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Oak Park - Sycamore", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Oak Park - Sycamore");
}
if (AInfo["Ortega Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Ortega Park", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Ortega Park");
}
if (AInfo["Plaza del Mar"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Plaza del Mar", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Plaza del Mar");
}
if (AInfo["Storke Placita"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Storke Placita", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Storke Placita");
}
if (AInfo["Other Park"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location:", null)) {
    addStdCondition("Special Event Requirements", "Event Location:");
}
//***********Event Location - Use of City Beach**********************
if (AInfo["East Beach Cabrillo West"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: East Beach, Cabrillo West", null)) {
    addStdCondition("Special Event Requirements", "Event Location: East Beach, Cabrillo West");
}
if (AInfo["Leadbetter Beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Leadbetter Beach", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Leadbetter Beach");
}
if (AInfo["West Beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: West Beach", null)) {
    addStdCondition("Special Event Requirements", "Event Location: West Beach");
}
//*************Event Location - Use of City Indoor Venue**********************
if (AInfo["Chase Palm Park Center"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Chase Palm Park Center", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Chase Palm Park Center");
}
if (AInfo["Casa las Palmas"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Cas las Palmas", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Cas las Palmas");
}
if (AInfo["Cabrillo Pavilion"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Cabrillo Pavilion Event Center", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Cabrillo Pavilion Event Center");
}
if (AInfo["Carousel House"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Carousel House", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Carousel House");
}
if (AInfo["Ortega Welcome House"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Ortega Welcome House", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Ortega Welcome House");
}
if (AInfo["Mackenzie Center"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: MacKenzie Center", null)) {
    addStdCondition("Special Event Requirements", "Event Location: MacKenzie Center");
}
//*************Event Location - Use or Closure of City Street**********************
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: City Streets", null)) {
    addStdCondition("Special Event Requirements", "Event Location: City Streets");
}
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Traffic Plan required - Streets", null)) {
    addStdCondition("Special Event Requirements", "Traffic Plan required - Streets");
}
if (AInfo["Use or Closure of City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parking Restriction Waiver Permit - Street Closure", null)) {
    addStdCondition("Special Event Requirements", "Parking Restriction Waiver Permit - Street Closure");
}
if (AInfo["Cycling Event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: Parade Route", null)) {
    addStdCondition("Special Event Requirements", "Event Location: Parade Route");
}
if (AInfo["Cycling Event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Requirements", null)) {
    addStdCondition("Special Event Requirements", "Parade Requirements");
}
//*************Event Location - Use or Closure of City Street**********************
if (AInfo["Use or Closure of City Sidewalk or Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: City Sidewalks", null)) {
    addStdCondition("Special Event Requirements", "Event Location: City Sidewalks");
}
/*
if (AInfo["Use or Closure of City Sidewalk or Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Traffic Plan Required - Sidewalks", null)) {
    addStdCondition("Special Event Requirements", "Traffic Plan Required - Sidewalks");
} */
//*************Event Location - Use or Closure of City Waterfront Bike Path**********************
if (AInfo["Use or Closure of City Waterfront Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Event Location: City Waterfront Bike Path", null)) {
    addStdCondition("Special Event Requirements", "Event Location: City Waterfront Bike Path");
}
/*
if (AInfo["Use or Closure of City Waterfront Bike Path"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Traffic Plan Required - Bike Path", null)) {
    addStdCondition("Special Event Requirements", "Traffic Plan Required - Bike Path");
} */
//*************Event Infrastructure - **********************
if (AInfo["Stage is 24 inches high or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Building Permit Required - Stage", null)) {
    addStdCondition("Special Event Requirements", "Building Permit Required - Stage");
}
if (AInfo["Tent dimensions are 400 square feet or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Tent permit Required - Tent", null)) {
    addStdCondition("Special Event Requirements", "Tent permit Required - Tent");
}
if (AInfo["Canopy dimensions are 700 square feet or more"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Tent Permit Required - Canopy", null)) {
    addStdCondition("Special Event Requirements", "Tent Permit Required - Canopy");
}
if (AInfo["Building a structure"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Building Permit - Temporary Structure", null)) {
    addStdCondition("Special Event Requirements", "Building Permit - Temporary Structure");
}
if (AInfo["The event is a market trade show exhibit or has a similar vendor set up"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Tradeshow Permit Required", null)) {
    addStdCondition("Special Event Requirements", "Tradeshow Permit Required");
}
if (AInfo["The entire event or a smaller area within the event will be enclosed in fencing"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Assembly Permit required", null)) {
    addStdCondition("Special Event Requirements", "Assembly Permit required");
}
if (AInfo["Installing temporary electrical wiring for event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Temporary Wiring/Lighting Permit required", null)) {
    addStdCondition("Special Event Requirements", "Temporary Wiring/Lighting Permit required");
}
/*if (AInfo["Bringing in additional Lighting"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bringing in additional Lighting", null)) {
    addStdCondition("Special Event Requirements", "Bringing in additional Lighting");
} */
if (AInfo["Requesting access to a City water hydrant"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Water Hydrant Meter Required", null)) {
    addStdCondition("Special Event Requirements", "Water Hydrant Meter Required");
}
if (AInfo["Large towed generator with a grounding rod"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Temporary Power Permit Required", null)) {
    addStdCondition("Special Event Requirements", "Temporary Power Permit Required");
}
if (AInfo["Amplified or Live Music Sound"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Amplified/Live Music Restrictions", null)) {
    addStdCondition("Special Event Requirements", "Amplified/Live Music Restrictions");
}
if (AInfo["ATM machine"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "ATM Requirements", null)) {
    addStdCondition("Special Event Requirements", "ATM Requirements");
}
if (AInfo["Bounce House or equivalent"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bounce House Requirements", null)) {
    addStdCondition("Special Event Requirements", "Bounce House Requirements");
}
if (AInfo["Equipment with an open flame"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Open Flame Permit Required", null)) {
    addStdCondition("Special Event Requirements", "Open Flame Permit Required");
}
if (AInfo["Carnival Rides or Games"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Carnival Permit Required", null)) {
    addStdCondition("Special Event Requirements", "Carnival Permit Required");
}
if (AInfo["Parade Vehicles orFloats"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Vehicle Requirements", null)) {
    addStdCondition("Special Event Requirements", "Parade Vehicle Requirements");
}
if (AInfo["Parade Floats"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Float Requirements", null)) {
    addStdCondition("Special Event Requirements", "Parade Float Requirements");
}
if (AInfo["Parade Horses"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parade Animal Requirements", null)) {
    addStdCondition("Special Event Requirements", "Parade Animal Requirements");
}
if (AInfo["Car Show Vehicles"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Car Show Requirements", null)) {
    addStdCondition("Special Event Requirements", "Car Show Requirements");
}
if (AInfo["Road Closure Equipment"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Traffic Control Equipment Requirements", null)) {
    addStdCondition("Special Event Requirements", "Traffic Control Equipment Requirements");
}
if (AInfo["Event set-up or equipment will be left at the event site overnight"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Overnight Security Guards required", null)) {
    addStdCondition("Special Event Requirements", "Overnight Security Guards required");
}
if (AInfo["Hiring professional security guards to monitor the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Private Security requirements", null)) {
    addStdCondition("Special Event Requirements", "Private Security requirements");
}
if (AInfo["Requesting uniformed City police officers"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Officer Request Form Required", null)) {
    addStdCondition("Special Event Requirements", "Officer Request Form Required");
}
//*************Sporting Elements**********************
if (AInfo["Event includes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Route Requirements Walk, Run or Cycling events", null)) {
    addStdCondition("Special Event Requirements", "Route Requirements Walk, Run or Cycling events");
}
if (AInfo["Walk/Run/Cycling route or ocean activities extend outside of City limits"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Permit Required  for Use of Public Right of Way outside of City jurisdiction", null)) {
    addStdCondition("Special Event Requirements", "Permit Required  for Use of Public Right of Way outside of City jurisdiction");
}
if (AInfo["Signage placed along walk race cycling event routes"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Signage Approval Required", null)) {
    addStdCondition("Special Event Requirements", "Signage Approval Required");
}
if (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Marine Event Permit or Waiver Required", null)) {
    addStdCondition("Special Event Requirements", "Marine Event Permit or Waiver Required");
}
if (AInfo["Event includes ocean swimming or watersports"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "City Lifeguards Required", null)) {
    addStdCondition("Special Event Requirements", "City Lifeguards Required");
}
if (AInfo["Requesting use of City Volleyball Courts"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Volleyball Court Rental Confirmation", null)) {
    addStdCondition("Special Event Requirements", "Volleyball Court Rental Confirmation");
}
//*************Food Beverage Vendors**********************
if (AInfo["Food and beverages will be made available to the public at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Temporary Food Facility or Mobile Food Facility Permit required", null)) {
    addStdCondition("Special Event Requirements", "Temporary Food Facility or Mobile Food Facility Permit required");
}
if (AInfo["Alcohol will be served at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "ABC Endorsement Required", null)) {
    addStdCondition("Special Event Requirements", "ABC Endorsement Required");
}
if (AInfo["Alcohol will be served at the event"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "ABC Permit Required", null)) {
    addStdCondition("Special Event Requirements", "ABC Permit Required");
}
if (AInfo["Vendors selling food and beverages in a park or beach"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "One Day Vendor License Required", null)) {
    addStdCondition("Special Event Requirements", "One Day Vendor License Required");
}
if (AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Sidewalk Merchandising Permit Required", null)) {
    addStdCondition("Special Event Requirements", "Sidewalk Merchandising Permit Required");
}
if (AInfo["Vendors selling food and beverages in the Public Right of Way"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "One Day Vendor License Required - Sidewalk Vending", null)) {
    addStdCondition("Special Event Requirements", "One Day Vendor License Required - Sidewalk Vending");
}
//*************Parking Vehicle Access**********************
if (AInfo["Use of City Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Waterfront Parking Permit Required - Vehicle Parking", null)) {
    addStdCondition("Special Event Requirements", "Waterfront Parking Permit Required - Vehicle Parking");
}
if (AInfo["Parking for a food truck or trailer"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Waterfront Parking Permit Required - Mobile Food Facilities/Oversized Vehicles", null)) {
    addStdCondition("Special Event Requirements", "Waterfront Parking Permit Required - Mobile Food Facilities/Oversized Vehicles");
}
if (AInfo["Requesting to park an oversized-vehicle on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parking Restriction Waiver Permit Required - Oversized Vehicles", null)) {
    addStdCondition("Special Event Requirements", "Parking Restriction Waiver Permit Required - Oversized Vehicles");
}
if (AInfo["Requesting to reserve parking area along a City Street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Parking Restriction Waiver Permit Required - On street Parking", null)) {
    addStdCondition("Special Event Requirements", "Parking Restriction Waiver Permit Required - On street Parkingt");
}
if (AInfo["Providing onsite Bicycle valet"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Bicycle Valet Contract", null)) {
    addStdCondition("Special Event Requirements", "Bicycle Valet Contract");
}
//*************Trash Recycling Cleaning**********************
if (AInfo["Requesting to place portable toilets or trash and recycling receptacles on a City street"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Litter Free Permit Requiredt", null)) {
    addStdCondition("Special Event Requirements", "Litter Free Permit Requiredt");
}
if (AInfo["Requesting to place portable toilets or dumpsters in a Waterfront Parking Lot"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Waterfront Parking Permit Required - Toilet/Dumpster Placement", null)) {
    addStdCondition("Special Event Requirements", "Waterfront Parking Permit Required - Toilet/Dumpster Placement");
}
if (AInfo["Hiring a Professional Cleaning Company"] == "CHECKED"
    && !appHasCondition("Special Event Requirements", null, "Professional Cleaning Contract ", null)) {
    addStdCondition("Special Event Requirements", "Professional Cleaning Contract ");
}
//*************For all Applications**********************
if (!appHasCondition("Special Event Requirements", null, "Certificate of Insurance Required", null)) {
    addStdCondition("Special Event Requirements", "Certificate of Insurance Required");
}
if (!appHasCondition("Special Event Requirements", null, "Site Map Required", null)) {
    addStdCondition("Special Event Requirements", "Site Map Required");
}
if (!appHasCondition("Special Event Requirements", null, "Route Map Required", null)) {
    addStdCondition("Special Event Requirements", "Route Map Required");
}
/*
if (!appHasCondition("Special Event Requirements", null, "Breakdown/Clean Up", null)) {
    addStdCondition("Special Event Requirements", "Breakdown/Clean Up");
}
if (!appHasCondition("Special Event Requirements", null, "Comply with City Staff", null)) {
    addStdCondition("Special Event Requirements", "Comply with City Staff");
}
if (!appHasCondition("Special Event Requirements", null, "Permit Compliance - All Agencies", null)) {
    addStdCondition("Special Event Requirements", "Permit Compliance - All Agencies");
}
if (!appHasCondition("Special Event Requirements", null, "Onsite Copy", null)) {
    addStdCondition("Special Event Requirements", "Onsite Copy");
}
if (!appHasCondition("Special Event Requirements", null, "Lack of Enforcment Clause", null)) {
    addStdCondition("Special Event Requirements", "Lack of Enforcment Clause");
}
if (!appHasCondition("Special Event Requirements", null, "Complinace with Traffic Laws", null)) {
    addStdCondition("Special Event Requirements", "Complinace with Traffic Laws");
}
if (!appHasCondition("Special Event Requirements", null, "20 ft Emergency Lane", null)) {
    addStdCondition("Special Event Requirements", "20 ft Emergency Lane");
}
if (!appHasCondition("Special Event Requirements", null, "Liability for Damages", null)) {
    addStdCondition("Special Event Requirements", "Liability for Damages");
}
if (!appHasCondition("Special Event Requirements", null, "Municipal Codes", null)) {
    addStdCondition("Special Event Requirements", "Municipal Codes");
}
if (!appHasCondition("Special Event Requirements", null, "Drought", null)) {
    addStdCondition("Special Event Requirements", "Drought");
}
if (!appHasCondition("Special Event Requirements", null, "Non-exclusive Use", null)) {
    addStdCondition("Special Event Requirements", "Non-exclusive Use");
}
if (!appHasCondition("Special Event Requirements", null, "No Staking", null)) {
    addStdCondition("Special Event Requirements", "No Staking");
}
if (!appHasCondition("Special Event Requirements", null, "No Tying etc", null)) {
    addStdCondition("Special Event Requirements", "No Tying etc");
}
if (!appHasCondition("Special Event Requirements", null, "Cover Cords", null)) {
    addStdCondition("Special Event Requirements", "Cover Cords");
}
if (!appHasCondition("Special Event Requirements", null, "Protective Ground Covering", null)) {
    addStdCondition("Special Event Requirements", "Protective Ground Covering");
}
if (!appHasCondition("Special Event Requirements", null, "Post-event Cleanup", null)) {
    addStdCondition("Special Event Requirements", "Post-event Cleanup");
}
*/
//*************Manual Add to Application**********************
//if (!appHasCondition("Special Event Requirements", null, "", null)) {
//    addStdCondition("Special Event Requirements", "");
//}
//END COA
