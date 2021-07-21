CREATE DATABASE prueba CHARACTER SET utf8;


USE prueba;

CREATE TABLE items(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(255) NOT NULL,
    categoria varchar(255) NOT NULL,
    stock int unsigned NOT NULL
    );


INSERT INTO items(nombre,categoria,stock) 
    values 
        ("Fideos","harina",20),
        ("Leche","Lacteos",30),
        ("Crema","Lacteos",15);

SELECT * from items;

DELETE FROM items where id = 1;

UPDATE items SET stock = 45 where id = 2;

SELECT * from items;
