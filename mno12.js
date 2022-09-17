// function list(a, b) {
//     for (var i in a) {
//         for (var j in b) {
//             if (i === j) {
//                 add = a[i] + b[j]
//                 console.log(add)
//             }
//         }

//     }
// }
// list([50, 60, 10], [10, 20, 13])


const add = function(a, b) {
    for (var i in a) {
        console.log(a[i] + b[i])
    }
}
add([50, 60, 10], [10, 20, 13])