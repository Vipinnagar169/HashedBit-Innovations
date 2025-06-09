// Q6: Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person = {
  name: "Vipin",
  age: 22,
  occupation: "Developer"
};

function greetPerson(obj) {
  console.log(`Hello, I'm ${obj.name}. I'm ${obj.age} years old and work as a ${obj.occupation}.`);
}

greetPerson(person);
