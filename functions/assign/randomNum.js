//   generate random numbers

function randomNumber(number) {
    var string = ''
    for (let i = 1; i <= number; i++) {
        if (string != '')
            string += "," + Math.floor(Math.random()*number)
        else
            string += Math.floor(Math.random()*number)
    }
    return string
}

console.log(randomNumber(88))