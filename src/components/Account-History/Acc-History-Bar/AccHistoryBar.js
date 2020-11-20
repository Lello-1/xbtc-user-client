import './AccHistoryBar.css';
import AccountItem from '../Account-Item';
import accHistoryData from '../../../Mock-data/accHistoryData';
import depWithData from '../../../Mock-data/depWithData';

const AccHistoryBar = ({ accountHistory }) => {

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
        {accHistoryData.map((item) => {
          return <AccountItem item={item} accountHistory={accountHistory} key={item.week} />
        })}
      </table> :

      <table>
        <thead>
          <tr className="table_head deposit_withdraw">
            <th>Date</th>
            <th><span id="green">Deposit</span> / <span id="red">Withdraw</span></th>
          </tr>
        </thead>
        {depWithData.map((item) => {
          return <AccountItem item={item} accountHistory={accountHistory} key={item.id} />
        })}
      </table>}
    </div>
  );
}

export default AccHistoryBar;