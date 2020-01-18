function generateRandom() {
  let passLength = document.getElementById("howLong").value;
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}|:<>?";

  let password = "";

  for (var i = 0; i <= passLength; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("randomPassword").value = password;
}

function copyRandom() {
  document.getElementById("randomPassword").select();
  document.execCommand("Copy");
  alert("Password copied to clipborad");
}

//Attempts........
// variables not in HTML used to create random passowrd
// var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var password = document.querySelector("#randomPassword");
// function getRandomLetter(randomLetter) {
//   return Math.floor(Math.random()* randomLetter.length);
// }

// for (var i = 0; i < 3; i++){
//   var password = upperCase.splice(getRandomIndex(upperCase), 1);
//   document.writeIn(password)
// }

// var numbers = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// // var specialCharacter = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

// // // variables from HTML
// // var password = document.querySelector("#randomPassword");
// // var btnOne = document.querySelector("#btn1");
// // var btnTwo = document.querySelector("#btn2");

// // function generateRandom() {
// //   document.getElementById("btn1").innerHTML = math.random();
// //   console.log(math.random);
// // }

// // puts any text into box
// document.getElementById("randomPassword").innerHTML = "Random Password";

//   var lowerCase = [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "g",
//       "h",
//       "i",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "o",
//       "p",
//       "q",
//       "r",
//       "s",
//       "t",
//       "u",
//       "v",
//       "w",
//       "x",
//       "y",
//       "z"
//     ],;

//     function generateRandom() {
//       var = lowerCase[Math.floor(Math.random() * lowerCase.length)];
//       document.getElementById("randomPassword").innerHTML = valToUse;
// }
// // function generateRandom() {
// //   var numbers = Math.floor(Math.random() * 100 + 1);
// //   document.getElementById("randomPassword").innerHTML = numbers;
// // }
