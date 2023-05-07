// Assignment code here
function generatePassword() {
  //Initializing values
  // Index 0-25 are for letters. 26-35 are for numbers
  var characters = [];
  var selectedCharacters = [];
  var alphaCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
  var numCharacters = '0123456789'.split("");
  var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
                           "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", 
                           "}", "~"];
  var password = [];

  //Gathering the user choices

  //While asking user, it will convert to the integer value
  var numOfCharacters = parseInt(prompt("How many characters you want? Choose between 8 and 126."));
  

  //If the user type in a string value, the error will pop up until it's corrected
  while (isNaN(numOfCharacters) || numOfCharacters < 8 || numOfCharacters > 128) {
    if(isNaN(numOfCharacters)) {
      alert("It must be a number");
    } else {
      alert("Invalid number");
    };
    numOfCharacters = parseInt(prompt("How many characters you want?"));
  };

  //Issue: The prompt keeps looping despite typing in "yes" or "no"
  //Solution: Before, I used the OR scenerio, after looking up, using AND scenario will loop if neither of the choices are made.
  var userLowPassword = prompt("Do you want lowercase letters? 'yes' or 'no' only.");
  while (userLowPassword !== "yes" && userLowPassword !== "no") {
    alert("Invalid Response");
    userLowPassword = prompt("Do you want lowercase letters? 'yes' or 'no' only."); 
  };

  var userUpPassword = prompt("Do you want Uppercase letters? 'yes' or 'no' only.");
  while (userUpPassword != 'yes' && userUpPassword != 'no') {
    alert("Invalid Response");
    userUpPassword = prompt("Do you want Uppercase letters? 'yes' or 'no' only.");  
  };
  

  var userNumericPassword = prompt("Do you want numeric characters? 'yes' or 'no' only.");
  while (userNumericPassword != 'yes' && userNumericPassword != 'no') {
    alert("Invalid Response");
    userNumericPassword = prompt("Do you want numeric characters? 'yes' or 'no' only.");
  };

  var userSpecialPassword = prompt("Do you want special characters? 'yes' or 'no' only.");
  while (userSpecialPassword != 'yes' && userSpecialPassword != 'no') {
    alert("Invalid Response");
    userSpecialPassword = prompt("Do you want special characters? 'yes' or 'no' only."); 
  };

  //Added the function to capitalize the alphabets if neccessary
  function alphaToUpper(alpha) {
    return alpha.toUpperCase();
  }

  //Putting the choices together
  //1st half possibility where userLowPassword is yes
  if (userLowPassword == 'yes' && userNumericPassword == 'yes' && userSpecialPassword == 'yes' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'yes' && userNumericPassword == 'yes' && userSpecialPassword == 'yes' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, specialCharacters);
  } else if (userLowPassword == 'yes' && userNumericPassword == 'yes' && userSpecialPassword == 'no' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'yes' && userNumericPassword == 'yes' && userSpecialPassword == 'no' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters);
  } else if (userLowPassword == 'yes' && userNumericPassword == 'no' && userSpecialPassword == 'yes' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(alphaCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'yes' && userNumericPassword == 'no' && userSpecialPassword == 'yes' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(alphaCharacters, specialCharacters);
  } else if (userLowPassword == 'yes' && userNumericPassword == 'no' && userSpecialPassword == 'no' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(alphaCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'yes' && userNumericPassword == 'no' && userSpecialPassword == 'no' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(alphaCharacters);

  //2nd half possibility where userLowPassword is no
  } else if (userLowPassword == 'no' && userNumericPassword == 'yes' && userSpecialPassword == 'yes' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(numCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'no' && userNumericPassword == 'yes' && userSpecialPassword == 'yes' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(numCharacters, specialCharacters);
  } else if (userLowPassword == 'no' && userNumericPassword == 'yes' && userSpecialPassword == 'no' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(numCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'no' && userNumericPassword == 'yes' && userSpecialPassword == 'no' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(numCharacters);
  } else if (userLowPassword == 'no' && userNumericPassword == 'no' && userSpecialPassword == 'yes' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'no' && userNumericPassword == 'no' && userSpecialPassword == 'yes' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(specialCharacters);
  } else if (userLowPassword == 'no' && userNumericPassword == 'no' && userSpecialPassword == 'no' && userUpPassword == 'yes') {
    characters = selectedCharacters.concat(alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'no' && userNumericPassword == 'no' && userSpecialPassword == 'no' && userUpPassword == 'no') {
    characters = selectedCharacters.concat(alphaCharacters);
  }

  //Generator
  //Searched on Google for the function where it'll shown an integer rather than within the for-loop
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

    for (var c = 0, l = characters.length; c < numOfCharacters; c++) {
      var i = getRandomInt(l)
      password.push(characters[i]);
      console.log(password);
    };
    
    return password.join("");
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
