-- este archivo es como referencia nada mas, no tiene nada que ver con la api, solo es para saber la sintaxis de creacion a la BD
CREATE DATABASE IF NOT EXISTS company;
use company;
CREATE TABLE IF NOT EXISTS employee(
    id int(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary int(5) DEFAULT NULL,
    primary key (id)
);
DESCRIBE employee;
INSERT INTO employee VALUES
    (1,'joe',1000),
    (2,'Henrry',2000),
    (3,'Sam',2300),
    (4,'MAx',1500);