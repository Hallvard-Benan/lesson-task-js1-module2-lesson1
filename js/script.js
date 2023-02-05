// Question 1
function receivingFunction(argument) {
  if (typeof argument === "function") {
    argument();
  } else {
    console.log("Not a function");
  }
}

const callbackFunction = function () {
  console.log("I am a callback function");
};

receivingFunction(callbackFunction);

// question 2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (price, index) {
  console.log(`Prize ${index + 1}: ${price}`);
});

// question 3
let waitTime = 5000;

const timeOutFunction = setTimeout(function () {
  console.log(`I waited ${waitTime / 1000} seconds before executing`);
}, waitTime);

// question 4
let count = 1;
const countIncreaser = setInterval(function () {
  console.log(count++);
  if (count > 4) {
    clearInterval(countIncreaser);
  }
}, 1500);
