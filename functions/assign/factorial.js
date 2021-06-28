function factorial(number) {
    var fact = 1;

    for (i = number; i > 0; i--) {
        fact = fact * number;
        number--
    }
    return fact
}

var factorialOfNumber = factorial(6);
console.log(factorialOfNumber);