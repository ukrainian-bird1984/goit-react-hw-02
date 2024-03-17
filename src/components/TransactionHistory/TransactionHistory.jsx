import React from 'react';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <thead className={css.headerRow}>
        <tr>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.dataRow}>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
