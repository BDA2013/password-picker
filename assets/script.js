// Assignment code here
function generatePassword() {
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
  var numOfCharacters = parseInt(prompt("How many characters you want?"));
  

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
  //Solution: Before, I used the OR scenerio rather than AND scenario where it'd loop regardless if I typed yes or no.
  var userLowPassword = prompt("Do you want lowercase letters?");
  while (userLowPassword !== "y" && userLowPassword !== "n") {
    //console.log(userLowPassword);
    alert("y for yes, or n for no only");
    userLowPassword = prompt("Do you want lowercase letters?"); 
  };

  var userUpPassword = prompt("Do you want Uppercase letters?");
  while (userUpPassword != 'y' && userUpPassword != 'n') {
    alert("y for yes, or n for no only");
    userUpPassword = prompt("Do you want Uppercase letters?");  
  };
  

  var userNumericPassword = prompt("Do you want numeric characters?");
  while (userNumericPassword != 'y' && userNumericPassword != 'n') {
    alert("y for yes, or n for no only");
    userNumericPassword = prompt("Do you want numeric characters?");
  };

  var userSpecialPassword = prompt("Do you want special characters?");
  while (userSpecialPassword != 'y' && userSpecialPassword != 'n') {
    alert("y for yes, or n for no only");
    userSpecialPassword = prompt("Do you want special characters?"); 
  };

  function alphaToUpper(alpha) {
    return alpha.toUpperCase();
  }

  //Putting the choices together
  //1st half possibility where userLowPassword is y for yes
  if (userLowPassword == 'y' && userNumericPassword == 'y' && userSpecialPassword == 'y' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'y' && userNumericPassword == 'y' && userSpecialPassword == 'y' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, specialCharacters);
  } else if (userLowPassword == 'y' && userNumericPassword == 'y' && userSpecialPassword == 'n' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'y' && userNumericPassword == 'y' && userSpecialPassword == 'n' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(alphaCharacters, numCharacters);
  } else if (userLowPassword == 'y' && userNumericPassword == 'n' && userSpecialPassword == 'y' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(alphaCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'y' && userNumericPassword == 'n' && userSpecialPassword == 'y' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(alphaCharacters, specialCharacters);
  } else if (userLowPassword == 'y' && userNumericPassword == 'n' && userSpecialPassword == 'n' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(alphaCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'y' && userNumericPassword == 'n' && userSpecialPassword == 'n' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(alphaCharacters);

  //2nd half possibility where userLowPassword is n for no
  } else if (userLowPassword == 'n' && userNumericPassword == 'y' && userSpecialPassword == 'y' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(numCharacters, specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'n' && userNumericPassword == 'y' && userSpecialPassword == 'y' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(numCharacters, specialCharacters);
  } else if (userLowPassword == 'n' && userNumericPassword == 'y' && userSpecialPassword == 'n' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(numCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'n' && userNumericPassword == 'y' && userSpecialPassword == 'n' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(numCharacters);
  } else if (userLowPassword == 'n' && userNumericPassword == 'n' && userSpecialPassword == 'y' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(specialCharacters, alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'n' && userNumericPassword == 'n' && userSpecialPassword == 'y' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(specialCharacters);
  } else if (userLowPassword == 'n' && userNumericPassword == 'n' && userSpecialPassword == 'n' && userUpPassword == 'y') {
    characters = selectedCharacters.concat(alphaCharacters.map(alphaToUpper));
  } else if (userLowPassword == 'n' && userNumericPassword == 'n' && userSpecialPassword == 'n' && userUpPassword == 'n') {
    characters = selectedCharacters.concat(alphaCharacters);
  }

  //Generator
  //Searched on Google for the function where it'll shown an integer rather than within the for-loop
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

    for (var c = 0, l = characters.length; c < numOfCharacters; c++) {
      var i = getRandomInt(l)
      password.push(characters[i]); //Math.floor(Math.random * characters.length)
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
