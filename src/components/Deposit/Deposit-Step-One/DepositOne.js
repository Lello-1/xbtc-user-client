import './DepositOne.css';
import Sidebar from '../../Sidebar';
import Button from '../../Button';

const DepositOne = () => {
  
  return (
    <div className="DepositOne">
      <Sidebar />
      <div className="DepositOne_grid">
        <div className="deposit_bar">
          <h3>Deposit Bitcoin</h3>
          <input type="number" placeholder="Enter exact amount in Bitcoin" />
          <Button formButton={'Next'} />
        </div>
      </div>
    </div>
  );
}

export default DepositOne;