// Dependencies
var express = require("express");

// Create express app instance.
var app = express();


// shipit - take two names and combine them together
// bonus - remove the first letter off of the last name

app.get("/:shipit/:nameOne/:nameTwo/:nameThree", function(req, res) {
  var shipit = req.params.shipit;
  var nameOne = req.params.nameOne;
  var nameTwo = req.params.nameTwo;
  var nameThree = req.params.nameThree;

  res.send(req.params.nameOne + req.params.nameTwo + req.params.nameThree);
});

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:numOne/:numTwo", function(req, res) {
  var operation = req.params.operation;

  // + prior to req auto-changes the string input to a number
  var numOne = +req.params.numOne;
  var numTwo = +req.params.numTwo;

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.

      result = numOne + numTwo;

      break;
    case "subtract":
      // Subtract logic

      result = numOne - numTwo;

      break;
    case "multiply":
      // Multiply

      result = numOne * numTwo;

      break;
    case "divide":
      // Divide

      result = numOne / numTwo;

      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
