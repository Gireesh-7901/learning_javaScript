// const, let, var

const accountId = 2;
let accountEmail = "abc@gamil.com";
var accountPassword = "1234";
accountCity = "Bengaluru";
let accountState;

//accountId = 4; // not allowed
accountEmail = "xyz@gmail.com";
accountPassword = "0000";
accountCity = "Hyderabad";

/*
    var keyword we should never use, because of the issues with block and function scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

