//Globa scope (convertFahrenheitToCelsius, tempOne, tempTwo)


let convertFahrenheitToCelsius = function (temp) {
    //let fahrenheit = 32;
    let celsius = ((temp) - 32) * (5 / 9)

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius;
}

let convertedTemp = convertFahrenheitToCelsius(32)
let convertedTemp2 = convertFahrenheitToCelsius(68)

console.log(convertedTemp)
console.log(convertedTemp2)

let name = 'Jen'
let age = 4
console.log(`Hey, my name is ${name}! I am ${age} years old`)













