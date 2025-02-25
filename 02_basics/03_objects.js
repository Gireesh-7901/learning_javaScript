
//singleton object 
//const obj = new Object();

//object  literal
// const obj = {};
// console.log(obj);


const user = {
    fullname: {
        firstName: "Gireesh",
        lastName: "Nimmala"
    },
    age : 23
};

// console.log(user.fullname.firstName);

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};
//const obj3 = Object.assign({},obj1,obj2); //standard
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

const myArr = [obj1,obj2];

// console.log(myArr[0][1]);

const Fbuser = [
    {
        id:1,
        name:"Gireesh"
    },
    {
        id:2,
        name:"abc",
    }
];

// console.log(Fbuser[1].name);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('age'));


//destructuring a object

const wUser = {
    name:"Gireesh",
    age:24
};

// console.log(wUser.age);

const {age:a} = wUser; // object destructuring

// console.log(age);
console.log(a);

//JSON

// {
//     "name": "Gireesh",
//     "age": 24
// }


{
    [],
    [],
    []
}