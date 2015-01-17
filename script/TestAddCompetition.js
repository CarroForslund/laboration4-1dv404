"use strict";
function TestAddCompetition(){
    
    //Konstruktorn som kör igenom samtliga tester och 
    //loggar om varje test gått igenom eller inte
    var TestConstructor = function(){
        if(testDateLocationOk()) {
            console.log("Test 'dateLocationOk' passed.");
            //return true;
        }
        else {
            console.error("Test 'dateLocationOk'' failed.");
            //return false;
        }
        if(testDateNoDate){
            console.log("Test 'dateNoDate' passed.");
            //return true;
        }
        else {
            console.error("Test 'dateNoDate'' failed.");
            //return false;
        }
        if(testEmptyLocationField) {
            console.log("Test 'emptyLocationField' passed.");
            //return true;
        }
        else {
            console.error("Test 'emptyLocationField' failed.");
            //return false;
        }
    };
    
    //Testar vad som händer om inmatade värden är korrekta
    var testDateLocationOk = function(){
        try {
            AddCompetition("2015-12-10", "Kalmar GK");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    var testDateNoDate = function(){
        try {
            AddCompetition("10:e december", "Kalmar GK");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    var testEmptyLocationField = function() {
        try {
            AddCompetition("2015-12-10", "KG");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    TestConstructor();
}

//Kör testerna när sidan laddas
window.onload = TestAddCompetition();