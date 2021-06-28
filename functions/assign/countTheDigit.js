//count the number of digit


// function countTheDigit(number) {
//     let count = 0
//     while (number > 0) {
//         number = parseInt(number / 10)
//         count++
//     }
//     return count
// }


function countTheDigit(number) {
    
    for(var i = 0; number > 0; i++)
        number = parseInt(number/10)

    return i
}

console.log(countTheDigit(1234));
console.log(countTheDigit(233454));