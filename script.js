// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatePassword = "generated password";
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
