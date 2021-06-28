// lottery prize

function checkLottery(number) {
    var prize = 0;
    if (number % 4 == 0) {
        if (number % 7 == 0)
            prize = 20
        else
            prize = 6
    } else if (number % 7 == 0)
        prize = 10
    else
        prize = 0

    return prize
}

function calcReward(arr) {
    var reward = 0
    for (var i = 0; i < arr.length; i++) {
        reward += checkLottery(arr[i])
    }
    return reward
}

console.log(calcReward([4, 21, 10]));



