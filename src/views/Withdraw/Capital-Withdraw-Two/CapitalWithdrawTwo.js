import './CapitalWithdrawTwo.css';
import Sidebar from '../../../components/Sidebar';
import bitcoin from '../../../assets/bitcoin.png'
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const CapitalWithdrawTwo = () => {

  const [percentage, setPercentage] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [amount, setAmount] = useState('');

  const history = useHistory();

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'Application/JSON' }
  }

  useEffect(() => {
    fetch('/user/capital-withdraw-details', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === 'success' && res.withdrawId) {
          setPercentage(res.percentage);
          setWeeks(res.weeks);
          setAmount(res.amount);
        } else {
          history.push('/user/withdraw');
        }
      });
  });

  const handleConfirm = (e) => {
    e.preventDefault();
    fetch('/user/confirm-capital-withdraw', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === 'success') {
          history.push('/user/account-history');
        }
      });
  };

  return (
    <div className="CapitalWithdrawTwo">
      <Sidebar />
      <div className="capital_withdraw_two_container" >
        <div className="confirm_capital_withdraw">
          <p>This <strong>{percentage}%</strong> capital withdraw will take <strong>{weeks} weeks</strong> to complete.</p>
          <p>Would you like to <strong>confirm</strong> your capital withdrawal request of:</p>
          <div className="amount">
            <img src={bitcoin} alt="bitcoin"/>
            <div className="bitcoin_number">{amount}</div>
          </div>
          <Button formButton="Confirm Request" onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
}

export default CapitalWithdrawTwo;