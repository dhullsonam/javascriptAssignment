//14 . lottery prize 

let lotteryPrize = (number) => {
    if (number % 4 == 0 && number % 7 == 0)
        return 20;
    else if (number % 4 == 0)
        return 6;
    else if (number % 7 == 0)
        return 10;
    else
        return 0;
}

console.log(lotteryPrize(3));
console.log(lotteryPrize(28));
console.log(lotteryPrize(49));