import './CapitalWithdrawThree.css';
import Sidebar from '../../Sidebar';
import Button from '../../Button';

const CapitalWithdrawThree = () => {
  return (
    <div className="CapitalWithdrawThree">
      <Sidebar />
        <div className="capital_withdraw_three_container">
          <div className="authenticate_withdrawal">
            <h3>Authenticate Withdrawal</h3>
            <p>A code has been sent to your email, please enter code below.</p>
            <input className="enter_code" type="text" placeholder="Enter Code" />
            <div className="authenticate_buttons">
              <Button formButton="Authenticate" />
              <Button href="#" ghostButton="ghost" ghostButtonContent="Send Code Again" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default CapitalWithdrawThree;