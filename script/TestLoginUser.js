"use strict";
function TestLoginUser(){
    
    //Konstruktorn som kör igenom samtliga tester och 
    //loggar om varje test gått igenom eller inte
    var TestConstructor = function(){
        
        if(testUsernamePasswordOk()) {
            console.log("Test 'usernamePasswordOk' passed.");
        }
        else {
            console.log("Test 'usernamePasswordOk' failed.");
        }
        for (var i = 1; i < 4; i++) {
            if (testUsernamePasswordFail()){
                console.log("Test 'usernamePasswordFail' #" +i+ " passed.");
            }
            else {
                console.log("Test 'usernamePasswordFail' #" +i+ " failed.");
            }
        }
    };
    
    //Testar vad som händer om inmatade värden är korrekta
    var testUsernamePasswordOk = function(){
        try {
            LoginUser("admin", "password");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    //Testar vad som händer om användarnamn eller lösenord är felaktigt
    var testUsernamePasswordFail = function() {
        try {
            LoginUser("adman", "psssword");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    TestConstructor();
}

//Kör testerna när sidan laddas
//window.onload = TestLoginUser();