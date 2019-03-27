"use strict";

function multiplyBy(a, mult = 2) {
  console.log(a * mult);
}

multiplyBy(2);
// 

multiplyBy(2, undefined);
// 

multiplyBy(2, 0);
// 

multiplyBy(5, 10);
// 