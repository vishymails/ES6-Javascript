var defaultColors = ['red', 'blue', 'green']
var userDefinedColors = ['yellow', 'orange']

var mergedColors = [...defaultColors, ...userDefinedColors]

console.log('Merged colors', mergedColors)







function printColors(first, second, third, ...others) {
  console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
}
printColors('yellow', 'blue', 'orange', 'white', 'black')




//Top three colors are yellow, blue and orange. Others are: white,black 





function printColors(first, second, third, ...others) {
  console.log('Top three colors are ' + first + ', ' + second + ' and ' + third + '. Others are: ' + others)
}
printColors('yellow', 'blue', 'orange', 'white', 'black')

//Top three colors are yellow, blue and orange. Others are: white,black