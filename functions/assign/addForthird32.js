// 32. three number a,b,c return true if sum of two number equqls to third number

function checkSum(num1 ,num2, num3) {
    var a = num1 + num2;
    var b = num1 + num3;
    var c = num2 + num3;
    if ((num3 == a) || (num2==b) || (num1==c)) 
        return true;
    else 
        return false;
}

console.log(checkSum(4,5,9));
console.log(checkSum(4,7,9));
console.log(checkSum(19,10,9));