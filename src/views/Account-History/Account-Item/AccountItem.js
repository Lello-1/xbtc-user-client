import React from 'react';
import './AccountItem.css';
import { formatDate } from '../../../utils/formatDate';

const AccountItem = ({ item, accountHistory }) => {

  return (
    <tbody>
      {accountHistory
      ?
      <tr className="AccountItem table_head">
        <td>{item.date}</td>
        <td>{item.week}</td>
        <td>{item.profit}</td>
        <td>{item.growth}</td>
        <td>{item.reinvest}</td>
        <td>{item.withdraw}</td>
      </tr>
      :
      item.confirmed === 'staged'
      ? <tr></tr>
      : <tr className="AccountItem table_head">
        {item.confirmed === 'confirmed' || item.confirmed === 'completed'
        ? <td>{formatDate(item.date)}</td>
        : item.confirmed === 'pending'
          ? <td>Pending...</td>
          : <td></td>}
        {item.deposit
        ? <td id="green" className="amount">{item.deposit}</td>
        : <td id="red" className="amount">{item.withdraw}</td>}
      </tr>}
    </tbody>
  );
}

export default AccountItem;