
// primitive datatypes - String, Number, Boolean, null, undefined, BigInt, Symbol

let name = "Gireesh";
let age = 24;
let isLoggedIn = true;
let num1 = null;
let num2;
let bigInteger = 27n;

let symbol1 = Symbol(123);
let symbol2 = Symbol(123);
// console.log(symbol1, symbol2);

// console.log(symbol1 === symbol2);

// non primitive datatypes - Arrays, Objects, functions

const arr = [1,2,3,4,2.2,true,null,Symbol(1)];
// console.log(arr);
// console.log(typeof arr); //object

const myDataObj = {
    name:"Gireesh",
    age : 24,
    isLoggedIn : true
};
// console.log(myDataObj);
// console.log(typeof myDataObj); //object

const greet = function(name) {
    console.log("Hello",name);
};
greet("Gireesh");
//console.log(typeof greet("Gireesh")); // undefined - data type that is returned from the function
console.log(typeof greet); //function object
