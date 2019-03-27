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