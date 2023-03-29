// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays Used
special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
console.log(special)

numbers = [1,2,3,4,5,6,7,8,9,0]
console.log(numbers)

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet);

cap = alphabet.map(
  function(L){return L.toUpperCase();} 
  )
console.log(cap);

selections = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Need prompt length 8-128, confirms uppercase, lowercase, numeric, and/or special characters, depending on User selection

//character length
function generatePassword() {
  lengthSelect = prompt("Select length of password, 8 to 128")
  console.log(lengthSelect + ",Selected");
  
  if (!lengthSelect) {
    alert("Error! Need input!")
  }
  else if (lengthSelect <8 || lengthSelect >128) {
  lengthSelect = alert("Select a length BETWEEN 8 to 128!"); 
  console.log(lengthSelect + ",Selected");
  }
  //confirm script
  else {
    specialConfirm = confirm("Does your password need Special Characters? Press 'Ok' for 'Yes'.")
    console.log("Special Characters are  " + specialConfirm)
    numbersConfirm = confirm("Does your password need Numbers? Press 'Ok' for 'Yes'.")
    console.log("Numbers are " + numbersConfirm)
    lowerConfirm= confirm("Does your password need Lowercase Letters? Press 'Ok' for 'Yes'.")
    console.log("Lowercase is " + lowerConfirm)
    upperConfirm= confirm("Does your password need Uppercase Letters? Press 'Ok' for 'Yes'.")
    console.log("Uppercase is " + upperConfirm)
  }
// Selections of Confirm Section

  if (specialConfirm) {
    selections = seclections.concat(special);
  }
 console.log(selections)

}
