-- these two lines erase and recreate the bamazon database
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

-- we have to use the database that was just created
USE bamazon;

-- creates a table called "products" and identifies the following columns:
-- item id, product name, department name, price, stock quantity
CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    stock_qty INT(5) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    PRIMARY KEY(item_id)
);

-- insert 10 different products into the table
INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Bruhn Series", "Books", "7", "175.49");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("1984", "Books", "3", "10.82");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("65in Television", "Electronics", "6", "1225.87");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Lawn Mower", "Yard/Garden", "4", "255.13");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Headphones", "Electronics", "2", "300.21");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Jungle Book", "Books", "1", "4.95");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Spade", "Yard/Garden", "9", "7.10");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("Autobiography", "Books", "9", "15.22");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("8K Camcorder", "Electronics", "8", "189.67");

INSERT INTO products (product_name, department_name, stock_qty, price)
VALUES ("iPhone 8", "Electronics", "10", "875.23");
-- completed on 08/17/2017 @12:18
-- ran unsuccessfully @12:20 and @12:22; AUTO_INCREMENT
-- ran unsuccessfully @12:27; AUTO_INCREMENT solved, unnecessary comma 
-- ran unsuccessfully @12:30; need to identify PRIMARY KEY
-- the above code successfully creates a database with info