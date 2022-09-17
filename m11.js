let first = require("readline-sync");
var number1 = first.questionInt("enter a first number: ");
let second = require("readline-sync");
var number2 = second.questionInt("enter a second number: ");
if (number1 > number2) {
    console.log("number1 is greater.")
} else if (number1 < number2) {
    console.log("number2 is greater.")
} else {
    console.log("number1 and nnumber2 is equal.")
}