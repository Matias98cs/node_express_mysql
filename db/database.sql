CREATE DATABASE IF NOT EXISTS companydb;
-- USE companydb 
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE employee;
INSERT INTO employee
VALUES (1, 'Matias', 100),
    (2, 'Juan', 200),
    (3, 'Luis', 300),
    (4, 'Valentina', 400);