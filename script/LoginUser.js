"use strict";
var count = 0;

var LoginUser = function(username, password) {
    var validUsername = "admin";
    var validPassword = "password";

    if (username === validUsername && password === validPassword){
        console.log("Välkommen " +username+ "!");
    }
    if (username != validUsername || password != validPassword){
        count = (count + 1);
        if (count < 3) {
            console.log("Du har angett fel uppgifter " +count+ " gånger!");
        }
        else {
            console.log("Du har skrivit fel inloggningsuppgifter 3 gånger och ditt konto är låst.");
        }
    }
};