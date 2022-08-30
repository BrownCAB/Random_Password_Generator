// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {
 
  var userInput = window.prompt("Hey! you clicked the Button!")

  console.log(userInput)
}



// 1 Prompt the user for the password criteria

// a Password Length 8-128 chararters
// var length = Number(prompt("Enter a password length between 8 and 128")),
// b lowercase, uppercase, numeric, and/or special characters
//charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),

// 2 validate the input
// 3 genetate password
//password = generatePassword();


// 4 display genetated password on the page
 // return "Generated password will go here!";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
