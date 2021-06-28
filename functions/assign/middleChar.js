// 30.
// function return ascii value
function asciiValue(ch1) {
    asci = ch1.charCodeAt(0)
    return asci
}

console.log(middleChar(['a', 'd', 'c']));

// middle char
function middleChar(arry) {
    var result = []
    for (var i = 0; i < arry.length; i++) {
        resu = asciiValue(arry[i])
        result.push(resu)

    }
    var sortedElement = sortedValue(result)
    var middle = sortedElement.length / 2
    return String.fromCharCode(sortedElement[parseInt(middle)])
}

// return sorted value
function sortedValue(arr) {
    for (var j = arr.length - 1; j > 0; j--) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    return arr
}