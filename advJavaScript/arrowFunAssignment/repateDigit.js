// 9. accept integer return => twice of that integer
//  now become Generic

let countNumOfDigit = (number) => {
    var count = 0;
    while (number > 0) {
        number = parseInt(number / 10)
        count++;
    }
    return count;
}

let twiceDigit = (num) => {
    var count = countNumOfDigit(num);
    var a = count;
    var result = 0;
    var sum = num;
    console.log(num);
    for (i = 0; i < count; i++) {
        result += num % 10 * (10 ** a)
        num = parseInt(num / 10);
        a++;
    }
    return result + sum;
}
console.log(twiceDigit(11223344));