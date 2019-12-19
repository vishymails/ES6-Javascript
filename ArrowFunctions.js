
var array = [1,2,3,4,5];

//const sum = (acc, value) => acc + value;

const sum = (acc, value) => {
    const result = acc+ value;
    console.log(acc, 'plus', value, 'is : ' , result);
    return result;
};


const product = (acc, value) => acc * value;

var sumOfArrayElements = array.reduce(sum, 0);

var productOfArray = array.reduce(product, 1);

