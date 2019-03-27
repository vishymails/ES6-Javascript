function printFirstAndSecondElement([first, second]) {
    console.log('First element is ' + first + ', second is ' + second)
}

function printSecondAndFourthElement([, second, , fourth]) {
    console.log('Second element is ' + second + ', fourth is ' + fourth)
}

var array = [1, 2, 3, 4, 5]

printFirstAndSecondElement(array)
printSecondAndFourthElement(array)




function printBasicInfo({firstName, secondName, profession}) {
	console.log(firstName + ' ' + secondName + ' - ' + profession)
}

var person = {
  firstName: 'John',
  secondName: 'Smith',
  age: 33,
  children: 3,
  profession: 'teacher'
}

printBasicInfo(person)