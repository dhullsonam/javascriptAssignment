// accept number as input return factorial

let factorial = (num) => {
    if (num == 0)
        return 0;
    else {
        var sum = 1;
        for (var i = num; i > 0; i--) {
            sum *= num;
            num--;
        }
    }
    return sum;
}

console.log(factorial(5));