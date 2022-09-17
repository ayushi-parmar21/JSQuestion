let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("To divible number: ");
let readline = require("readline-sync");
var vary = readline.questionInt("enter a number: ");
if (varx % vary == 0) {
    console.log(" yes divisible")
} else {
    console.log("not divisible")
}