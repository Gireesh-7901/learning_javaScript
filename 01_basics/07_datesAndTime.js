
//console.log(Date.now()); //epoch time

const myDate = new Date();
//console.log(typeof myDate);

//console.log(myDate);

// console.log(myDate.getTime()); //epoch time
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());

// Creating our own date and time
//const myCreatedDate = new Date(2025,1,28); // In javaScript month start from 0 
const myCreatedDateTime = new Date(2025,1,28,18,20,24)
// console.log(myCreatedDateTime.toLocaleString());

myCreatedDateTime.toLocaleString('default',{
    weekday:"long",
})

console.log(myCreatedDateTime);


