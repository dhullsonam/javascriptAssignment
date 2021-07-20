// 10. input 3 digit number return=> reverse
// now become generic


let countNumOfDigit = (number) => { 
    var count = 0;
    while(number>0){
        number = parseInt(number/10)
        count++;
    }
    return count;
}

let reverseNum = (number) => {
    var i = countNumOfDigit(number);
    var result = 0;
    while (number > 0) {
        res = number % 10;
        number = parseInt(number / 10);
        result += res * (10 ** i)
        i--;
    }
    return result;
}
console.log(reverseNum(2342345));

