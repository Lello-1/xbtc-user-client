import Sidebar from '../../Sidebar/Sidebar';
import './ProfitWithdrawTwo.css';
import bitcoin from '../../../assets/bitcoin.png'
import Button from '../../Button';

const ProfitWithdrawTwo = () => {
  return (
    <div className="ProfitWithdrawTwo">
      <Sidebar />
      <div className="profit_withdraw_two_container">
        <div className="confirm_profit_withdraw">
          <p>Would you like to <strong>confirm</strong> your profit withdraw of:</p>
          <div className="profit_amount">
            <img src={bitcoin} alt="bitcoin"/>
            <div className="profit_bitcoin">0.05266895</div>
          </div>
          <Button formButton="Confirm" />
        </div>
      </div>
    </div>
  );
}

export default ProfitWithdrawTwo;