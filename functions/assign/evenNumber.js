// return true if no.is true and false if not + 41

function checkEvenNumber(number) {
    if (number % 2 == 0)
        return true
    else
        return false
}
function printEven(from, to) {
    var result = []
    for (let i = from; i <= to; i++) {
        if (checkEvenNumber(i))
            result.push(i)
    }
    return result
}


console.log(printEven(10, 39));


// var result = checkEvenNumber(30)
// console.log('number is even : '+result);

// console.log('number is even : '+checkEvenNumber(31));