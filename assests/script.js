// Assignment code here
function prompt() {
  var userCharacters = prompt("How many characters you want?");
  characters = parseInt(userCharacters);
  switch (characters) {
    case null: alert()
  }

  while(characters < 8 || characters > 128) {
    userCharacters = prompt("How many characters you want?");
    characters = parseInt(userCharacters);
  }
}

function generatePassword() {

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
