let score; // check for boolean,undefined,null

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
    "33" => 33
    "33abc" => NaN
    "abcd" =>NaN
    true => 1 ,false => 0
    null => NaN
    undefined =>NaN
*/

let isLoggedIn = null;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/*
    1 => true, 0 => false,
    "" => false , "abcd" =>true
    Note: Boolean() constructor returns true for every integer(both positive and negative except zero)
    Boolean(null) => false
    Boolean(undefined) => false
*/


let marks = BigInt(22);
console.log(typeof(marks));
let marksInString = String(marks);
console.log(typeof(marksInString));
console.log(marks);

