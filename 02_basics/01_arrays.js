

const arr1 = [1,2,3,4,5];

// console.log(arr1[1]);
// arr1.push(6)
// console.log(typeof arr1);
/*
    methods:
    .push() - Adds the element to the array at last index by  default and returns the new array length
    .unshift() - Adds the element at the index 0
    .pop() - Removes the element at last index by default
    .shift() - Removes the element at 0 th index
    .includes(element) - returns boolean value
    .indexOf(element) - returns index of the element if present else returns -1 
    .join() - converts list to a string
*/

//slice and splice

// const myArr = new Array(1,2,3,4,5,6,7);
// console.log('A:',myArr);

// const myArr1 = myArr.slice(1,3);
// console.log('B:',myArr);
// console.log(myArr1);

// const myArr2 = myArr.splice(1,3);
// console.log('C:',myArr);
// console.log(myArr2);



const fruits = ['Mango',"banana","Orange"];
const chacolates = ["Kitkat","Diary milk","Nestle"];

//fruits.push(chacolates);//here inserts the array as a single element or object

/*
    To expand an array, we can follow two ways:
    .concat() - adds the array to an existing array
    spread method - using ...
 */

//console.log(fruits.concat(chacolates));

const eatable = [...fruits,...chacolates];

// console.log(eatable);

// console.log(Array.isArray(fruits));
// console.log(fruits.toString());

const xArr = [1,2,3,[4,5,6],7,[8,9,[10,11,[12,13]]]];
// console.log(xArr.flat(Infinity));

//console.log(Array.from("Gireesh"));
console.log(Array.from({name:"Gireesh"})); //exceptional case


let score1 = 10;
let score2 = 20;
let score3 = 30;

console.log(Array.of(score1,score2,score3));
console.log(Array(score1,score2,score3));