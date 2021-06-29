
//  38 . PERFECT NUMBER
// return factor of a number
function factorOfNum(number) {
    var factors = []
    for (var i = 1; i < number; i++) {
        if (number % i == 0)
            factors.push(i)
    }
    return factors
}

// returns perfect Number
function perfectNum(number) {
    let factors = factorOfNum(number)
    let sum = 0
    for (var i = 0; i < factors.length; i++)
        sum += factors[i]
    if (number == sum)
        return 'perfect number'
    else
        return 'not a perfect number'      
}

console.log(perfectNum(6))
console.log(perfectNum(24))