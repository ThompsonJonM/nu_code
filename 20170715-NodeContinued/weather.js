var weather = require("weather-js");

weather.find({search: "Anchorage, AK", degreeType: "F"}, function(err, result) {

    //writes an error in the console if an error is found
    if (err) {
        console.log(err);
    }

    //prints data if no error
    //uses stringify to print in string format
    //use JSON.stringify argument "2" to somehow make the data pretty
    console.log(JSONstringify(result, null, 2));
});