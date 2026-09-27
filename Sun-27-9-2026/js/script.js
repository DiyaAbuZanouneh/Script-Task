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

