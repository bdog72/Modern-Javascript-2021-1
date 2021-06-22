// //
// //

//
//

let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 3000);
addExpense(myAccount, 250);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));

resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// let myAccount = {
//   name: 'Andrew Mead',
//   expenses: 0,
//   income: 0,
// };

// let addExpense = function (account, amount) {
//   account.expenses = account.expenses + amount;
//   // console.log(account);
// };

// let addIncome = function (account, amount) {
//   account.income = account.income + amount;
//   // console.log(account);
// };

// let resetAccount = function (account, expenses, income) {
//   account.expenses = '';
//   account.income = '';
// };

// let getAccountSummary = function (account, name, expenses, income) {
//   const expensesTotal = account.expenses;
//   const incomeTotal = account.income;
//   const accountInfo = `Account for ${account.name} has a balance of ${
//     expensesTotal - incomeTotal
//   }`;
//   console.log(accountInfo);
//   // return bozo;
// };

// addExpense(myAccount, 12);
// addIncome(myAccount, 10);
// // resetAccount(myAccount, myAccount.expenses, myAccount.income);
// getAccountSummary(
//   myAccount,
//   myAccount.name,
//   myAccount.expenses,
//   myAccount.income
// );
// console.log(myAccount);
