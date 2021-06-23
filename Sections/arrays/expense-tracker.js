//
//
const account = {
  name: 'Bozo Boy',
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  income: [],
  addIncome: function (description, amount) {
    this.income.push({
      description,
      amount,
    });
  },

  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    let accountBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function (inc) {
      totalIncome = totalIncome + inc.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addExpense('Car Payment', 300);

account.addIncome('Salary', 1000);
account.addIncome('Side Project', 300);

console.log(account.getAccountSummary());
