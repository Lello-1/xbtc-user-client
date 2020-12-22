import './AccountHistory.css';
import Sidebar from '../../components/Sidebar';
import HistoryBar from './Acc-History-Bar';
import { useEffect, useState } from 'react';

const AccountHistory = () => {

  const [accountHistoryData, setAccountHistoryData] = useState([]);
  const [transaction, setTransaction] = useState([]);

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  useEffect(() => {
    fetch('/user/account-history-data', options)
      .then((res) => res.json())
      .then((res) => {
        setAccountHistoryData(res.accountHistory);
        setTransaction(res.transaction);
      });
  }, []);
  
  return (
    <div className="AccountHistory">
      <div className="acc_history_grid">
        <Sidebar />
        <div className="acc_history_container">
          <div className="acc_history_bar">
            <HistoryBar accountHistory={true} accountHistoryData={accountHistoryData} />
          </div>
          <div className="transaction_bar">
            <HistoryBar accountHistory={false} transaction={transaction} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountHistory;