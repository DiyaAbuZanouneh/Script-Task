"use strict";

// Class Room Task :
console.log("The Type Of 100 : ", typeof 100);
console.log("The Type Of 73.9 : ", typeof 79.3);
console.log("The Type Of NaN : ", typeof NaN);
console.log('The Type Of "What" : ', typeof "Water");
console.log("The Type Of false  ", typeof (9 != 11));
console.log('The Type Of "Orang" + "e" : ', typeof ("Orang" + "e"));
console.log('The Type Of "Orange" - "S" : ', typeof ("Orange" - "s"));
console.log('The Type Of "4" + "8" : ', typeof ("4" + "8"));
console.log('The Type Of "4" - "8" : ', typeof ("4" - "8"));
console.log('The Type Of "name" + 3 : ', typeof ("name" + 3));
console.log('The Type Of  82 * "word" : ', typeof (82 * "word"));
console.log('The Type Of  1 + "hello" : ', typeof (1 + "hello"));
console.log('The Type Of  "hello" + 1 : ', typeof ("hello" + 1));
console.log("The Type OF 1 + true : ", typeof (1 + true));
console.log('The Type Of "hello" + true : ', typeof ("hello" + true));
console.log("The Type Of Infinity : ", typeof Infinity);
console.log("The Type Of  1 == '1' : ", typeof (1 == "1"));
console.log("The Type Of 1 === '1' : ", typeof (1 === "1"));

// space in console window
console.log();
console.log();

// Data Types and Operators Task :
// Cash flow ratio  =>
let cash = 1000;
let liabilities = 500;
console.log(cash / liabilities);

// Net income =>
let revenues = 1000;
let expenses = 500;
console.log(revenues - expenses);

// Total assets  =>
let assets_liabilities = 1000;
let equity = 500;
console.log(assets_liabilities + equity);

// Net income (using profit margin and sales)  =>
let profit = 1000;
let sales = 500;
console.log(profit * sales);

// Average  =>
let number1 = 7;
let number2 = 9;
let number3 = 2;
console.log((number1 + number2 + number3) / 3);

// Discount =>
let price = 150;
let discount = 0.3;
console.log(price - price * discount);

// Age limit (older than 18 and less than 30) =>
let age1 = 20;
console.log(age1 > 18 && age1 < 30 ? true : false);

// Remainder =>
let number4 = 10;
let number5 = 4;
console.log(number4 % number5);

// Strings Task :
// Part 1 =>
let part1 = "Welcome to Orange";
console.log("Upper Case Method : ", part1.toUpperCase());
console.log("Slice Method : ", part1.toUpperCase().slice(8, 10));
console.log("Lower Case Method :", part1.toLowerCase());
console.log("Length Property : ", part1.length);
console.log("Replace Method : ", part1.replace("Orange", '"Orange"'));
console.log("Concat Method : ", part1.concat(" Jordan"));

// Part 2 =>
let part2 = "cactus";
// console.log(part2.replaceAll(part2.at(0),"*"));

// Arrays Task :

// Conditionals Task :
// Part 1 =>
let yearOfBirth = Number(window.prompt("Please Enter Your Age : ", 2002));
let age = 2026 - yearOfBirth;
if (age >= 60) {
  console.log("You may join the seniors’ program.");
} else if (age >= 30 && age < 60) {
  console.log("You are not eligible. You may join other programs.");
} else if (age >= 18 && age < 30) {
  console.log("You are eligible. Start your application.");
} else {
  console.log("You may join the kids' program.");
}

// Part 2 =>
function revers_word(word) {
  let revers = "";
  for (let i = 0; i < word.length; i++) {
    if (word.at(i) === word.at(i).toUpperCase())
      revers += word.at(i).toLowerCase();
    else revers += word.at(i).toUpperCase();
  }
  console.log(revers);
}

console.log("The Revers of 'OrAnGe' : ");
revers_word("OrAnGe");

console.log("The Revers of 'oRaNgE' : ");
revers_word("oRaNgE");

// Part 3 =>
//First Solution
let capitalizes = "Coding Academy by Orange";
function remove_spaces(word) {
  let word_without_space = "";
  for (let i = 0; i < word.length; i++) {
    if (word.at(i) === " ") word_without_space += "";
    else word_without_space += word.at(i);
  }
  console.log(word_without_space);
}

console.log("Remove All Spaces : ");
remove_spaces(capitalizes);

// Second Solution
console.log("With ReplaceAll Method : ");
console.log(capitalizes.replaceAll(" ", ""));

// Part 4 =>

// Part 5 =>
function oddOrEven(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

oddOrEven(4);
oddOrEven(7);

// Part 6 =>
function checkNumber(value) {
  if (typeof value === "number") console.log("It is a number");
  else console.log("It is not a number");
}

checkNumber(10);
checkNumber("10");

// Part 7 =>
function largest(num1, num2) {
  if (num1 > num2) console.log(num1);
  else console.log(num2);
}

largest(10, 20);

// Part 8 =>
function triangleType(a, b, c) {
  if (a === b && b === c) console.log("Equilateral");
  else if (a === b || a === c || b === c) console.log("Isosceles");
  else console.log("Scalene");
}

triangleType(5, 5, 5);
triangleType(5, 5, 3);
triangleType(5, 4, 3);

// Part 9 =>
function inRange(num, min, max) {
  if (num >= min && num <= max) console.log("The number is in the range");
  else console.log("The number is not in the range");
}

inRange(15, 10, 20);

// Part 10 =>
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
  else console.log("Not a Leap Year");
}

leapYear(2024);
leapYear(2023);
