let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

/* let otherAccount = myAccount
otherAccount.income = 1000 */

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (income, amount) {
    income.income = income.income + amount
}
//resetAccount   WRONG!!!!!
/* let resetAccount = function () {
    myAccount.expenses = 0
    myAccount.income = 0
} */
//correct way...note that the param pass will access the properties 
//for the object. So you don't need to use actual name of the object
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
//getAccountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in
    income and $${account.expenses} in expenses`
    }


addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

//account for Andrew has $900. $1000. $100 in expenses

addExpense(myAccount, 2.50)
console.log(myAccount)