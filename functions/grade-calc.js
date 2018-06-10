//student score, total possible score
//15 out of 20 -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalculate = function(studentScore, totalPossScore) {
    
    let student = (studentScore / totalPossScore) * 100
    let letterGrade = ''

    if (student >= 90) {
        letterGrade = 'A'
    } else if (student >= 80) {
        letterGrade = 'B'
    } else if (student >= 70) {
        letterGrade = 'C'
    } else if (student >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${student}%)!`


/*     if (student >= 90) {
        return `You got a A (${student}%)!`
    } else if (student >= 80) {
        return `You got a B ${student}%`
    } else if (student >= 70) {
        return `You got a C ${student}%`
    } else if (student >= 60) {
        return `You got a D ${student}%`
    } else {
        return `You got a F ${student}%`
    } */
}


let calculate = gradeCalculate(13, 20)

console.log(calculate)