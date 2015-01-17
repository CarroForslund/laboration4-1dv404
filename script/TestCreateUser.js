"use strict";
function TestCreateUser(){
    
    //Konstruktorn som kör igenom samtliga tester och 
    //loggar om varje test gått igenom eller inte
    var TestConstructor = function(){
        
        if(testUsernamePasswordOk()) {
            console.log("Test 'usernamePasswordOk' passed.");
        }
        else {
            console.log("Test 'usernamePasswordOk' failed.");
        }
        if (testUsernameEmpty()){
            console.log("Test 'usernameEmpty' passed.");
        }else {
            console.log("Test 'usernameEmpty' failed.");
        }
        if (testPasswordEmpty()){
            console.log("Test 'passwordEmpty' passed.");
        }
        else {
            console.log("Test 'passwordEmpty' failed.");
        }
        if (testUsernamePasswordEmpty()){
            console.log("Test 'usernamePasswordEmpty' passed.");
        }
        else {
            console.log("Test 'usernamePasswordEmpty' failed.");
        }
    };
    
    //Testar vad som händer om inmatade värden är korrekta
    var testUsernamePasswordOk = function(){
        try {
            CreateUser("admin", "password");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    //Testar vad som händer om användarnamn ej är angett
    var testUsernameEmpty = function() {
        try {
            CreateUser("", "password");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    //Testar vad som händer om lösenord ej är angett
    var testPasswordEmpty = function() {
        try {
            CreateUser("admin", "");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    
    //Testar vad som händer om varken användarnamn eller lösenord är angett
    var testUsernamePasswordEmpty = function() {
        
        try {
            CreateUser("", "");
            return true;
        }
        catch (error) {
            return false;
        }
    };
    TestConstructor();
}

//Kör testerna när sidan laddas
//window.onload = TestCreateUser();