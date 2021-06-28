

function repeaDigit(number) {
    var x = 1;
    var sum = 0;
    for (i = 1; i < 5; i++) {
        result = number * x;
        sum = sum + result;
        x *= 10;
    }
    return sum
}

function addDigitsNum(number) {
    var sum = 0

    while (number > 0) {
        i = number % 10;
        sum += repeaDigit(i)
        console.log(sum);
        number = parseInt(number / 10)
    }

    return sum
}

console.log("Final :" + addDigitsNum(2123));