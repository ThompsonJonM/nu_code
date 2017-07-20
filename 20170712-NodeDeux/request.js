var request = require('request');

//TODO grab the request package
// @link https://www.nomis.com/package/request

//run the request function
//the request function takes in a URL then returns three arguments
// 1. it provides an error if one exists
// 2. it provides a response
// 3. it provides the body of the site

request("https://en.wikipedia.org/wiki/Kudos_(granola_bar)", function(error, response, body) {

    //if the request was successful and no errors present...
    if (!error && response.statusCode === 200) {

        //then log the body from the site
        console.log(body);
    }

});