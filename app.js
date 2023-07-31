var person = require('./person.js');

var person1 = new person('Llewellyn', 'Ballas', 'llewellyn@ballas.com');
var person2 = new person('Efin', 'Lesar', 'efin@lesar.com');
var person3 = new person('Clayton', 'Sherman', 'clayton@sherman.com');

console.log(person1.personDetails());
console.log(person2.personDetails());
console.log(person3.personDetails());