"use strict";

var person1 = {
  name: "Mike",
  info: {
    country: "Spain",
    age: 23
  },
  postsQuantity: 100
};

var person2 = {
  name: "Alice",
  info: {
    country: "Italy",
    age: 25
  }
};

function shortPerson(obj) {
  var {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0
  } = obj;
  return {
    n,
    c,
    a,
    p
  };
}

console.log(shortPerson(person1));
// {n: "Mike", c: "Spain", a: 23, p: 100}

console.log(shortPerson(person2));
// {n: "Alice", c: "Italy", a: 25, p: 0}