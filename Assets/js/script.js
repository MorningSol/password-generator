// var arrays

var lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters =  ["!", '"', "'", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "+", ".", "`","^", "~", "|", "<", ">", "+", "=", "-", "_", ",", "/", ";", ":", "?"]


var generatePassword = function() {
  
  var numberChoice = window.prompt ("Please enter your the number of characters you would like your password to have.  Must be atleast 8 characters and no less than 128 ");
  numberChoice = parseInt(numberChoice);
  
  if (numberChoice <8 || numberChoice >128 || isNaN(numberChoice)) {
    window.alert("You need to provide a value between 8 and 128. Please try again.");
    return generatePassword() 
  }
  
  else {  
    var lowerCase = window.confirm ("Would you like lowercase letters in your password?");
    
    var upperCase = window.confirm ("Would you like uppercase letters in your password?");
  
    var numericValues = window.confirm("Would you like numeric values in your password?");

    var specialCharacterChoice = window.confirm ("Would you like special characters in your password?");
  }
      
  if (!lowerCase && !upperCase && !numericValues && !specialCharacterChoice) {
    window.alert("You must select at least one password variable");
    return generatePassword()
  }  
  else{
    var passwordString = ""
    for(var i = 1; i <= numberChoice;) {
        
      if(lowerCase && i <= numberChoice) {
        passwordString += lowerCaseAlphabet[Math.floor(Math.random() * (lowerCaseAlphabet.length - 1))];
        i++;
      }

      if(upperCase && i <= numberChoice) {
        passwordString += upperCaseAlphabet[Math.floor(Math.random() * (upperCaseAlphabet.length - 1))];
        i++;
      }
            
      if(numericValues && i <= numberChoice) {
        passwordString += numbers[Math.floor(Math.random() * (numbers.length - 1))];
        i++;
      }
            
      if(specialCharacterChoice && i <= numberChoice){
        passwordString += specialCharacters[Math.floor(Math.random() * (specialCharacters.length - 1))];
        i++;    
      }
    };    
  }return passwordString
};           
      
 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 
generateBtn.addEventListener("click", writePassword);
