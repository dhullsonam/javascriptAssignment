// 8: count the number of digit in an integer


let countNumOfDigit = (number) => { 
    var count = 0;
    while(number>0){
        number = parseInt(number/10)
        count++;
    }
    return count;
}

console.log(countNumOfDigit(123458766));


