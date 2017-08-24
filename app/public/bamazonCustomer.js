/**
 * Running this application will first display all of the items available for sale. Include the ids,
 * names, and prices of products for sale.
 */

var connection = require("../config/connection");
var inquirer   = require("inquirer");
var npmTable   = require("cli-table");

/**
 * The app should then prompt users with two messages:
 *      - The first should ask them the ID of the product they would like to buy.
 *      - The second message should ask how many units of the product they would like to buy.
 */

module.exports = function(){ 

    function printITEMS(){
        connection.query("SELECT * FROM products", function (err, result) {

            var table = new npmTable({
                head: ['Item Identification', 'Department', 'Retail Product', 'Retail Price']
            });

            for (var i = 0; i < result.length; ++i){

                var productID = result[i].item_id;
                var productDP = result[i].department_name;
                var productNM = result[i].product_name;
                var productPC = result[i].price;

                // console.log("ID: " + result[i].item_id + " Product: " + result[i].product_name + " Price: " + result[i].price)

                if (i < 9){
                    table.push(["0" + productID, productDP, productNM, "$" + productPC.toFixed(2)]);
                }else{
                    table.push([productID, productDP, productNM, "$" + productPC.toFixed(2)]);
                }
            }
        
            console.log(table.toString());
        });
    }

    function ask(){
        inquirer.prompt([
            {
                name: "search",
                type: "input",
                message: "Please enter the ID of the product you'd like to buy:"

            },
            {
                name: "number",
                type: "input",
                message: "How many would you like to buy?"

            }]).then(function(ans){

                console.log(" ");
                console.log(ans);
                // printITEMS();
                
                var sTrm = ans.search;
                var sNum = ans.number;

                /* go grab the information from the search */
                connection.query('SELECT stock_qty, price FROM products WHERE ?', {item_id: sTrm}, function(err, res){
                    if (err) throw err;

                    // console.log(res);
                    // console.log(res[0].stock_qty);

                    var inStock = res[0].stock_qty;
                    var prices  = res[0].price;
                    /* validate the purchase order */
                    if (sNum <= inStock)
                        {
                            console.log("Coming right up!");

                            setTimeout(function()
                            {
                                console.log("Your total is: $" + sNum * prices);
                                console.log("Thank you for shopping at Bamazon!\n");
                                ask();
                            }, 1250);
                        
                        connection.query('UPDATE products SET ? WHERE ?', [{stock_qty: inStock - sNum}, {item_id: sTrm}]);
                    }
                    else{
                        console.log("Sorry, we don't have the inventory to fulfull that order");
                        ask();
                    }
                });
            });

    }

    function welcome()
    {
        printITEMS();
        setTimeout( function(){
            console.log("Hi, welcome to the Bamazon store! Please review our catalogue above ^^");
            ask();
        }, 1275);
    }

    welcome();
}