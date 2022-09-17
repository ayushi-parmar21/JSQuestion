var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num = readlineSync.questionInt("check number equal or not: ");
if (num1 == num) {
    console.log("Equal")
} else {
    console.log("Not equal")
}