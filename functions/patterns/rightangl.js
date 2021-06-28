// patterns function

function printStar(numOfTimes) {
    for (let i = 0; i <=numOfTimes; i++) {
        process.stdout.write('*')
    }
}

function printSpace(numOfTimes) {
    for (let i = numOfTimes; i > 0; i--) {
        process.stdout.write(' ')
    }
}

let start = 0;
let end = 5;
for (let j = end; j > start; j--) {
    printSpace(j)
    printStar(end -j)
    console.log()
}
