
// prime number 

function checkPrimeNumber(number) {
    var isPrime = true;
    if(number == 1) {
        isPrime = false;
        return false

    }
    for (var i = 2; i < number; i++)
        if (number % i == 0) 
            isPrime = false;

    if (isPrime) 
        return true
     else
        return false
    
}
console.log(checkPrimeNumber(1));
console.log(checkPrimeNumber(2));
// console.log(checkPrimeNumber(3));
console.log(checkPrimeNumber(4));
console.log(checkPrimeNumber(7));
// console.log(checkPrimeNumber(11));

