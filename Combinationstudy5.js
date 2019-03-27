"use strict";

var greeting = (() => {
  var greetingString = "Hey, that's";

  function greet(name) {
    return `${greetingString} ${name}`;
  }

  function changeGreeting(newGreeting) {
    greetingString = newGreeting;
  }

  return {
    greet,
    changeGreeting
  };
})();

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(
  greeting.changeGreeting("Good Morning from")
);
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily