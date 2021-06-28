// 29. return true if char is 0-9

function isDigit(chr) {
    var ascii = chr.charCodeAt(0)
    if ((ascii >=48) && (ascii <=57)) 
        return true
      else 
        return false
    
}

console.log(isDigit('a'));
console.log(isDigit('0'));
console.log(isDigit('9'));
