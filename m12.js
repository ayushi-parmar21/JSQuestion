let user = require("readline-sync");
var first = user.questionInt("enter a number: ");
if (first % 5 == 0 && first % 15 == 0) {
    console.log("divisible by both: ")
} else {
    console.log("not divisible by both: ")
}