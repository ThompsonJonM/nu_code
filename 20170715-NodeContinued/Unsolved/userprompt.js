// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Type your username",
        name: "username"
    },
    {
        type: "confirm",
        message: "Please confirm username is correct",
        name: "confirm",
        default: "true"
    },
    {
        type: "password",
        message: "Enter your password",
        name: "password",
    },
    {
        type: "list",
        message: "Favorite season?",
        choices: ["Summer", "Fall", "Winter", "Spring"],
        name: "seasons"
    },
    {
        type: "checkbox",
        message: "Select your favorite weather",
        name: "weather",
        choices: [
            {name: 'rain', checked: false},
            {name: 'snow', checked: false},
            {name: 'clear', checked: false},
            {name: 'cloudy', checked: false}
        ]
    }
])

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

.then(function(inquirerResponse) {
    if(inquirerResponse.password === "test") {
        console.log(inquirerResponse);
    }
    else {
        console.log("Password incorrect");
    }
});

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
