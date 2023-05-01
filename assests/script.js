// Assignment code here
function generatePassword() {
  var userCharacters = prompt("How many characters you want?");
  characters = parseInt(userCharacters);

  while(characters < 8 || characters > 128) {
    alert("Invalid number");
    generatePassword();
  }
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
