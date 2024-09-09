// hoisting is behaviour of js where variable and function are hoisted which means their decleration is moved on the top of Code.

// why it happen?
// eveything happens in js inside excution context.
// even before code is executing js start to allocating each and every variable and function in the memory. this happen because of execution context.

// benifit of hoisting--
// flexibility in code , readability

// drawback--
// confsion and Bug, maintainance challenge, potential for scope related error.

// ex- for variable and functions hoisting--
abcd(); //print console = javascript hoisting example 
console.log(x); //undefine because memo save as undefine placeholder
console.log(abcd); //it give a whole code of function

var x = 8;example
function abcd() {
  console.log("javascript hoisting example");
}

//* one more intresting thing is ------
// it gives diffrent output for arrow function and higher order fun.

// home();  // this gives error because they are not behave like function in js excution context they are variable for js
// gfg();   // so how we called as func.

console.log(x); //undefine, because memo save as undefine placeholder
console.log(home); //undefine, because memo save as undefine placeholder
console.log(gfg); //undefine, because memo save as undefine placeholder

var x = 9;
var home = () => {
  console.log("arrow fun");
};

var gfg = function () {
  console.log("higher order fun");
};


// concepts of----Null,Undefine,Notdefine..
// NULL---
// The null is an assignment value. It can be assigned to a variable as a representation of no value.

// Not define --
// A variable that is "not defined" means it hasn't been declared in any scope. Accessing such a variable will result in a ReferenceError.

//ex-  console.log(x); // ReferenceError: x is not defined

// Undefined---
// A variable that is "undefined" means it has been declared but has not been assigned a value. The value undefined is the default value for variables that have been declared but not initialized.
// undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value

// ex-- let y;
// console.log(y); // undefined



// hoisting diffrence between var,let,const---

// var: Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they can be used before their declaration in the code.
function example() {
  console.log(x); // undefined, due to hoisting
  var x = 10;
  console.log(x); // 10
}
example();

// let: Hoisting: Variables declared with let are hoisted but not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered, meaning accessing them before declaration will result in a ReferenceError.
function example() {
  console.log(x); // ReferenceError: x is not defined
  let x = 10;
  console.log(x); // 10
}
example();

// const: Hoisting: Variables declared with const are hoisted but not initialized. They are also in a "temporal dead zone" until the declaration is encountered.
// Mutability: The value assigned to a const variable cannot be changed (immutable), but if the value is an object or array, the contents of the object or array can be modified.
function example() {
  const x = 10;
  console.log(x); // 10
  x = 20; // TypeError: Assignment to constant variable.
}
example();


// temporal dead zone
// The Temporal Dead Zone (TDZ) refers to a behavior in JavaScript where variables declared with let and const are in a "dead zone" between the start of the block and their actual declaration. During this period, these variables cannot be accessed. This is in contrast to var declarations, which are hoisted to the top of their scope but initialized with undefined.

function example() {
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;      // Actual declaration happens here
  console.log(a); // 5
}

example();


// advc question--Class Hoisting: Classes in JavaScript are not hoisted. They must be declared before they are used.