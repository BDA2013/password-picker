// Assignment code here
function generatePassword() {
  var userCharacters = prompt("How many characters you want?");
  characters = parseInt(userCharacters);

  while(characters < 8 || characters > 128) {
    alert("Invalid number");
    userCharacters = prompt("How many characters you want?");
    characters = parseInt(userCharacters);
  }

  var userLowPassword = prompt("Do you want lowercase letters?");
  var selectLowPassword = userLowPassword;

  var userUpPassword = prompt("Do you want Uppercase letters?");
  var selectUPPassword = userUpPassword;

  var userNumericPassword = prompt("Do you want numeric characters?");
  var selectNumericPassword = userNumericPassword;

  var userSpecial = prompt("Do you want special characters?");
  var selectSpecial = userSpecial;
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
