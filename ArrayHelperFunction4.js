var people = [
  {name: 'Arun', sal: 5000000},
  {name: 'Saurab', sal: 90000000}, 
  {name: 'Sneha', sal: 40000000}, 
  {name: 'Arun', sal: 19000000}, 
  {name: 'Nitesh', sal: 16000000}
]

function highPaidPerson(person) {
    return person.sal > 10 && person.sal < 20
}

var FirstHighPaidPerson = people.find(highPaidPerson)

console.log('First found High Paid Person:', FirstHighPaidPerson.name)




var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var everyoneIsTeenager = people.every(teenager)

console.log('Everyone is teenager: ', everyoneIsTeenager)





var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var thereAreTeenagers = people.some(teenager)

console.log('There are teenagers:', thereAreTeenagers)




var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)






