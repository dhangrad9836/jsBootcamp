const notes = ['Notes 1', 'Note 2', 'Note 3']


//changing  the value of element 3 in our notes array
notes[2] = 'This is now the new note 3'
//adding items to the end of the array using push method
notes.push('My new note')

//delete items to the end of the array using pop method
console.log(notes.pop())

//also using shift and unshift removes the first    STOPPET @ LEC39 3:20

console.log(notes.shift())  


//unshift puts what you are inputing at the beginning of the array
console.log(notes.unshift('My first note'))
console.log(notes.length)
console.log(notes)

//this will display the last item in the list
console.log(notes[notes.length -1])

//this will display the second to last item in the list
console.log(notes[notes.length -2])


//splice method.....note that it takes two methods
//splice method...that takes three params....so you start then
//remove, then add what is in the third param
//notes.splice()

//note with using zero as the second param, the zero says that we are 
//not removing any params but the third param you will put in whatever
//ie string, num object to add it to the array
//ie notes.splice(1,0,"Hello i'm in the array now")
//this starts at position one or the second place in the array, it 
//removes nothing and adds "Hello i'm in the array now"
//notes.splice()


//also if you change the second param to a place in the array
//it will remove that item in the array and replace it with 
//what you have for the third param

//this prints 'testing 123' three times because we have three elements 
//in our array
//also this passing of a function into another function is called a

//CALLBACK FUNCTION 
notes.forEach(function() {
    console.log('testing 123')
}) 

//now we will access the items in the array by passing params inside 
//the forEach function.....which by default you get two params to use....
//1 the first param is access to each item inside the array..we called it item
/// 2 the second param is getting the index
notes.forEach(function(item, index){
        console.log(index)
        console.log(item)    
})  