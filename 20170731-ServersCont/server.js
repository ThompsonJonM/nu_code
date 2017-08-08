// Dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Port info
var PORT = 8085;

var server = http.createServer(function (req, res) {
    var urlParts = url.parse(req.url);

    switch(urlParts.pathname) {
        case '/':
            serverPage('index.html');
            break;
        default:
            serverPage('index.html');

    }
});

function serverPage (pathname, res) {
    fs.readFile(`${__dirname}/${pathname}`, function (err, fileData) {
        if (err) {
            console.log("something went wrong");
            response.writeHead(500, {"Content-Type": "text/html"});
            response.end(err);
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.end(fileData);
        }
    });
}

server.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
});