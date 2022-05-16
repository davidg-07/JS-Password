// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
var lowercaseChar = "abcdefghijklmopqrstuvwxz"
var numerical = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordBase = ''

function generatePassword() {
var passwordLength = prompt("How long would you like your password to be? Please choose a length of 8-128 characters.")
console.log(passwordLength)
passwordLength = parseInt(passwordLength);
console.log(passwordLength)
// if password length >128 and < 8 throw an alert to pick again
if (passwordLength <= 128 && passwordLength >= 8) {
  promptUppercase();
}
//prompt uppercase
function promptUppercase() {
  var includeUppercase = confirm("Do you want to include uppercase letters");
  if (includeUppercase){
    // if yes include to uppercase and prompt lowercase
    passwordBase = passwordBase.concat(uppercaseChar)
    console.log(passwordBase)
    promptLowerCase();
  } else {
    // if no prompt lowercase
    promptLowerCase()
  }
}
//prompt lowercase
function promptLowerCase(){
  var includeLowercase = confirm("Do you want to include Lowercase letters") 
  if (includeLowercase){
    passwordBase = passwordBase.concat(lowercaseChar)
    console.log(passwordBase)
    // promptNumerical()

  } else{
    // promptNumerical()
  }
}

function MakePassword() {

}
//if yes include lowercase and prompt numerical
//if no prompt numerical
//prompt numerical
//if yes include numerical and propmp special
//if no just prompt special
//


  var generatedPassword = "generated password";
  console.log("clicket generate password");
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
