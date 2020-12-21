import './AccHistoryBar.css';
import AccountItem from '../Account-Item';

const AccHistoryBar = ({ accountHistory, accHistoryData, transaction }) => {

  return (
    <div className="AccHistoryBar">
      {accountHistory ?
      <table>
        <thead>
          <tr className="table_head">
            <th>Date</th>
            <th>Week</th>
            <th>Profit</th>
            <th>Growth</th>
            <th>Reinvest</th>
            <th>Withdraw</th>
          </tr>
        </thead>
        {accHistoryData
        ? accHistoryData.map((item) => {
          return <AccountItem item={item} accountHistory={accountHistory} key={item.unique_key} />
        })
        : null}
      </table> :

      <table>
        <thead>
          <tr className="table_head deposit_withdraw">
            <th>Date</th>
            <th><span id="green">Deposit</span> / <span id="red">Withdraw</span></th>
          </tr>
        </thead>
        {transaction.map((item) => {
          return <AccountItem item={item} accountHistory={accountHistory} key={item.unique_key} />
        })}
      </table>}
    </div>
  );
}

export default AccHistoryBar;