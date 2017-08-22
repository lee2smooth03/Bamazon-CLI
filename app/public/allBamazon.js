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
        });