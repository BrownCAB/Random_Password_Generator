// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(max, min) {
  if (!max) {
  max - min
  min - 0
  }
 var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max); 
}

function getRandomItem(list) {
  var randomIndex = Math.floor(Math.random()*list.length)
    return list[randomIndex]
}

function generatePassword() {

// prompt user to validate atleast one prompt


  var userInput = window.prompt("How long do you want your password to be?");

  var passwordLength = parseInt(userInput);
 

 if (userInput >= 8) {
  window.confirm("Please confirm " + userInput + " is correct!")
  } 
  
if (isNaN(passwordLength)) {
  window.alert("That's not a numder!"); 
  return
  } 
  
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Invalid! Please input a number between 8 and 128 characters.");
  return
  }

 //prompt user to confirm if they want numerical characters
var userWantsNumbers = window.confirm("Would you like to include numbers to your password?");
// prompt user to confirm if they want special characters
var userWantsSymbols = window.confirm("Would you like to include special characters to your password?");
 // prompt user to confirm if they want lower case characters
var userWantsLowercase = window.confirm("Would you like to include lowercase characters to your password?");
// prompt user to confirm if they want upper case characters
var userWantsUppercase = window.confirm("Would you like to include uppercase characters to your password?");

var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["|", "!", "#", "$", "%", "^", "&", "*", "_", "-"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// if statements
var optionsList = [];

if (userWantsNumbers === true) {
  optionsList.push(numbersList);
}

if (userWantsSymbols === true) {
  optionsList.push(specialList);
}

if (userWantsLowercase === true) {
  optionsList.push(lowercaseList);
} 

if (userWantsUppercase === true) {
  optionsList.push(uppercaseList);
}

// Generate Password 
var generatedPassword = ""

// Make sure that atleast one character of each array is picked
for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsList);
  var randomChar = getRandomItem(randomList);
  generatedPassword += randomChar
}

return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
