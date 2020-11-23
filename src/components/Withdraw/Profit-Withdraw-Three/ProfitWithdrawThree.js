import './ProfitWithdrawThree.css';
import Sidebar from '../../Sidebar/Sidebar';
import Button from '../../Button/Button';

const ProfitWithdrawThree = () => {
  return (
    <div className="ProfitWithdrawThree">
      <Sidebar />
      <div className="profit_withdraw_three_container">
        <div className="authenticate_withdrawal">
          <h3>Authenticate Withdrawal</h3>
          <p>A code has been sent to your email, please enter code below.</p>
          <input className="enter_code" type="text" placeholder="Enter Code" />
          <div className="authenticate_buttons">
            <Button formButton="Authenticate" />
            <Button href="#" ghostButtonContent="Send Code Again" ghostButton="ghost" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfitWithdrawThree;