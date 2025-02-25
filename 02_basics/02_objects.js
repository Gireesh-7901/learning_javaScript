//Objects creation

//1.Singleton - Objects.create() (constructor)
//2.Object literal - {}


const key1 = Symbol("MyKey");

const jsUser = {
    name:"Gireesh",
    "age":23,
    [key1]:"myKey1",
    location:"Bengaluru",
    gmail:"gireeeshnimmala7@gmail.com",
    isLoggedIn:false,
    lastLoggedIn: ['monday',"friday"]
};

// console.log(jsUser.age);
// console.log(jsUser["age"]);

// console.log(typeof jsUser.key1);
// console.log(jsUser);

// jsUser.gmail = "gireesh@google.in";
// Object.freeze(jsUser); //freeze from Object class makes the object immutable
// jsUser.gmail = "gireesh@microsoft.in";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello from JS");
};

jsUser.greeting1 = function() {
    console.log(`Hello from ${this.name}`);
};

// console.log((jsUser.greeting()));

// console.log((jsUser.greeting1()));



