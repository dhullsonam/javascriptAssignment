// 35. sum of last three digit

function sumOfLast(number) {
    var sum = 0;
    var i = 0;
    while (i <3) {
        sum += number%10;
        number = parseInt(number/10)
        i++;
    }    
      
    return sum;    
}

console.log(sumOfLast(234567812));
console.log(sumOfLast(2312));