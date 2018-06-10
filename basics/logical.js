let temp = 55;

//Logical And Operator

if (temp >= 60 && temp <= 90) {
    console.log('It\'s pretty nice outside')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log("do what ever")
}


//challenge
let isGuestOneVegan = true;
let isGuestTwoVegan = true;

//are both vegan? Only offer up vegan dishes
///are at least one vegan? make sure to offer up spmpe vegan options
//else offer up anything on the menu

//short way of writing
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("What vegan dishes would you like")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("We have some vegan or regular dishes")
} else {
    console.log("What would you like to eat?")
}

///long way of writing
/* if (isGuestOneVegan == true && isGuestTwoVegan == true) {
    console.log("What vegan dishes would you like")
} else if (isGuestOneVegan == true || isGuestTwoVegan == true) {
    console.log("We have some vegan or regular dishes")
} else {
    console.log("What would you like to eat?")
} */