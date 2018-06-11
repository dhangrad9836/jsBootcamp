let name = '  Andrew Mead'

//length property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())


//convert to lowercase
console.log(name.toLowerCase())

//Includes method  for a password
let password = 'abc123passwd098'
console.log(password.includes('password'))

//Trim method   //takes off white space or extra spaces in front of a string
console.log(name.trim())

//challenge area

//isValidPassword
//return true if length is more than 8 characters
//and it does not contain the word password
let isValidPassword = function (pwd) {
    return (pwd.length > 8) && !(pwd.includes('password'))
    
}

console.log(isValidPassword('asfd'))
console.log(isValidPassword('asafjdkskls#$##%$%#%%'))
console.log(isValidPassword('asfdpasswordkskdfj'))


