var inquirer = require('inquirer');
var maxDogs = 5;
var occupants = [];

// constructor for new pups
function Dog (name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.dogInfo = function () {
        console.log("\n--------------------------------------");
        console.log("\nName: " + name, "\nBreed: " + breed, "\nAge: " + age);
        console.log("\n--------------------------------------");
    }
}

// recursion attempt
// function occupantCount(count) {
//     if (count === 5) {
//         console.log("The kennel is full!")
//     } else if (count > 5) {
//         console.log("Puppies in the kennel: " + count);
//         occupantCount(count + 1);
//     }
// }

// recursion actual
function intakePuppy () {
    if (occupants.length < maxDogs) {
        // do intake for the puppies
        inquirer.prompt([
            {
                name: "puppyName",
                message: "Enter dog's name"
            }, {
                name: "breed",
                message: "Dog's breed?"
            }, {
                name: "age",
                message: "Dog's age?"
            }
        ]).then(function (answer) {
            // convert to dog years (*7)
            // +answer has '+' before answer as it is the shorthand
            // for parseInt. '+' turns the string element into an interger
            var puppyAge = +answer.age * 7;

            // only want pups
            if (puppyAge > 14) {
                console.log("We are sorry, we only accept puppies");
            } else {

                // see above regarding +answer
                var newDog = new Dog(answer.puppyName, answer.breed, +answer.age)
                occupants.push(newDog);
                console.log("Welcome, " + newDog.name);
            }

            // intake the next puppy
            intakePuppy();
        });
    }
}

intakePuppy();

