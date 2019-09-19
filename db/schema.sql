### Schema

CREATE DATABASE eleven_db;
USE eleven_db;

CREATE TABLE item
(
	id int NOT NULL AUTO_INCREMENT,
	"title" varchar(255) NOT NULL,
	"description" varchar(500),
	"price" decimal(10),
	PRIMARY KEY (id)
);
