const _ = require("lodash")

const holidays = [
    {name: "Christmas", date: new Date("2025-12-25")},
    {name: "Canada day", date: new Date("2025-07-01")},
    {name: "April Fools", date: new Date("2025-04-01")}
]
let today = new Date();
holidays.forEach(holiday =>{
    let dateDifference = holiday.date - today
    let days = Math.ceil(dateDifference/(1000 *60 *60 *24))
    console.log(days)
})

console.log(_.sample(holidays))
console.log(_.findIndex(holidays, {name:"April Fools"}))


// Create a new Express application
// Create a router file and import it into the server
// Create a route /name that renders your name
// Create a route /greeting that renders your name and student number
// Create route /add that accepts x and y as get params and returns the result
// Create a route /calculate that accepts a, b, and operation to perform (+, -, *, /, **)
// Use Postman to handle your incoming requests and provide screenshots for each step. Put them into a screenshots folder in y our submission