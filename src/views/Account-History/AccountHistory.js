import './AccountHistory.css';
import Sidebar from '../../components/Sidebar';
import HistoryBar from './Acc-History-Bar';
import { useEffect } from 'react';

const AccountHistory = () => {

  useEffect(() => {

  }, []);
  
  return (
    <div className="AccountHistory">
      <div className="acc_history_grid">
        <Sidebar />
        <div className="acc_history_container">
          <div className="acc_history_bar">
            <HistoryBar accountHistory={true} />
          </div>
          <div className="transaction_bar">
            <HistoryBar accountHistory={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountHistory;