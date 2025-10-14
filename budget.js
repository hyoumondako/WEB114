//Loren Bracciano 10/13/2025
//My mom and I live together, so the numbers are kind of odd! I pay $100 rent, buy groceries/cook dinner every night, and pay half of our car payments. 
//We get along really well, and thank goodness because it's a very cushy deal. :)

let income = 2600;
let rent = 100;
let groceries = 600;
let utilities = 150;

console.log( "The total income was: " +   income.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The rent amount was: " +  rent.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The grocery total was: " +  groceries.toLocaleString("en-US", { style: "currency", currency:"USD" }));

let totalExpenses = rent + groceries + utilities;
//console.log("Total monthly expenses are $" + totalExpenses + ".");
let remainingMoney = income - totalExpenses;
//console.log("Remaining monthly is $" + remainingMoney + ".");

let rentPercentage = Math.max((rent / income) * 100, 0);
console.log("The percent spent on rent is: " + (rentPercentage) + "%");
let groceriesPercentage = Math.max((groceries / income) * 100, 0);
console.log("The percent spent on groceries is: " + groceriesPercentage + "%");
