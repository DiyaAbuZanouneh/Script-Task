//  Exercise 1
let name1 = "Ahmad";
console.log(name1);

function test() {
  let x = 10;
  let y;
  if (true) {
    y = 20;
  }
  console.log(y);
}

test();

// Exercise 2
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hi, I'm " + this.name);
};

function Employee(name, age, employeeId, position) {
  Person.call(this, name, age);
  this.employeeId = employeeId;
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.greet = function () {
  console.log("Hi, I'm " + this.name + ", I work as " + this.position);
};

var e1 = new Employee("Ali", 25, 1, "Developer");
var e2 = new Employee("Sara", 30, 2, "Designer");
var e3 = new Employee("Omar", 28, 3, "Manager");
e1.greet();
e2.greet();
e3.greet();
console.log(e1 instanceof Person); // true

// Exercise 3
var arr1 = [];
var arr2 = [];
for (var i = 1; i <= 25; i++) {
  arr1.push("Student" + i);
  arr2.push("Student" + (i + 25));
}

var names = arr1.concat(arr2);
names.sort();
names.reverse();
console.log(names.includes("Student10"));
names.forEach(function (n, index) {
  console.log(index, n);
});

// Exercise 4

var studentsList = [];
for (var i = 1; i <= 50; i++) {
  studentsList.push({
    id: i,
    name: "Student" + i,
    grade: Math.floor(Math.random() * 100),
  });
}

studentsList.splice(0, 0, { id: 51, name: "New", grade: 90 }); // add
studentsList.splice(1, 1); // remove
studentsList.splice(2, 1, { id: 52, name: "Replaced", grade: 70 }); // replace
var part = studentsList.slice(0, 5);
console.log(part);

studentsList.sort(function (a, b) {
  return a.grade - b.grade;
});

studentsList.forEach(function (s) {
  console.log(s.id, s.name, s.grade);
});

// Exercise 5
var product = {
  id: 1,
  name: "Phone",
  price: 300,
  category: "Electronics",
  available: true,
};

var json = JSON.stringify(product);
var obj = JSON.parse(json);
console.log(product);
console.log(obj);

try {
  JSON.parse("{bad json}");
} catch (err) {
  console.log("Invalid JSON");
}

// Exercise 6
var inventory = [
  { id: 1, name: "Laptop", price: 700, category: "Electronics", quantity: 5 },
  { id: 2, name: "Mouse", price: 10, category: "Electronics", quantity: 50 },
  { id: 3, name: "Chair", price: 80, category: "Furniture", quantity: 10 },
  { id: 4, name: "Desk", price: 150, category: "Furniture", quantity: 4 },
  { id: 5, name: "Pen", price: 1, category: "Stationery", quantity: 200 },
  { id: 6, name: "Book", price: 15, category: "Stationery", quantity: 30 },
  { id: 7, name: "Cup", price: 5, category: "Kitchen", quantity: 40 },
  { id: 8, name: "Plate", price: 7, category: "Kitchen", quantity: 25 },
  { id: 9, name: "Phone", price: 400, category: "Electronics", quantity: 8 },
  { id: 10, name: "Lamp", price: 25, category: "Furniture", quantity: 12 },
];

inventory.sort(function (a, b) {
  return a.price - b.price;
});

var categories = ["Electronics", "Furniture", "Stationery", "Kitchen"];
console.log(categories.includes("Kitchen"));
inventory.splice(0, 1);
console.log(inventory.slice(0, 5));

var inventory2 = [
  { id: 11, name: "Tablet", price: 250, category: "Electronics", quantity: 6 },
];

var allInventory = inventory.concat(inventory2);
console.log(allInventory);

// Exercise 7
const square = (n) => n * n;
const isEven = (n) => n % 2 === 0;
const total = (products) => products.reduce((sum, p) => sum + p.price, 0);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((n) => square(n)));
console.log(numbers.filter((n) => isEven(n)));
console.log(total([{ price: 10 }, { price: 20 }]));

// Exercise 8
const user = { name: "Ali", email: "ali@mail.com", age: 20, address: "Amman" };
const { name: userName, email, age, address } = user;
console.log(userName, email, age, address);

const skills = ["HTML", "CSS", "JS"];
const [skill1, skill2, skill3] = skills;
console.log(skill1, skill2, skill3);

function createUser(name, role = "student") {
  return { name, role };
}

console.log(createUser("Sara", "admin"));
console.log(createUser("Omar")); // role = "student"

// Exercise 9
const classA = [1, 2, 3];
const classB = [3, 4, 5];
const allStudents = [...classA, ...classB];

function average(...grades) {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}
console.log(average(80, 90, 70));

const uniqueIds = [...new Set(allStudents)];
console.log(uniqueIds);

const gradesMap = new Map();
gradesMap.set(1, 80); // add
gradesMap.set(2, 90);
gradesMap.set(1, 85); // update
console.log(gradesMap.get(1)); // get
gradesMap.delete(2); // delete
console.log(Array.from(gradesMap));

// Exercise 10
const reportStudents = [
  { id: 1, name: "Ali", grade: 90 },
  { id: 2, name: "Sara", grade: 40 },
  { id: 3, name: "Omar", grade: 75 },
  { id: 4, name: "Lina", grade: 55 },
  { id: 5, name: "Zaid", grade: 30 },
];

reportStudents.forEach((s) => {
  const report = `Name: ${s.name}
ID: ${s.id}
Grade: ${s.grade}
Status: ${s.grade >= 50 ? "Pass" : "Fail"}`;
  console.log(report);

  if (typeof document !== "undefined") {
    document.body.innerHTML += `<pre>${report}</pre>`;
  }
});

// Exercise 11
class PersonClass {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}
class Student extends PersonClass {
  constructor(name, email, major) {
    super(name, email);
    this.major = major;
  }
  getInfo() {
    return `Student: ${this.name} - ${this.major}`;
  }
}
class Instructor extends PersonClass {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
  getInfo() {
    return `Instructor: ${this.name} - ${this.subject}`;
  }
}

console.log(new PersonClass("Guest", "g@mail.com").getInfo());
console.log(new Student("Ali", "ali@mail.com", "IT").getInfo());
console.log(new Instructor("Dr. Omar", "omar@mail.com", "JS").getInfo());
