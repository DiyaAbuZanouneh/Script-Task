// JAVASCRIPT IF STATEMENT TASK :

// Basic =>
// Part 1
let age = 27;

if (age > 18) {
  console.log("You are an adult");
}

// Part 2
let num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}

// Mid =>
// Part 3
let char = "a";
if (typeof char == "string") {
  console.log("It's a letter");
} else {
  console.log("It's no a letter");
}

const char2 = "A";

if (/^[A-Za-z]$/.test(char2)) {
  console.log("It's a letter");
} else {
  console.log("It's not a letter");
}

// Part 4
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

// Part 5
let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}

// Advanced
// Part 9
let z = 9;
if (z % 3 === 0) {
  console.log("z is multiple 3");
}

// Part 10
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

// Part 11
let age2 = 30;
if (age2 >= 18 && age <= 65) {
  console.log("You are of working age");
}

// Part 12
let color = "red";
if (color == "red" || color == "green" || color == "blue") {
  console.log("color is a primary color");
}

// Part 13
function isValidNumber(input) {
  if (!isNaN(input)) {
    console.log(input + " is a valid number");
  } else {
    console.log(input + " is not a number");
  }
}

isValidNumber(11);
isValidNumber("19");
isValidNumber("xyz");
isValidNumber("17.5");
isValidNumber("21F");
