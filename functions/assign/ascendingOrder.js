// 21. return true if 3 numbers are in ascending order...without using if condition


function checkAscendingOrder(num1 , num2 , num3) {
    return (num1<num2) && (num2<num3)? true : false
 
}

console.log(checkAscendingOrder(1,3,6));
console.log(checkAscendingOrder(5,9,6));
console.log(checkAscendingOrder(15,8,6));
console.log(checkAscendingOrder(11,13,16));