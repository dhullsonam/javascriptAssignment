// 39. input as number return string filled  with natural number

function numberOfString(number) {
    var result = ''
    for (let i = 1; i <=number; i++) {
        let re = i;
        result = result.concat(re)
    }
    return result
}

console.log(numberOfString(10))