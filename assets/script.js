// Assignment Code
var generateBtn = document.querySelector("#generate");

// Pools of Potential Password Characters as Strings
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericCharacters = "1234567890";

var specialCharacters =  "!#$%&*+-.:;=?@^_|~";

var passwordCharacterPool = "";

// Generate password through Series of Prompts
function generatePassword() {
  // Prompt for Length of Password
  var passwordLength = Number(prompt("Please enter a number between 8 and 128 to choose a length for your password to be."));
  console.log("passwordLength", passwordLength)

  // Prompts for Types of Characters to Include
  var lowercaseLettersResponse = confirm("Would you like your password to contain lowercase letters?");
  if (lowercaseLettersResponse) {
    passwordCharacterPool += lowercaseLetters;
  }

  var uppercaseLettersResponse = confirm("Would you like your password to contain uppercase letters?");
  if (uppercaseLettersResponse) {
    passwordCharacterPool += uppercaseLetters;
  }

  var numericCharactersResponse = confirm("Would you like your password to contain numbers?");
  if (numericCharactersResponse) {
    passwordCharacterPool += numericCharacters;
  }

  var specialCharactersResponse = confirm("Would you like your password to contain special characters?");
  if (specialCharactersResponse) {
    passwordCharacterPool += specialCharacters;
  }

  console.log("passwordCharacterPool", passwordCharacterPool)

  
  // for Loop Using Responses to Generate Password  
  var generatedPassword = []
  
  for(var i = 0; i < passwordLength; i++) {
    var randomPoolIndex = Math.floor(Math.random() * (passwordCharacterPool.length - 0 + 1) + 0);
    
    generatedPassword += passwordCharacterPool[randomPoolIndex];
    
    console.log(generatedPassword)
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
