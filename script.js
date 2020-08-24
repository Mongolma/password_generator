var selected = 0;
$("#dialog").dialog({
  title: "Prompt",
  buttons: {
    First: function () {
      selected = 1;
    },
    Second: function () {
      selected = 2;
    },
    Third: function () {
      selected = 3;
    },
    Fourth: function () {
      selected = 4;
    },
    // ..............
  },
});

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
