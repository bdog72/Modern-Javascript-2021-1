//
//

let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

addExpense(myAccount, 2.5);
console.log(myAccount);
// console.log(result);
