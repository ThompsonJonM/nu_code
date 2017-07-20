var fs = require('fs');

fs.readFile('best-things-ever.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log('something went wrong here');
    }

    //parse the data
    var bestThingsEver = data.split(',');

    bestThingsEver.forEach(function(thing) {
        console.log(thing);
    });
});