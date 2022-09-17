let user = require("readline-sync")
var number = user.questionInt("enter a number to check number divisible or not: ")
if (number % 2 == 0) {
    console.log("Divisible by 2.")
} else {
    console.log("Not divisible by 2")
}