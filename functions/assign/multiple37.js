// 25. multiple of 3 and 7

function multipleOf37(number) {
    return (number%3 == 0) && (number%7 == 0)
}

    

console.log(multipleOf37(21));
console.log(multipleOf37(18));
console.log(multipleOf37(25));