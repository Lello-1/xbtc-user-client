import './DepositTwo.css';
import Sidebar from '../../../components/Sidebar';
import QR from '../../../assets/QR_sample.webp';
import Button from '../../../components/Button';
import useCopyToClipboard from '../../../utils/useCopyToClipboard';
import ClipboardIcon from 'react-clipboard-icon';

const DepositTwo = () => {

  const [isCopied, handleCopy] = useCopyToClipboard();

  return (
    <div className="DepositTwo">
      <Sidebar />
      <div className="deposit-two-container">
        <div className="deposit-two-bar">
          <p className="instructions">
            Scan the QR Code below or copy the address below into your bitcoin wallet and send, then click confirm.
          </p>
          <div className="bitcoin_address">
            <p>fdF23kljoJIggGEV3oijk33AAfqr32dsff</p>
            <button onClick={() => handleCopy()}><ClipboardIcon /></button>
          </div>
          <img src={QR} alt="qr code" />
          <div className="button_container">
            <Button formButton="Confirm" />
            <Button href="/user/deposit" ghostButton="ghost" ghostButtonContent="Go Back" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositTwo;