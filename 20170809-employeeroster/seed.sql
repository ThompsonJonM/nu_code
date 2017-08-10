drop database if exists employeesdb;

create database employeesdb;

use employeesdb;

create table employee(
    id int auto_increment,
    name varchar(255) not null,
    department varchar(255) not null,
    primary key (id)
);

insert into employee (name, department) values ('Steve', 'Waste Management');
insert into employee (name, department) values ('Gary', 'Cucumber Island');
insert into employee (name, department) values ('Linda from HR', 'HR');