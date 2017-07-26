var request = require("request");
var weather = require("weather-js");

// constructor function
function UserSearch(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.getWeather = function() {
        weather.find({search: this.location, degreeType: "F"}, function(err, result) {
            if(err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }
    //this.printInfo = function() {
        //console.log("\nName: " + name, "\nLocation: " + location, "\nDate: " + date)
    //}
}

var userOne = new UserSearch("Jon", "Chicago");
userOne.getWeather();

var myGetWeather = userOne.getWeather;

module.exports = UserSearch;


