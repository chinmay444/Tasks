import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const removeTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateIncome = () => {
    return transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const calculateExpenses = () => {
    return transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 shadow-lg rounded-lg">
          <ExpenseForm addTransaction={addTransaction} />
        </div>
        <div className="card p-4 shadow-lg rounded-lg">
          <Balance balance={calculateBalance()} income={calculateIncome()} expenses={calculateExpenses()} />
        </div>
      </div>
      <div className="mt-6 card p-4 shadow-lg rounded-lg">
        <TransactionHistory transactions={transactions} removeTransaction={removeTransaction} />
      </div>
    </div>
  );
}

export default App;
