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
  userInput = prompt("Select length of password, 8 to 128")
  console.log(userInput+ ",Selected");
  
  if (!userInput) {
    alert("Error! Need input!")
  }
  else if (userInput <8 || userInput >128) {
  userInput = alert("Select a length BETWEEN 8 to 128!"); 
  console.log(userInput+ ",Selected");
  return;
  }

  //confirm script
   function results () {
    specialConfirm = confirm("Does your password need Special Characters? Press 'Ok' for 'Yes'.")
    console.log("Special Characters are  " + specialConfirm)
    numbersConfirm = confirm("Does your password need Numbers? Press 'Ok' for 'Yes'.")
    console.log("Numbers are " + numbersConfirm)
    lowerConfirm= confirm("Does your password need Lowercase Letters? Press 'Ok' for 'Yes'.")
    console.log("Lowercase is " + lowerConfirm)
    upperConfirm= confirm("Does your password need Uppercase Letters? Press 'Ok' for 'Yes'.")
    console.log("Uppercase is " + upperConfirm)
  
  
// Selections of Confirm Section

 
  if (!specialConfirm && !numbersConfirm && !lowerConfirm && !upperConfirm) {
  alert("At least ONE selection must be made!");
  return;
} else {
  if (specialConfirm) {
    selections = selections.concat(special);
  }
  if (numbersConfirm) {
    selections = selections.concat(numbers);
  }
  if (lowerConfirm) {
    selections = selections.concat(alphabet);
  }
  if (upperConfirm) {
    selections = selections.concat(cap);
  }
}
   }
  console.log(selections)
  results(); 

  randomizer = '';
  for (i = 0; i< userInput; i++) {
    freyja= Math.floor(Math.random()*selections.length);
    randomizer += selections[freyja]
  }
  return randomizer
}

