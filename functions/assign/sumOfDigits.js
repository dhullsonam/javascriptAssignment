// 18. function returning the sum of Digits:

function sumOfDigits(number) {
    var sum = 0;
    while ( number > 0 ) {
        sum += number%10;
        number = parseInt(number/10)
    }    
      
    return sum;
}
console.log(sumOfDigits(31234555));
console.log(sumOfDigits(12));
console.log(sumOfDigits(5));

