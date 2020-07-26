// Your code here.

const person = {
  
}

const personTwo = {

}

const getFirstName = function(person) {
  return person.firstName;
}

const getLastName = function(person) {
  return person.lastName;
}

const getFullName = function(person) {
  return person.firstName + " " + person.lastName;
}

const setFirstName = function(person, name) {
  return person.firstName = name;
}

const setAge = function(person, newAge) {
  return person.age = newAge;
}

const giveBirthday = function(person, plusOne) {
  if (person.hasOwnProperty('age') === false) {
    return person.age = 1;
  } else {
    return person.age = person.age + 1;
  }
}

const marry = function(person, personTwo) {
    person.married = true;
    personTwo.married = true;
    person.spouseName = getFullName(personTwo); //?
    personTwo.spouseName = getFullName(person); //?
}

const divorce = function(person, personTwo) {
  person.married = false;
  personTwo.married = false;
  delete person.spouseName;
  delete personTwo.spouseName;
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
