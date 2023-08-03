import './DepositTwo.css';
import Sidebar from '../../../components/Sidebar';
import Button from '../../../components/Button';
import useCopyToClipboard from '../../../utils/useCopyToClipboard';
import ClipboardIcon from 'react-clipboard-icon';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const DepositTwo = () => {

  let history = useHistory();
  const [isCopied, handleCopy] = useCopyToClipboard();
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  const depositIdOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/JSON'
    }
  }

  useEffect(() => {
    fetch('/user/deposit-step-two', options)
      .then((res) => res.json())
      .then((res) => {
        if(res.amount && res.wallet_address) {
          setAmount(res.amount);
          setWalletAddress(res.wallet_address);
        } else {
          history.push('/user/deposit');
        }
      });
  }, []);

  const handleClick = (e) => {
    fetch('/user/change-deposit-id', depositIdOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        history.push('/user/deposit-three');
      });
  };

  return (
    <div className="DepositTwo">
      <Sidebar />
      <div className="deposit-two-container">
        <div className="deposit-two-bar">
          <p className="instructions">
            Scan the QR Code below or copy the address below into your bitcoin wallet and send, then click confirm.
          </p>
          <div className="bitcoin_address">
            <p>{walletAddress}</p>
            <button onClick={() => handleCopy()}><ClipboardIcon /></button>
          </div>
          <img
            src={`http://api.qrserver.com/v1/create-qr-code/?data=${walletAddress}&data=${amount}&size=150x150`}
            alt="qr code"
          />
          <div className="button_container">
            <Button formButton="Confirm" onClick={handleClick} />
            <Button href="/user/deposit" ghostButton="ghost" ghostButtonContent="Go Back" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositTwo;