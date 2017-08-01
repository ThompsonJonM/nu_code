var http = require("http");

var portOne = 7000;
var portTwo = 7500;

function handleRequestOne(request, response) {
    response.end("Request worked! Path hit: " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("Request worked! Path hit: " + request.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function() {
    console.log("You are pretty awesome for using this port");
    console.log("Server listening on: http://localhost:5s", portOne);
})

serverTwo.listen(portTwo, function() {
    console.log("Are you kidding me? LEAVE AT ONCE!");
    console.log("Server listening on: http://localhost:5s", portTwo);
})