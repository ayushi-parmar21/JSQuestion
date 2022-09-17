function sum(list) {
    sum1 = 0
    for (var i in list) {
        sum1 += i
    }
    console.log(sum1)
}
sum([8, 2, 3, 0, 7])