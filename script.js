// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Length of password
function generatePassword() {
  var numberOfChar = prompt("Provide the length of password");
  if (numberOfChar >= 8 && numberOfChar <= 128) {
    console.log("working");
  } else {
    alert("Please provide a number netween 8-128!");
    return;
  }

  //Criteria of password selection
  var includeUpper = confirm("Include upper case?");
  var includeLower = confirm("Include lower case?");
  var includeNumber = confirm("Include number?");
  var includeSymbols = confirm("Include symbol?");

  if (
    includeLower === false &&
    includeNumber === false &&
    includeSymbols === false &&
    includeUpper === false
  ) {
    alert("Please select at least one of the criteria!");
    return;
  } else {
    console.log("workingtoo");
  }

  //Characters for password
  superArray = [];
  lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  specialChar = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  passwordArray = [];

  //Selected criteria for password
  if (includeLower === true) {
    for (var a = 0; a < lowerCase.length; a++) {
      superArray.push(lowerCase[a]);
      console.log(superArray);
    }
  } else {
    console.log("lower case not included!");
  }
  if (includeUpper === true) {
    for (var b = 0; b < upperCase.length; b++) {
      superArray.push(upperCase[b]);
      console.log(superArray);
    }
  } else {
    console.log("upper case not included!");
  }
  if (includeNumber === true) {
    for (var c = 0; c < number.length; c++) {
      superArray.push(number[c]);
      console.log(superArray);
    }
  } else {
    console.log("number not included!");
  }
  if (includeSymbols === true) {
    for (var d = 0; d < specialChar.length; d++) {
      superArray.push(specialChar[d]);
      console.log(superArray);
    }
  } else {
    console.log("symbol not included!");
  }

  //Random characters selected for password
  for (var e = superArray.length - 1; e > 0; e--) {
    var f = Math.floor(Math.random() * e);
    var cont = superArray[e];
    superArray[e] = superArray[f];
    superArray[e] = cont;
  }
  console.log(passwordArray);

  //Random characters added
  for (var g = 1; g <= numberOfChar; g++) {
    var h = Math.floor(Math.random() * superArray.length);
    passwordArray.push(superArray[h]);
  }
  console.log(passwordArray);

  var newPassword = passwordArray.join("");
  console.log(newPassword);
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
