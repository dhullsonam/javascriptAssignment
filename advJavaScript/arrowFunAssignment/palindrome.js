// 4.  accept input as number & return true => if palindrome else return false

let checkPalindrome = (number) => {
    var count = number.length - 1;
    var half = number.length / 2;

    for (var i = 0; i < half; i++) {
        if (number[i] != number[count])
            return false;
    }
    count--;
    return true;
}
console.log(checkPalindrome('1231'));
console.log(checkPalindrome(1234321));