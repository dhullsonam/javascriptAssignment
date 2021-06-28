//check odd number + 42


function checkOddNumber(number) {
    if (number%2 != 0) 
        return true
     else 
        return false
    
}


function printAlOdd(from,to) {
    var resultArr = []
    for (var i = from; i <= to; i++) {
        if(checkOddNumber(i)) {
            //console.log(i);
            resultArr.push(i)
        }
    }
    return resultArr
}

// console.log('The number is odd:  '+checkOddNumber(32));
// console.log('The number is odd:  '+checkOddNumber(21));

console.log(printAlOdd(10,100));
