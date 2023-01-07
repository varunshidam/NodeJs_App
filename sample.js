console.log("Hi Node Developers");
console.log("Hi Node Developers");
// require('./addition.js');
require("./multiplication.js")
const additionFun = require("./addition.js")
const sum1 = additionFun(2,2);
console.log("Adiition of two number is : ", sum1);

const sum2 = additionFun(6,8);
console.log("Adiition of two number is : ", sum2);
