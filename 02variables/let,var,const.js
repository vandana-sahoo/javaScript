
// There are three ways to declare a variable in JavaScript --> var, let, and const----
// (var) use for function-scoped variables or when you need compatibility with older code.
// (let) use for block-scoped variables when you need to reassign values.
// (const) use for block-scoped variables when you don't want to reassign values.

// In JavaScript, var is function-scoped and was traditionally used to declare variables. 
// let and const are block-scoped. The key difference between let and const is that (let) allows for reassignment while (const) creates a read-only reference.

function exampleVar() {
    console.log(x); // undefined, due to hoisting
    var x = 10;
    console.log(x); // 10
}
exampleVar();


function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
     console.log(y); // ReferenceError: y is not defined and stop executing further code.
}
exampleLet();


function exampleConst() {
    const z = 30;
    console.log(z); // 30
    // z = 40; // TypeError: Assignment to constant variable

    const obj = {key: 'value',name:  "vandana"};
    obj.key = 'newValue'; // Allowed
    console.log(obj.key); // newValue
    obj.name = 'vandu'; // Allowed
    console.log(obj.name);
}
exampleConst();

// why js stop execting code if error occur-------???
// JavaScript stops executing further code when it encounters an error to prevent unpredictable behavior and potential cascading issues. This is because JavaScript executes code synchronously, and an unhandled error could lead to incorrect results or program instability. Error handling mechanisms, like try...catch, are used to manage errors and allow code to continue running even if an error occurs.


// QUestions=------------
// What are the differences between var, let, and const?
// Explain the concept of hoisting in JavaScript. How does it apply to var, let, and const?
// Can you re-declare a variable using let or const in the same scope? Why or why not?
// How does block scope work with let and const? Provide an example.
// What is the "temporal dead zone" (TDZ) and how does it affect let and const?
// How would you handle variable declarations in a loop when using var versus let? Provide an example.
// What are the implications of using const for variable declarations in terms of immutability?
// How do let and const contribute to writing cleaner and less error-prone code compared to var?
// Write a code snippet that demonstrates the difference between var and let in terms of scoping.
// Explain the behavior of const when used with objects or arrays. Can you modify the contents of a const object or array?
