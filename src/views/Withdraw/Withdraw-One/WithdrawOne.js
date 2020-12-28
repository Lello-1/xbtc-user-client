import './WithdrawOne.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import bitcoin from '../../../assets/bitcoin.png'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const WithdrawOne = () => {

  // State variables
  const [profitInput, setProfitInput] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);
  const [capitalAmount, setCapitalAmount] = useState('');
  const [profitWalletAddress, setProfitWalletAddress] = useState('');
  const [profitPassword, setProfitPassword] = useState('');
  const [warningClass, setWarningClass] = useState(false);
  const [warning, setWarning] = useState('');
  const history = useHistory();

  // Request options
  const optionsOne = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const optionsProfit = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ profitInput, profitWalletAddress, profitPassword }),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  // Component useEffect lifecycle method
  useEffect(() => {
    fetch('/user/user-amounts', optionsOne)
      .then((res) => res.json())
      .then((res) => {
        setProfitAmount(res.profit);
      });
  }, []);

  // Handle profit withdraw request
  const handleProfitWithdraw = (e) => {
    e.preventDefault();

    fetch('/user/profit-withdraw', optionsProfit)
      .then((res) => res.json())
      .then((res) => {
        if(res.result === 'success') {
          setProfitInput('');
          setProfitWalletAddress('');
          setProfitPassword('');
          history.push('/user/profit-withdraw-two');
        } else {
          // console.log(res.error);
          setWarning(res.error);
        }
      });
  };

  const profitInputChange = (e) => {
    setProfitInput(e.target.value);

    // Check if the profit input is greater than the profitAmount
    if(Number(profitAmount).toFixed(8) < Number(e.target.value).toFixed(8)) {
      setWarning('You have chosen more than your total profit!');
      setWarningClass(true);
      e.target.value = Number(profitAmount).toFixed(8);
      setProfitInput(Number(profitAmount).toFixed(8));
    } else {
      setWarningClass(false);
    }
  };

  const walletAddressChange = (e) => {
    setProfitWalletAddress(e.target.value);
  };

  const profitPasswordChange = (e) => {
    setProfitPassword(e.target.value);
  };

  return (
    <div className="WithdrawOne">
      <Sidebar />
      <div className="withdraw_one_container">
        <form className="profit_withdraw_bar" onSubmit={handleProfitWithdraw}>
          <h3>Profit Withdraw</h3>
          <div className="align">
            <p>Your profit:</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>{parseInt(profitAmount).toFixed(8)}</p>
          </div>
          {warningClass
          ? <p className="profit_warning">{warning}</p>
          : null}
          <input
            type="number"
            placeholder="Enter exact amount in Bitcoin"
            onChange={profitInputChange}
            step="0.00000001"
          />
          <input
            type="text"
            placeholder="Wallet Address"
            onChange={walletAddressChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={profitPasswordChange}
          />
          <Button />
        </form>

        <div className="capital_withdraw_bar">
          <h3>Capital Withdraw</h3>
          <div className="align">
            <p>Capital Selected:</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>1.93847058</p>
          </div>
          <input
            id="slider"
            type="range"
            min="0"
            max="100"
            step="25"
          />
          <input
            type="number"
            placeholder="Enter exact amount in Bitcoin"
            step="0.00000001"
          />
          <input
            type="text"
            placeholder="Wallet Address"
          />
          <input
            type="password"
            placeholder="Enter Password"
          />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default WithdrawOne;