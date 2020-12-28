import Sidebar from '../../../components/Sidebar/Sidebar';
import './ProfitWithdrawTwo.css';
import bitcoin from '../../../assets/bitcoin.png'
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProfitWithdrawTwo = () => {

  const [withdrawAmount, setWithdrawAmount] = useState('');
  const history = useHistory();

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const clickOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  useEffect(() => {
    fetch('/user/profit-withdraw-step-two', options)
      .then((res) => res.json())
      .then((res) => {
        if(res.result === 'success') {
          setWithdrawAmount(res.amount);
        } else {
          history.push('/user/withdraw');
        }
      });
  });

  const handleClick = (e) => {
    e.preventDefault();
    fetch('/user/confirm-profit-withdraw', clickOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if(res.result === 'success') {
          history.push('/user/account-history');
        }
      });
  };

  return (
    <div className="ProfitWithdrawTwo">
      <Sidebar />
      <div className="profit_withdraw_two_container">
        <form className="confirm_profit_withdraw">
          <p>Would you like to <strong>confirm</strong> your profit withdraw of:</p>
          <div className="profit_amount">
            <img src={bitcoin} alt="bitcoin" />
            <div className="profit_bitcoin">{withdrawAmount}</div>
          </div>
          <Button formButton="Confirm" onClick={handleClick}/>
        </form>
      </div>
    </div>
  );
}

export default ProfitWithdrawTwo;