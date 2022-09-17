function multiplesOfNumbers(num) {
    sum = 0
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    console.log(sum)
}
multiplesOfNumbers(10)