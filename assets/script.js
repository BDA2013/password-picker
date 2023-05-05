// Assignment code here
function generatePassword() {
  // Index 0-25 are for letters. 26-35 are for numbers
  var characters;
  var selectedCharacters;
  var alphaCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
  var numCharacters = '0123456789'.split("");
  var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
                           "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", 
                           "}", "~"];
  var password = [];

  var userCharacters = prompt("How many characters you want?");
  var characters = parseInt(userCharacters);

  while(characters < 8 || characters > 128) {
    alert("Invalid number");
    userCharacters = prompt("How many characters you want?");
    characters = parseInt(userCharacters);
  }

  var confirmLowPassword = prompt("Do you want lowercase letters?");
  var confirmUpPassword = prompt("Do you want Uppercase letters?");
  var confirmNumericPassword = prompt("Do you want numeric characters?");
  var confirmSpecialPassword = prompt("Do you want special characters?");

  //Gathering the user choices
  while (confirmLowPassword != 'y' || 'n') {
    alert("y or n only");
    confirmLowPassword = prompt("Do you want lowercase letters?");
  };

  while (confirmUpPassword != 'y' || 'n') {
    alert("y or n only");
    confirmUpPassword = prompt("Do you want Uppercase letters?");
    
  };

  while (confirmNumericPassword != 'y' || 'n') {
    alert("y or n only");
    confirmNumericPassword = prompt("Do you want numeric characters?");
  };

  while (confirmSpecialPassword != 'y' || 'n') {
    alert("y or n only");
    confirmSpecialPassword = prompt("Do you want special characters?");
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
