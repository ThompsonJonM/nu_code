var inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "question",
        message: "What is your question?"
    }
]).then(function (answers) {
    console.log(answers.question);
});