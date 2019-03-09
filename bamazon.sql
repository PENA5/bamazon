DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  
  product_name VARCHAR(30) NOT NULL,

  department_name VARCHAR(30) NOT NULL,

  price FLOAT(6,2) UNSIGNED,
  
  stock_quantity BIGINT(150) UNSIGNED
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('bike','vehicles', 100.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('speaker', 'electronics', 16.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('headphones', 'electronics',30.25, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('t-shirts', 'cloths', 12.15, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('levi jeans', 'cloths', 30.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('laptop', 'electronics', 150.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('pull-up bar', 'workout equipment', 20.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('dumbells', 'workout equipment', 10.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('bed sheets', 'bedding', 20.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('snapback hats', 'cloths', 20.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('boxing gloves', 'workout equipment', 12.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('pillows', 'bedding', 25.00, 10);

