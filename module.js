// require use to access file

const requi = require('./people');  // does not mean we can access all of people files data just give access of inside
// requi get whaever exported from the file PEOPLE

console.log(requi); // emoty // return empty ocject
//console.log(people); //cannot access    

console.log(requi.age,requi.people)


// Now if I want to get only people and they exported all data

//const {people} = require('./people')
//console.log(people); // we get the details of people only
// console.log(age) // Not access because we got info only people

const {people,age} = require('./people') // now get all age and people data
console.log(people,age); // we get the details of people and age both

// some internal object... bult object

const os = require('os');  // already created OS file in Node... I do not need to create
console.log(os.platform(), os.homedir());