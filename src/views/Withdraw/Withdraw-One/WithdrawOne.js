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
  const [capitalAmount, setCapitalAmount] = useState(0);
  const [capitalVar, setCapitalVar] = useState(0);
  const [sliderValue, setSliderValue] = useState('100');
  const [capitalWalletAddress, setCapitalWalletAddress] = useState('');
  const [capitalPassword, setCapitalPassword] = useState('');
  const [profitWalletAddress, setProfitWalletAddress] = useState('');
  const [profitPassword, setProfitPassword] = useState('');
  const [warningClass, setWarningClass] = useState(false);
  const [capitalWarningClass, setCapitalWarningClass] = useState(false);
  const [capitalWarning, setCapitalWarning] = useState('');
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
        setCapitalVar(res.capital);
        setCapitalAmount(res.capital);
      });
  }, []);

  //====================================================================
  //========================= PROFIT WITHDRAW ==========================
  //====================================================================

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
          console.log(res);
          setWarningClass(true);
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

  //====================================================================
  //========================= CAPITAL WITHDRAW =========================
  //====================================================================

  const capitalOptions = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      capitalAmount,
      capitalWalletAddress,
      capitalPassword,
      sliderValue
    }),
    headers: { 'Content-Type': 'Application/JSON' }
  }

  const handleCapitalWithdraw = (e) => {
    e.preventDefault();

    fetch('/user/capital-withdraw', capitalOptions)
      .then((res) => res.json())
      .then((res) => {
        if(res.result === 'success') {
          setCapitalWalletAddress('');
          setCapitalPassword('');
          history.push('/user/capital-withdraw-two');
        } else {
          console.log(res);
          setCapitalWarning(res.error);
          setCapitalWarningClass(true);
        }
      });
  };

  const handleSliderChange = (e) => {
    let capAmount = (Number(e.target.value) / 100) * Number(capitalVar).toFixed(8);
    setSliderValue(e.target.value);
    setCapitalAmount(capAmount);
  };

  const capitalWalletAddressChange = (e) => {
    setCapitalWalletAddress(e.target.value);
  };

  const capitalPasswordChange = (e) => {
    setCapitalPassword(e.target.value);
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
            <p>{Number(profitAmount).toFixed(8)}</p>
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
            autoComplete="current-password"
            onChange={profitPasswordChange}
          />
          <Button formButton="Withdraw" />
        </form>

        <form className="capital_withdraw_bar" onSubmit={handleCapitalWithdraw}>
          <h3>Capital Withdraw</h3>
          <div className="align">
            <p>Capital Selected:</p>
            <img src={bitcoin} alt="bitcoin"/>
            <p>{Number(capitalAmount).toFixed(8)}</p>
          </div>
          {capitalWarningClass
          ? <p className="profit_warning">{capitalWarning}</p>
          : null}
          <div className="percentage_container">
            <div className="range_slider_percentage">{sliderValue}%</div>
          </div>
          <input
            id="slider"
            type="range"
            min="0"
            max="100"
            step="25"
            defaultValue="100"
            onChange={handleSliderChange}
          />
          {/* <input
            type="number"
            placeholder="Enter exact amount in Bitcoin"
            step="0.00000001"
          /> */}
          <input
            type="text"
            placeholder="Wallet Address"
            onChange={capitalWalletAddressChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            onChange={capitalPasswordChange}
          />
          <Button formButton="Withdraw" />
        </form>
      </div>
    </div>
  );
}

export default WithdrawOne;