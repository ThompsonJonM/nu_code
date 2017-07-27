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

    createData();

    selectData();

    // updateData();

    // deleteData();

    connection.end();
});

// function updateData() {
//     var query = "UPDATE pets SET columnname=value WHERE id = num";
//     connection.query(query, function (err, data) {
//         if (err) throw err;
//         console.log(data);
//     });
// }

function selectData() {
    var query = "SELECT * from pets";
    connection.query(query, function (err, data) {
        if (err) throw err;
        data.forEach(function(row) {
            
            // will display as "1: Doc, Setter"
            console.log(`${row.id}: ${row.name}, ${row.breed}`);
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
