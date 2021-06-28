// 31. same last digit

function checkLastDigit(num1, num2) {
    var r1 = num1 % 10;
    var r2 = num2 % 10;
    if (r1 == r2) 
        return true
    else 
        return false
}


console.log(checkLastDigit(12, 232));
console.log(checkLastDigit(12, 21));