var request = require("request");

request("API KEY")
function(error, response, body) {
    console.log(response.statusCode);

    if (!error && response.statusCode === 200) {
        console.log("The movie's rating is: " +JSON.parse(body).imdbRating);
    }
}