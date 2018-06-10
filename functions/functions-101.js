//Function - input, code output

let greetUser = function () {
    console.log('Welcome user!')
}

//call function
greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result

}

let value = square(3)
let otherValue = square(10)
console.log(value + " " + otherValue)


//challenge area

//convertFahrenheitToCelsius

//call a coupe of time (32 -> 0) (68 -> 20)

//print the converted values

/* let fahrenheit = 32;
const tempKelvinConstant = 459.67;
let celsius = ((fahrenheit) - 32) / (9 / 5); */ 

let convertFahrenheitToCelsius = function (temp) {
    //let fahrenheit = 32;
    let celsius = ((temp) - 32) * (5 / 9)
    return celsius;
}

let convertedTemp = convertFahrenheitToCelsius(32)
let convertedTemp2 = convertFahrenheitToCelsius(68)

console.log(convertedTemp)
console.log(convertedTemp2)