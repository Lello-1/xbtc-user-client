import './Mainbar.css';
import React from 'react';
import bitcoin from '../../assets/bitcoin.png';

const Mainbar = ({ item, userData, finalmenteData }) => {

  return (
    <div className="Mainbar">

      {item.name === 'main' ?
      <React.Fragment>
        <div className="deposit_section">
          <div className="deposit">
            <p>Deposit</p>
            <span>
              <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(userData.deposit).toFixed(8)}
            </span>
          </div>
          <div className="profit">
            <p>Profit</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {userData.profit}
            </span>
          </div>
        </div>

        <div className="balance_section">
          <div className="balance">
            <p>Balance</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(userData.balance).toFixed(8)}
            </span>
          </div>
          <div className="growth">
            <p>Growth</p>
            <span>{userData.growth}%</span>
          </div>
        </div>

        <div className="withdraw_section">
          <div className="withdraw">
            <p>Withdrawn</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(userData.withdraw).toFixed(8)}
            </span>
          </div>
          <div className="roi">
            <p>ROI</p><span>{userData.roi}%</span>
          </div>
        </div>
      </React.Fragment> :
      
      item.name === 'Finalmente Global' ?
      <React.Fragment> 
        <div className="deposit_section">
          <h3>{item.name}</h3>
          <div className="deposit">
            <p>Deposit</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(finalmenteData.deposit).toFixed(8)}
            </span>
          </div>
          <div className="investment">
            <p>Invested</p>
            <span className="package_percentage">{finalmenteData.invested}%</span>
          </div>
        </div>

        <div className="balance_section">
          <div className="balance">
            <p>Balance</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(finalmenteData.balance).toFixed(8)}
            </span>
          </div>
          <div className="growth">
            <p>Growth</p>
            <span>{finalmenteData.growth}%</span>
          </div>
        </div>

        <div className="withdraw_section">
          <div className="withdraw">
            <p>Withdrawn</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "27px" 
                height="27px"
              />
              {parseInt(finalmenteData.withdraw).toFixed(8)}
            </span>
          </div>
          <div className="roi">
            <p>ROI</p><span>{finalmenteData.roi}%</span>
          </div>
        </div>
      </React.Fragment> :
      
      <React.Fragment>
        <div className="deposit_section">
          <h3 className="greyed">{item.name}</h3>
          <div className="comingSoon">Coming Soon</div>
        </div>

        <div className="balance_section">
          <div className="comingSoon">Coming Soon</div>
        </div>

        <div className="withdraw_section">
          <div className="comingSoon">Coming Soon</div>
        </div>
      </React.Fragment>
      }

    </div>
  );
}

export default Mainbar;