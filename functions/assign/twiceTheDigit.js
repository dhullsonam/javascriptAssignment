// 13. return the digit repeated twice

function repeatTheDigit(number) {
    var digit = number.toString()
    return digit.repeat(2)

    
}
console.log(repeatTheDigit(2345));



// basic solution

function repeaDigit(number) {
    var x = 1;
    var sum = 0;
    for(i=1; i<5; i++) {
       result = number*x;
       sum = sum+result;
       x *= 10;
   }
   return sum
}
console.log(repeaDigit(4));