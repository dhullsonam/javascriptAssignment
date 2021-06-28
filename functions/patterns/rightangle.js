// patterns function

function printStar(numOfTimes) {
    for (let i = 0; i <=numOfTimes; i++) {
        process.stdout.write('*')
    }
}

let start = 0;
let end = 5;
for (let i = start; i < end; i++) {
    printStar(i)
    console.log()
}
