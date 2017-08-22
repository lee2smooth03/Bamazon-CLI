/**
 * copy and pasted from restaurant app:
 *  -- database changes
 *  -- sometimes port
 */
var mysql = require("mysql");

/* ====================================
    Add your connection information
=======================================*/
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,             // subject to change
    database: "bamazon"     // subject to change
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    // console.log("connected as id " + connection.threadId);
    // once the connection is established, bamazon should be called here
    // take comment off the console log once bamazon is required here
  });

  module.exports = connection;