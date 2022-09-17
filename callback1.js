// // question 1
// function show(a) {
//     console.log("i am show" +
//         a)
// }

// function geeky(Callback) {
//     var a = 5;
//     Callback(a);
// }
// geeky(show)





// // question 2
// function show(a) {
//     console.log("i am show" +
//         a)
// }

// function geeky(c, b, Callback) {
//     var sum = b + c;
//     Callback(sum);
// }
// geeky(6, 5, show)




// // question 3
// //synchronous
// function show() {
//     console.log("i am show")
// }

// function geeky(Callback) {
//     Callback();
// }
// geeky(show)
// console.log("End")


// // // question 4
// // //Asynchronous
// setTimeout(function show() {
//     console.log("i am show")
// }, 5000)
// console.log("End")




function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

mySecond();
myFirst();