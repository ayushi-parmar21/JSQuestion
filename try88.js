// let a;
// console.log(typeof(a));
// let b = null;
// console.log(typeof(b));
// let c = ("ayus" / 6);
// console.log(typeof(c));
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// };

// let i = 1;
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let a = 1;
// do {
//     console.log(a)
//     a++
// }
// while (a <= 10)



// function func1() {
//     setTimeout(() => {

//         // let y = 12;
//         console.log(x);

//     }, 3000);

//     var x = 2;
//     let y = 12;
//     console.log(y);
// }

// func1();





// function func2() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => console.log(i), 2000);
//         // console.log(i)
//     }
//     // console.log(i)

// }
// func2()x = 23; // Gives reference error

// let x;


// function anotherRandomFunc() {
//     message = "Hello"; // Throws a reference error
// }
// anotherRandomFunc();




function sayHi() {
    console.log('Hello');
}

setTimeout(sayHi, 100);
clearInterval(sayHi)