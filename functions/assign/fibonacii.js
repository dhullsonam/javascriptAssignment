function fibonociiNumber(n) {
    var arry = []
    arry[0] = 0;
    arry[1] = 1;

    for (i = 1; i < n; i++) {
        arry[i + 1] = arry[i] + arry[i - 1];
    }
    return arry;
}

console.log(fibonociiNumber(15));
console.log(fibonociiNumber(10));