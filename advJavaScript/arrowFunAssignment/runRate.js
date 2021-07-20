// 7. calculate Require Run Rate , input=> target,maxover,currentScore,overbowled


let requiredRunRate = (target,maxOvers,currentScore,overBowled) => {
    remainingRun = target - currentScore;
    remainingBowles = (maxOvers - overBowled)*6
    return (remainingRun/remainingBowles)*6
}

console.log(requiredRunRate(240,20,60,10));