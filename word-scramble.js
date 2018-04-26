let greeting = 'Hello, world.'

let splitGreeting = greeting.split('');

splitGreeting[Math.floor(Math.random() * (splitGreeting.length))];

let firstIndex = Math.floor(Math.random() * (splitGreeting.length));
let secondIndex = Math.floor(Math.random() * (splitGreeting.length));
let a = splitGreeting[firstIndex];
splitGreeting[firstIndex] = splitGreeting[secondIndex];
splitGreeting[secondIndex] = a;






