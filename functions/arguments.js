let add = function(a, b, c) {
    return a + b + c
}

let result = add(3, 4, 5)

console.log(result)


//default arguements if no value is provided
let getScoreText = function(name = 'anonymous', score = 0) {
    /* console.log(name)
    console.log(score) */
    return `Name: ${name} - Score: ${score}`
    //return 'Name: ' + name + ' Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challenge
//total, tipPercent .20 use as a default param

//challenge templateString
// A 25% tip on $40 would be $10
let tipCalculate = function (total, tip = 0.2) {
    let percent = tip * 100
    let resultOfTip = total * tip
    return `A ${percent}% tip on $${total} would be $${resultOfTip}`
}

let getTip = tipCalculate(40)
console.log(getTip)