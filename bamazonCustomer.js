var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "judyred5",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();

});

function start() {
  inquirer
    .prompt({
      name: "shop",
      type: "list",
      message: "Would you like to [view products] or [create a order]?",
      choices: ["view", "order", "EXIT"]
    })
    .then(function(answer) {
     
      if (answer.shop === "view") {
        showProducts();
      }
      else if(answer.shop === "order") {
        shopProducts();
      } else{
        connection.end();
      }
    });
}

function showProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++){
    console.log("ID " + res[i].item_id + "| " + res[i].product_name + "| " + "Price: $" + res[i].price + "| " + "In Stock: " + res[i].stock_quantity);
  }
  console.log("---------------------------------------------------");
  shopProducts();
  });
}


function shopProducts() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to buy

      inquirer
        .prompt([
          {
            name: "choice",
            type: "input",
            message: "Please give the ID of product you would like to buy"
          },
          {
            name: "amount",
            type: "input",
            message: "How much would you like to buy?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          var customerTotal = 0;
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_id === answer.choice) {
              customerTotal + res[i].price;
            }
          };
  
          // determine if bid was high enough
          if (chosenItem.stock_quantity > parseInt(answer.amount)) {
            // bid was high enough, so update db, let the user know, and start over
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: stock_quantity - answer.amount
                },
                {
                  id: chosenItem.item_id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Order placed!");
                start();
              }
            );
          }
          else {
  
            console.log("Stock is low. Please decrease amount.");
           shopProducts();
          }
        });
    });
  }





