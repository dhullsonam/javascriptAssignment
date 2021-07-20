// 12. return true ,if number divisible by either 3 or 7

let multipleOf = (number) => {
    if (number % 3 == 0 || number % 7 == 0)
        return true
    else
        return false
}
console.log(multipleOf(31));
console.log(multipleOf(30));