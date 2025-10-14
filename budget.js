//Loren Bracciano 10/13/2025
//My mom and I live together, so the numbers are kind of odd! I pay $100 rent, buy groceries/cook dinner every night, and pay half of our car payments. We get along really well, and thank goodness because it's a very cushy deal. :)

let income = 2600;
let rent = 100;
let groceries = 600;
let utilities = 150;

let totalExpenses = rent + groceries + utilities;
console.log("Total monthly expenses are $" + totalExpenses + ".");

let remainingMoney = income - totalExpenses;
console.log("Remaining monthly is $" + remainingMoney + ".");

let rentPercentage = Math.max((rent / income) * 100, 0);
console.log(rentPercentage+ "% of income is spent on rent.");
let groceriesPercentage = Math.max((groceries / income) * 100, 0);
console.log(groceriesPercentage + "% of income is spent on groceries.");
