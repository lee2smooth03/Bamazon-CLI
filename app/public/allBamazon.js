/**
 * This file serves as a launch pad for the bamazon site
 * Each user is given three ways to experience the site:
 */

var ask = require('inquirer');

ask.prompt([
    {
        name: "mode",
        type: "list",
        message: "\nHello and welcome to Bamazon!\nHow will you explore our site today?",
        choices: ["Customer", "Store Manager", "Store Supervisor"]
    
    }]).then(function(ans)
        {
            /* switch the answer above */
            console.log(ans);
            var mode = ans.mode;

            switch(mode)
            {
                case "Customer":
                    console.log("you are in customer mode")
                    /** require (call) the customer fxn */
                    require("./bamazonCustomer")()
                    break;

                case "Store Manager":
                    console.log("you are in managerial mode")
                    require("./bamazonManager")()
                    break;
                
                case "Store Supervisor":
                    console.log("you are in store supervisor")
                    break;
                
                default:
                    console.log("not an option")
                    break;
            }
        });