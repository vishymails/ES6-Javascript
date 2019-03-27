"use strict";

function sum(...args){
    var total;
    total = args.reduce((acc, elem) => acc + elem, 0);
    console.log(total);
}

sum(1, 2, 3);

sum(1, 2, 3, 4, 5);

sum(4,5, 6, 7, 8, 5, 3, 22, 44);


