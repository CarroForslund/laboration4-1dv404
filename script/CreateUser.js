"use strict";

var CreateUser = function(username, password) {
    
    var myUsername;
    var myPassword;
    
    if (username === ""){
        console.log("OBS! Du måste ange ett användarnamn!");
    }
    if (password === ""){
        console.log("OBS! Du måste ange ett lösenord!");
    }
    if ((username !== "") && (password !== "")) {
        console.log("Grattis! Du har nu ett användarkonto med användarnamn '" +myUsername+ "' och lösenord '" +myPassword+ "'.");
    }
};