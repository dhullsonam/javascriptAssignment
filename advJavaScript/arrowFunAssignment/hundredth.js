// 13. return 100th place value

let hundredthValue = (number) => {
    for (i = 0; i < 3; i++) {
        num = number % 10;
        number = parseInt(number / 10)
    }
    return num
}
console.log(hundredthValue(56798768));