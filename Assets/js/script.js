// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var arrays

var lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharacter =  ["!", '"', "'", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "+", ".", "`","^", "~", "|", "<", ">", "+", "=", "-", "_", ",", "/", ";", ":", "?"]


// prompt for length of password

var setParameters = function() {
  var numberChoice = window.prompt ("Please enter your the number of characters you would like your password to have.  Must be atleast 8 characters and no less than 128 ");
  numberChoice = parseInt(numberChoice);
  console.log(numberChoice);
    
  if (numberChoice >=8 && numberChoice <=128){
    
    var lowerCase = window.confirm ("Would you like lowercase letters in your password?")
    console.log(lowerCase)

    var upperCase = window.confirm ("Would you like uppercase letters in your password?")
    console.log(upperCase)

    var specialCharacterChoice = window.confirm ("Would you like special characters in your password?")
    console.log(specialCharacterChoice)
  }

  else {
      window.alert("You need to provide a value between 8 and 128. Please try again.");
      setParameters()
  }
}

  

// minimum length 8 characters and maximum length of 128

//prompted for lowercase yes or no
//return said value
//prompted for uppercase yes or no
//return said value
//prompted for numeric characters yes or no
//return said value
//prompted for special characters yes or no
//return said value

// if accepted, include variable in password

//generate password randomly but with at least one of each variable accepted.

















// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
