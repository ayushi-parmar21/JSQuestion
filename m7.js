var number1 = 44 * 3;
let readlineSync = require("readline-sync");
var number2 = readlineSync.questionInt("check youur number is equal or greater then or not: ");
if (number2 >= number1) {
    console.log("number2 is greater then equal to number1: ")
} else {
    console.log("number2 is lesser then number1: ")
}