let myBook = {
    title:'1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    //returning an object
    return{
        //returning an object from a function (in this case the function 
    //is book and the objects properties will be referenced with dot notation
//and at the bottom we will reference the books and call through the function)
        //values as we want
        //properties are the two below are also objects
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long` 
        
    }
    
    //this is passing an object into a function
    //console.log(`${book.title} by ${book.author}`)
}

//here we can reference the individual books and we use the function book
///from above 
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
 


//challege area
/* let fahrenheit = 32;
const tempKelvinConstant = 459.67;
let celsius = ((fahrenheit) - 32) / (9 / 5); */
//calculate celsius and store in celsius variable
//(C) = ((F) - 32) / (9/5)
//print that value
//calculate kelvin value and store in variable
//T(K) = (T(°F) + 459.67)× 5/9
/* let kelvin = ((fahrenheit) + tempKelvinConstant) * (5 / 9); */


    //using a function temp coverter
/* let tempConverter = function(temp) {
    let fahrenheit = temp;
    let celsius = (fahrenheit - 32) * (5 / 9)
    let kelvin = (fahrenheit+ 459.67) * (5 / 9)
    return {
        tempFahrenheitConverted: `${fahrenheit} and ${celsius} and ${kelvin}`
    }    
} */

    //this is using in object notation form for temp converter
let tempConverter = function (temp) {
    return {
    fahrenheit: temp,
    kelvin: (temp + 459.67) * (5 / 9),
    celsius: (temp - 32) * (5 / 9)
        
    }
}

let tempFah = tempConverter(74)

console.log(tempFah)

