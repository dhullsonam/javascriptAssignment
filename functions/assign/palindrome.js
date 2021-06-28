// check the palindrome number

function checkPalinNum(number) {
    var count = number.length - 1
    var half = number.length / 2
    for (i = 0; i < half; i++) {
        if (number[i] != number[count]) {
            return false
        }
        count--
    }
    return true
}

//even string
console.log(checkPalinNum('1221'));
//odd string
console.log(checkPalinNum('12121'));

//
console.log(checkPalinNum('2321323'));
console.log(checkPalinNum('1334'));
