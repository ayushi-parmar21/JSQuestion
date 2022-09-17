function even_odd(num) {
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log("EVEN", i)
        } else {
            console.log("ODD", i)
        }

    }
}
even_odd(3)