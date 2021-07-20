// 5: input => number , return =>fibonacci series

let fibonacciNum = (number) =>{
    arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(var i =2; i<number; i++) {
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr;
}

console.log(fibonacciNum(8));