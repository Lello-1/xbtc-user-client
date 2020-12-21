import './DepositOne.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const DepositOne = () => {

  const [bitcoin, setBitcoin] = useState('');
  let history  = useHistory();

  const options = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ amount: bitcoin }),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/user/deposit-one', options)
      .then((res) => res.json())
      .then((res) => {
        if(res.result === 'successfull') {
          console.log('FETCH RESULT: ', res);
          setBitcoin('');
          history.push('/user/deposit-two');
        }
      });
  };

  const handleChange = (event) => {
    setBitcoin(event.target.value);
  };
  
  return (
    <div className="DepositOne">
      <Sidebar />
      <div className="DepositOne_grid">
        <form className="deposit_bar" onSubmit={handleSubmit}>
          <h3>Deposit Bitcoin</h3>
          <input
            type="number"
            step="0.00000001"
            placeholder="Enter exact amount in Bitcoin"
            onChange={handleChange}
          />
          <Button formButton={'Next'} />
        </form>
      </div>
    </div>
  );
}

export default DepositOne;