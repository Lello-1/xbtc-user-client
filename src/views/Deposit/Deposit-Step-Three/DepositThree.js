import './DepositThree.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const DepositThree = () => {

  let history = useHistory();
  const [txId, setTxId] = useState('');

  const txIdOptions = {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ txId }),
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  useEffect(() => {
    fetch('/user/deposit-step-three', options)
      .then((res) => res.json())
      .then((res) => {
        if(!res.result) {
          history.push('/user/deposit');
        }
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/user/txid', txIdOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        history.push('/user/account-history');
      });
  };
  
  const handleChange = (e) => {
    setTxId(e.target.value);
  };

  return (
    <div className="DepositThree">
      <Sidebar />
      <div className="deposit_three_container">
        <form className="transaction_id_bar" onSubmit={handleSubmit} >
          <h3>Enter Transaction ID</h3>
          <input
            className="transaction_id"
            type="text"
            placeholder="Transaction ID"
            onChange={handleChange}
          />
          <Button />
        </form>
      </div>
    </div>
  );
}

export default DepositThree;