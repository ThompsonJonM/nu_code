DROP DATABASE IF EXISTS pets_db;

CREATE DATABASE pets_db;

USE pets_db;

CREATE TABLE pets (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    breed VARCHAR(255),
    age INT,
    gender VARCHAR(255),
    mating_call VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO pets (name, breed, age, gender, mating_call) VALUES
("Doggie", "Dog", 7, "DOG", "tikitiki"),
("Doc", "Setter", 7, "Male", "Woof"),
("Checkers", "Spaniel", 2, "Male", "Aroo"),
("Sadie", "Doodle", 9, "Female", "Woof")