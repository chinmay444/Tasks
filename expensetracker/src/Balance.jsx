import React from 'react';

function Balance({ balance, income, expenses }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Balance</h2>
      <div className="mb-2">
        <span className="font-medium">Total Balance:</span> ${balance.toFixed(2)}
      </div>
      <div className="mb-2">
        <span className="font-medium text-green-500">Income:</span> ${income.toFixed(2)}
      </div>
      <div className="mb-2">
        <span className="font-medium text-red-500">Expenses:</span> ${Math.abs(expenses).toFixed(2)}
      </div>
    </div>
  );
}

export default Balance;
