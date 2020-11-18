import './Mainbar.css';
import React from 'react';
import bitcoin from '../../assets/bitcoin.png';

const Mainbar = ({ item }) => {

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
                width= "35px" 
                height="35px"
              />
              1.00000000
            </span>
          </div>
          <div className="profit">
            <p>Profit</p>
            <span>
            <img 
                className="bitcoin" 
                src={bitcoin} 
                alt="bitcoin" 
                width= "35px" 
                height="35px"
              />
              0.14200306
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
                width= "35px" 
                height="35px"
              />
              1.14200306
            </span>
          </div>
          <div className="growth">
            <p>Growth</p>
            <span>29.53%</span>
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
                width= "35px" 
                height="35px"
              />
              0.15229000
            </span>
          </div>
          <div className="roi">
            <p>ROI</p><span>15.23%</span>
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
                width= "35px" 
                height="35px"
              />
              1.00000000
            </span>
          </div>
          <div className="investment">
            <p>Invested</p>
            <span className="package_percentage">100%</span>
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
                width= "35px" 
                height="35px"
              />
              1.14200306
            </span>
          </div>
          <div className="growth">
            <p>Growth</p>
            <span>29.53%</span>
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
                width= "35px" 
                height="35px"
              />
              0.15229000
            </span>
          </div>
          <div className="roi">
            <p>ROI</p><span>15.23%</span>
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