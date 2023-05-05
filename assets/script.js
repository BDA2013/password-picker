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

  //Gathering the user choices

  //While asking user, it will convert to the integer value
  var userCharacters = parseInt(prompt("How many characters you want?"));

  //If the user type in a string value, the error will pop up until it's corrected
  while (isNaN(userCharacters) || userCharacters < 8 || userCharacters > 128) {
    if(isNaN(userCharacters)) {
      alert("It must be a number");
    } else {
      alert("Invalid number");
    };
    userCharacters = parseInt(prompt("How many characters you want?"));
  };

  //Issue: The prompt keeps looping despite typing in "yes" or "no"
  //Solution: Before I used the OR scenerio, rather than AND scenario where it'd loop regardless if I typed yes or no.
  var userLowPassword = prompt("Do you want lowercase letters?");
  while (userLowPassword != "y" && userLowPassword != "n") {
    //console.log(confirmLowPassword);
    alert("y for yes, or n for no only");
    userLowPassword = prompt("Do you want lowercase letters?"); 
  };


  var userUpPassword = prompt("Do you want Uppercase letters?");
  while (userUpPassword != 'y' && 'n') {
    alert("y for yes, or n for no only");
    userUpPassword = prompt("Do you want Uppercase letters?");  
  };
  

  var userNumericPassword = prompt("Do you want numeric characters?");
  while (userNumericPassword != 'y' && 'n') {
    alert("y for yes, or n for no only");
    userNumericPassword = prompt("Do you want numeric characters?");
  };

  var userSpecialPassword = prompt("Do you want special characters?");
  while (userSpecialPassword != 'y' && 'n') {
    alert("y for yes, or n for no only");
    userSpecialPassword = prompt("Do you want special characters?"); 
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
