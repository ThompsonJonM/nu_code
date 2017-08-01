var http = require("http");

var portOne = 7000;
var portTwo = 7500;

function handleRequest(request, response) {

}

server.listen(portOne, function() {
    console.log("You are pretty awesome for using this port");
})

server.listen(portTwo, function() {
    console.log("Are you kidding me? LEAVE AT ONCE!");
})