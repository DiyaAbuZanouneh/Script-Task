// JavaScript Loops Task :
// Basic =>

// 1.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2.
let arr = [1, 2, 3, 4, 5];
console.log("Array Element : ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 3.
console.log("Even Number : ");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

// 4.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to 10 : ");

// 5.
let arr2 = [1, 2, 3, 4, 5];
let largest = arr2[0];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > largest) largest = arr2[i];
}

console.log("The largest number in array is : " + largest);

// 6.
let arr3 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < arr3.length; i++) {
  sum2 += arr3[i];
}
console.log("The Average is : " + sum2 / arr3.length);

// Mid =>
// 7.
let factorial = 1;
for (let i = 5; i >= 1; i--) {
  factorial *= i;
}

console.log("The factorial is : " + factorial);

// 8.
let num = 10;
let first = 0;
let second = 1;

console.log("Fibonacci : ");
for (let i = 0; first <= num; i++) {
  console.log(first);

  let next = first + second;
  first = second;
  second = next;
}

// 9.
let num2 = 20;
console.log("Prime : ");
for (let i = 2; i <= num2; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// Advanced =>
// 10.
let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2D array element : ");
for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j]);
  }
}

// 11.
let arr6 = [1, 2, 3, 4, 5];
console.log("Reverse order array : ");
for (let i = arr6.length - 1; i >= 0; i--) {
  console.log(arr6[i]);
}

// 12.
console.log("2 Steps : ");
for (let i = 0; i < arr6.length; i += 2) {
  console.log(arr6[i]);
}

// 13.
let frequency = 1;
let count = 0;
let arr7 = [1, 2, 1, 3, 2, 1];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] == frequency) count++;
}

console.log("The frequency of " + frequency + " is " + count + " times");

// 14.
const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];

const newHeros = [];

for (let i = 0; i < heros.length; i++) {
  newHeros.push({
    hero: heros[i].name,
    power: heros[i].power,
    id: i,
  });
}

console.log(newHeros);

// 15.
const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const newArray = inputWords.filter(function (word) {
  return word.length > 7;
});

console.log(newArray);

// 16.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = numbers.reduce((sum, num) => {
  return num % 5 === 0 ? sum + num * num : sum;
}, 0);

console.log(sumSquaredDivisibleBy5); // 125

// Function Task :
// Basic =>

// 1.
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

// 2.
function AlphabeticalOrder(str) {
  var letters = str.split("");
  letters.sort();
  return letters.join("");
}
console.log(AlphabeticalOrder("hello"));

// 3.
function factorial2(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial2(8));

// 4.
function oddOrEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddOrEven(9));

// Mid =>
// 5.
function addUp(num) {
  var sum = 0;
  for (var i = num; i >= 0; i--) {
    sum = sum + i;
  }
  return sum;
}
console.log(addUp(6));
console.log(addUp(8));

// 6.
function minMaxLengthAverage(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  var length = arr.length;
  var average = sum / length;

  var result = [min, max, length, average];
  return result;
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// Advanced =>
// 7.
function countWords(str) {
  var words = str.split(" ");
  return words.length;
}
console.log(countWords("hello from CodingAcademy!"));

// 8.
function MultiplyByLength(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr.length);
  }
  return result;
}
console.log(MultiplyByLength([4, 2, 5]));

// 9.
function checkEnding(str1, str2) {
  var lastPart = str1.slice(str1.length - str2.length);
  if (lastPart === str2) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEnding("CodingSchool", "Ac"));
console.log(checkEnding("CodingSchool", "ool"));

// 10.
function doubleChar(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }
  return result;
}
console.log(doubleChar("Coding"));

// 11.
function findIndex(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i + 1;
    }
  }
  return -1;
}
console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));
