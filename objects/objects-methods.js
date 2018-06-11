//seating tracker for a restaurant

let restaurant = {
    name: 'Buffalo Wild Wings',
    guestCapacity: 75,
    guestCount: 0,  //this is how many guest currently seated in restaurant
    //create a method to see availibilty
    //methods are an object property whose value is a function
    //ie: the object property is checkAvailability and the the value is function
    checkAvailability: function (partySize) {
        //console.log(this.guestCapacity)
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },//end of checkAvailability
    


//method
//seatParty method....this takes the guest to be seated and add it 
//dynamically to the object property guestCount
seatParty: function (numOfGuestsToBeSeated) {
    if (this.guestCount + numOfGuestsToBeSeated > this.guestCapacity){
         console.log("Exceeded guestCount")
    }else
     this.guestCount += numOfGuestsToBeSeated   

},//end of seatParty


//method
//removeParty method...takes the party that's leaving the restaurant and 
//add removes it from guest count
removeParty: function (numOfGuestsLeaving) {
    return this.guestCount -= numOfGuestsLeaving
}//end of removeParty

}
//let status = restaurant.checkAvailability(4)
restaurant.seatParty(99)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(50)
console.log(restaurant.checkAvailability(4))