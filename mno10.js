// function student(num) {
//     count = 0
//     for (var i of num) {
//         if (i >= 20) {
//             count++
//         }
//     }

// }
// student([21, 25, 19, 25, 33, 54])
// console.log(count)

(function(num) {
    count = 0
    for (var i of num) {
        if (i >= 20) {
            count++
        }
    }
    console.log(count)

})([21, 25, 19, 25, 33, 54]);