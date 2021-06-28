// return the hundredth digit number


function hundredthValue(number) {
    for(var i=0; i<2; i++) {
        result = number/10;
        number = parseInt(result)
    }
    return number%10;
}
console.log(hundredthValue(8787878787878786));
console.log(hundredthValue(1234));