// requried run rate

function requriedRunRate(target,mOver,cScore,oBowled) {
    let score = target - cScore
    let ball = (mOver*6)-(oBowled*6)
    let rRR = (score/ball)*6
    return rRR.toFixed(1)
}

console.log(requriedRunRate(120,20,60,14))
console.log(requriedRunRate(300,50,60,14))