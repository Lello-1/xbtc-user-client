import './CapitalWithdrawTwo.css';
import Sidebar from '../../../components/Sidebar';
import bitcoin from '../../../assets/bitcoin.png'
import Button from '../../../components/Button';

const CapitalWithdrawTwo = () => {
  return (
    <div className="CapitalWithdrawTwo">
      <Sidebar />
      <div className="capital_withdraw_two_container" >
        <div className="confirm_capital_withdraw">
          <p>This <strong>100%</strong> capital withdraw will take <strong>5 weeks</strong> to complete.</p>
          <p>Would you like to <strong>confirm</strong> your capital withdrawal request of:</p>
          <div className="amount">
            <img src={bitcoin} alt="bitcoin"/>
            <div className="bitcoin_number">1.93847058</div>
          </div>
          <Button formButton="Confirm Request" />
        </div>
      </div>
    </div>
  );
}

export default CapitalWithdrawTwo;