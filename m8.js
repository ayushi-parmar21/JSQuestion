let readlineSync = require("readline-sync");
var litter = readlineSync.questionInt("how much water in tenk:");
if (litter < 1) {
    console.log("more water needs to be filled.")
} else if (litter >= 1 && litter <= 10) {
    console.log("there is no need to fill water.")
} else {
    console.log(" the water will overflow.")
}