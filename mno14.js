function checklist(a, b) {
    for (var i in a) {
        if (a[i] % 2 === 0 && b[i] % 2 === 0) {
            console.log("both are even")
        } else {
            console.log("both are not even")
        }
    }
}
checklist([2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87])