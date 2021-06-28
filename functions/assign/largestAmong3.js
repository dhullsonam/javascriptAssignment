// 27. return largest among 3 numbers

function largestNumber(num1, num2, num3) {
    if (num1 > num2)
        if (num1 > num3)
            return num1;

        else if (num2 > num3)
            return num2;
        else
            return num3
}

console.log(largestNumber(2, 5, 7));
console.log(largestNumber(223, 50, 7));
console.log(largestNumber(452, 543, 79));