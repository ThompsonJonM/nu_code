-- Seed file

-- Starting from scratch so drop prev DB to create new DB 
DROP DATABASE IF EXISTS ice_creamDB;

-- Create DB
CREATE DATABASE ice_creamDB;

-- Use DB
USE ice_creamDB;

-- Table creation with rows defined
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    flavor VARCHAR(45) NULL,
    
    -- Max number of 8 digits with 2 dec places
    -- eg. 10000000.00
    -- Price of 29.99 would be DECIMAL(2,2) NULL,
    price DECIMAL(10,2) NULL,
    quantity INT NULL,
    PRIMARY KEY (id)
);

-- Values
INSERT INTO products (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100);

INSERT INTO products (flavor, price, quantity)
VALUES ("chocolate", 3.10, 120);

INSERT INTO products (flavor, price, quantity)
VALUES ("strawberry", 3.25, 75);

