// strings

let name = "Gireesh";
let age = 24;

//console.log(name+" is "+age+" years old"); //legacy way

//string interpolation
//console.log(`${name} is ${age} years old.`); //new way


let url = new String(`https://www.gireesh-7901.github.com/javaScript`);
// console.log(typeof url);
//console.log(url);
//console.log(url.length);
let subUrl = url.substring(8,16);
//console.log(subUrl);
let sliceUrl = url.slice(8,16); // we can use negative indexing also
//console.log(sliceUrl);
// console.log(url.charAt(9));
console.log(url.indexOf('z'));

/* string methods 
.trim(<delimiter>) // to remove white spaces at start and end return:string
.includes(<string>) // checks whether arguement string present in main string or not. return:boolean
.charAt(<index>) // returns the charecter string at the specified index. if the IOB means returns empty string
.indexOf(<charecter string>) // returns the index of the specified string. if it is not present  returns -1
.startsWith(<charecter string>) && .endsWith(<charecter string>)// return boolean
.startTrim() && .endTrim().
.toUpperCase() && .toLowerCase();
.split(<delimiter>) - returns a array
*/
