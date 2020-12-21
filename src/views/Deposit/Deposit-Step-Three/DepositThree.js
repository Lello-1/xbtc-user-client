import './DepositThree.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';

const DepositThree = () => {
  
  return (
    <div className="DepositThree">
      <Sidebar />
      <div className="deposit_three_container">
        <div className="transaction_id_bar">
          <h3>Enter Transaction ID</h3>
          <input className="transaction_id" type="text" placeholder="Transaction ID" />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default DepositThree;