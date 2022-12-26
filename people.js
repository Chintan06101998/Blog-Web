const people = ["Chintan", "Neeharika","Deep","kajal","Meet"];   // calling in module file
module.exports = "Hello"   // whatever the value we tell to export is export to the another file like instead of giving HELLO i cansend PEOPLE object
// module.exports = people;
//console.log(people);

const age = [20,25,26,28,20];

module.exports = {
     people,
     age
} 