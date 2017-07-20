//take text from command line
var fs = require('fs');

var command = process.argv[2];
var amount = process.argv[3];

console.log('you have requested to ' + command + ' ' + amount);

//use switch instead of a ton of if/else statements
switch(command) {
    case "deposit":
        deposit();
        break;
    case "withdraw":
        withdraw();
        break;
    case "lotto":
        lotto();
        break;
    case "total":
        total();
        break;
}