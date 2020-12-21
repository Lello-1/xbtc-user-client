import './WithdrawOne.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import bitcoin from '../../../assets/bitcoin.png'

const WithdrawOne = () => {
  return (
    <div className="WithdrawOne">
      <Sidebar />
      <div className="withdraw_one_container">
        <div className="profit_withdraw_bar">
          <h3>Profit Withdraw</h3>
          <div className="align">
            <p>Your profit:</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>0.25487052</p>
          </div>
          <input type="number" placeholder="Enter exact amount in Bitcoin" />
          <input type="text" placeholder="Wallet Address" />
          <input type="password" placeholder="Enter Password" />
          <Button />
        </div>

        <div className="capital_withdraw_bar">
          <h3>Capital Withdraw</h3>
          <div className="align">
            <p>Capital Selected:</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>1.93847058</p>
          </div>
          <input id="slider" type="range" min="0" max="100" step="25" />
          <input type="number" placeholder="Enter exact amount in Bitcoin" />
          <input type="text" placeholder="Wallet Address" />
          <input type="password" placeholder="Enter Password" />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default WithdrawOne;