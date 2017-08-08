var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'boostpunk',
    password: 'uSaf2@15',
    database: 'top_songsdb'
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected as " + connection.threadId);

    getData();

    connection.end();
});

function getData() {
    connection.query("select * from top5000", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
};