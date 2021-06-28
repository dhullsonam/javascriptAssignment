// 20. num1 greater then atleast one of the other number

function greaterNumber(num1, num2, num3) {
     return num1>num2? true: num1>num3? true: false;      
}

console.log(greaterNumber(34,2,5));
console.log(greaterNumber(2,5,6));
console.log(greaterNumber(12,5,14));