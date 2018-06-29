//create an array with five todos
//you have x todos
//Print the first and second to last items -> Todo: walk the dog

const todos = ['Study JavaScript', 'Install door sweep', 'Pack luggage',
'Clean house', 'kill fruit flies']

/* console.log(`You have ${todos.length} todos`)
console.log(`Todo: ${todos[0]},\n${todos[todos.length-3 ]}`) */

/* todos.splice(2,1)
todos.push('Pack luggage')
//shift removes the first element in the array
todos.shift() */

//1. The first item
//2. Second item in array
//etc

todos.forEach(function(item, index){
    console.log(`${index + 1}. ${item}`)

})