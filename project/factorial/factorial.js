function factorial(x) {
    if (x === 1) {
        return x;
    }
    return x * factorial(x - 1)
}
alert(factorial(4))