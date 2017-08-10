//Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var PORT = 3000;

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'employeesdb',
    user: 'root',
    password: 'root'
});

connection.connect(function(err, res) {
    if (err) throw err;
    console.log(`${connection.threadId}`);
});

// var employees = [
//     {
//         name: 'Steve',
//         department: 'Waste Management',
//     },
//     {
//         name: 'Gary',
//         department: 'Cucumber Island'
//     },
//     {
//         name: 'Linda from HR',
//         department: 'HR'
//     }
// ]

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('/employees', function(req, res) {

    connection.query('select * from employee', function(err, data) {
        if (err) throw err;

        res.render('employees', {
            title: 'Fired Employees',
            employeeList: data

        });
    });
});

app.listen(PORT, function() {
    console.log('Listening in on port: ' + PORT);
});