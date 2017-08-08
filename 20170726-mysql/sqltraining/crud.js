var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "boostpunk",
    password: "uSaf2@15",
    database: "pets_db"
});

connection.connect(function(err){
    if (err) {
        throw err;
    }

    // createData();

    selectData();

    // updateData();

    deleteData();

    connection.end();
});

function deleteData() {

    // prepared delete statement
    // also prevents SQL injections
    var query = "DELETE FROM pets WHERE ?";
    connection.query(query, [
        {
            name: 'Doggie1'
        }
    ], function (err, data) {
        if (err) throw err;

        console.log("\n ---------------------------------------- ");
        console.log(data);
    });
}

function updateData() {

    // prepared statement for extra security
    // blocks SQL injections
    var query = "UPDATE pets SET ? WHERE ?";
    connection.query(query, [
        {
            name: 'Doggie Dog'
        },
        {   
            id: 5
        }
    ], function (err, data) {
        if (err) throw err;

    // below is unsecure as it is not a prepared statement
    // var query = "UPDATE pets SET name = 'Doggie Dawggg' WHERE id = 5";
    // connection.query(query, function (err, data) {
    //     if (err) throw err;
    });
}

function selectData() {
    var query = "SELECT * from pets";
    connection.query(query, function (err, data) {
        if (err) throw err;
        data.forEach(function(row) {

            // will display as "1: Doc, Setter"
            console.log(`${row.id}: ${row.name}, ${row.breed}`);

            // will display as "Hello, my ID is: 1. My name is Doc and I am a Setter"
            // console.log(`Hello, my ID is ${row.id}. My name is {row.name} and I am a {row.breed}`);
        });
    });
}

function createData() {
    var query = "INSERT INTO pets (name, breed, age, gender, mating_call) VALUES ('Doggie1', 'Dog', 7, 'DOG', 'tikitiki')" 
    connection.query (query, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
}
