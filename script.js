// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(password);

// Stating possible password variable values
var scharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Creates a choices variable to store what choices user makes
var choices;


// Function to create password
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to have?");
  if (!passwordLength) {
      window.alert("This needs a value");
  } else if (passwordLength < 8) {
    window.alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    window.alert("Password length must be no more than 128 characters");
  } else {
    var specialchar = window.confirm("Click OK to confirm including special characters");
    var numchar = window.confirm("Click OK to confirm including numeric characters");
    var lowerchar = window.confirm("Click OK to confirm including lowercase characters");
    var upperchar = window.confirm("Click OK to confirm including uppercase characters");
  };

  // These if statements will now start creating the password following the given criteria by the user
  // If user fails to choose any of the options
  if (!specialchar && !numchar && !lowerchar && !upperchar) {
      choices = window.alert("You must chose something for your password to contain, you dummy");
  // If user chooses all 4 options
  } else if (specialchar && numchar && lowerchar && upperchar) {
    choices = scharacter.concat(number, lowercase, uppercase);
  // If user chooses 3 options
  } else if (specialchar && numchar && lowerchar) {
    choices = scharacter.concat(number, lowercase);
  } else if (specialchar && lowerchar && upperchar) {
    choices = scharacter.concat(lowercase, uppercase);
  } else if (specialchar && numchar && upperchar) {
    choices = scharacter.concat(number, uppercase);
  } else if (numchar && lowerchar && upperchar) {
    choices = number.concat(lowercase, uppercase);
  // If user chooses 2 options
  } else if (specialchar && numchar) {
    choices = scharacter.concat(number)
  };

  // lengthHolder variable is an array placeholder for the lngth input by the user
  var lengthHolder = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < passwordLength; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      lengthHolder.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var password = lengthHolder.join("");
  UserInput(password);
  return password;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(password) {
  document.getElementById("password").textContent = password;

}
