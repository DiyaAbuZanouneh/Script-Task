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
console.log(cash/liabilities);

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
console.log(price - (price * discount));

// Age limit (older than 18 and less than 30) =>
let age = 20;
console.log( age > 18 && age < 30 ? true : false);

// Remainder => 
let number4 = 10;
let number5 = 4;
console.log(number4 % number5);

// Strings Task : 
// Part 1 =>
let part1 = "Welcome to Orange";
console.log("Upper Case Method : " , part1.toUpperCase());
console.log("Slice Method : ", part1.toUpperCase().slice(8, 10));
console.log("Lower Case Method :" , part1.toLowerCase());
console.log("Length Property : " , part1.length);
console.log("Replace Method : " , part1.replace("Orange",'"Orange"'));
console.log("Concat Method : " , part1.concat(" Jordan"));

// Part 2 =>
let part2 = "cactus"; 
// console.log(part2.replaceAll(part2.at(0),"*"));

// Arrays Task :










