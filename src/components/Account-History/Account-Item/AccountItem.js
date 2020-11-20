import React from 'react';
import './AccountItem.css';

const AccountItem = ({ item, accountHistory }) => {

  return (
    <tbody>
      {accountHistory ?
      <tr className="AccountItem table_head">
        <td>{item.date}</td>
        <td>{item.week}</td>
        <td>{item.profit}</td>
        <td>{item.growth}</td>
        <td>{item.reinvest}</td>
        <td>{item.withdraw}</td>
      </tr> :

      <tr className="AccountItem table_head">
        {item.date ? <td>{item.date}</td> : <td>Pending...</td>}
        {item.deposit ? <td id="green" className="amount">{item.amount}</td> : <td id="red" className="amount">{item.amount}</td>}
      </tr>}
    </tbody>
  );
}

export default AccountItem;