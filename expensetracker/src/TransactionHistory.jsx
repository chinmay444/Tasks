import React from 'react';

function TransactionHistory({ transactions, removeTransaction }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <ul className="list-disc list-inside">
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>{transaction.description}: ${transaction.amount.toFixed(2)}</span>
            <button 
              onClick={() => removeTransaction(index)} 
              className="ml-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
