var lowerCase = [
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
  "z"
];

// // variables not in HTML used to create random passowrd
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var specialCharacter = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

// // variables from HTML
// var password = document.querySelector("#randomPassword");
// var btnOne = document.querySelector("#btn1");
// var btnTwo = document.querySelector("#btn2");

// function generateRandom() {
//   document.getElementById("btn1").innerHTML = math.random();
//   console.log(math.random);
// }

// function copyRandom() {
//   console.log("copy to clipboard");
// }

function generateRandom() {
  var numbers = Math.floor(Math.random() * 100 + 1);
  document.getElementById("randomPassword").innerHTML = numbers;
}

function copyRandom() {
  var lowerCase = [
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
      "z"
    ],
    valToUse = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  console.log(valToUse);
}
