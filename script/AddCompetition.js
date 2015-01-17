"use strict";
var AddCompetition = function(date, location) {
    if (!isNaN(new Date(date).getTime())){
        console.log(date);
    }
    else if (isNaN) {
		console.log("Var vänlig ange födelsedatumet i formatet ÅÅÅÅ-MM-DD");
	}
	if (typeof(location === 'string') && location !== "") {
	    console.log(location);
	}
	else {
	    console.log("Tävlingsplatsen måste anges.");
	}
};