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
                head: ['Item Identification', 'Department', 'Retail Product', 'Retail Price', 'In Stock']
            });

            for (var i = 0; i < result.length; ++i){

                var productID = result[i].item_id;
                var productDP = result[i].department_name;
                var productNM = result[i].product_name;
                var productPC = result[i].price;
                var QTY       = result[i].stock_qty;

                // console.log("ID: " + result[i].item_id + " Product: " + result[i].product_name + " Price: " + result[i].price)

                if (i < 9){
                    table.push(["0" + productID, productDP, productNM, "$" + productPC.toFixed(2), QTY]);
                }else{
                    table.push([productID, productDP, productNM, "$" + productPC.toFixed(2), QTY]);
                }
            }
        
            console.log(table.toString());
        });
    }

    function ask(){
        inquirer.prompt([
            {
                name: "menu",
                type: "list",
                message: "What do you need to take care of?",
                choices: ["View Products", "Low Inventory", "Add Inventory", "New Product"]

            }]).then(function(ans)
                {
                    console.log(" ");
                    console.log(ans);
                    // printITEMS();
                    
                    var sTrm = ans.menu;

                    switch(sTrm)
                    {
                        case "View Products":
                            /** this is a select all statement */
                            printITEMS()
                            break;
                        
                        case "Low Inventory":
                            /** select all where products < 5 */
                            connection.query("SELECT * FROM products WHERE stock_qty < 5", function (err, result) {

                            var table = new npmTable({
                                head: ['Item Identification', 'Department', 'Retail Product', 'Retail Price', 'In Stock']
                            });

                            for (var i = 0; i < result.length; ++i){

                                var productID = result[i].item_id;
                                var productDP = result[i].department_name;
                                var productNM = result[i].product_name;
                                var productPC = result[i].price;
                                var QTY       = result[i].stock_qty;

                                // console.log("ID: " + result[i].item_id + " Product: " + result[i].product_name + " Price: " + result[i].price)

                                if (i < 9){
                                    table.push(["0" + productID, productDP, productNM, "$" + productPC.toFixed(2), QTY]);
                                }else{
                                    table.push([productID, productDP, productNM, "$" + productPC.toFixed(2), QTY]);
                                }
                            }
                        
                                console.log(table.toString());
                            });
                            break;

                        case "Add Inventory":
                            /** make a update where inventory */
                            break;

                        case "New Product":
                            /** insert into database */
                            break;
                    }
            });

    }

    function welcome()
    {
        printITEMS();
        setTimeout( function(){
            console.log("The store:");
            ask();
        }, 1275);
    }

    welcome();
}