// 28. change the char character

function changeCharCase(str) {
    var asci = str.charCodeAt(0)

    if (asci < 97) {
        var changeV = asci + 32;
        return String.fromCharCode(changeV)
    }
    else {
        var changedValue = asci - 32;
        return String.fromCharCode(changedValue)
    }

}

console.log(changeCharCase('b'));
console.log(changeCharCase('B'));
console.log(changeCharCase('y'));
console.log(changeCharCase('Y'));

