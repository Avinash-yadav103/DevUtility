import React, { useState } from 'react';
import '../css/atm.css';
// You may need to adjust these paths to match your project structure
import masterCardIcon from '../../assets/mastercard-icon-2048x1587-tygju446.png';
import chipImage from '../../assets/chip.png';

const AtmCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="body-atm">
        <div className="gra-circles-atm">
        <div className="c1-atm">
          Click Card
        </div>
        <div className="c2-atm">
          2
        </div>
      </div>
      
      <div className="flip-container-atm">
        <div className={`flipper-atm ${isFlipped ? 'flipped-atm' : ''}`} id="flipper">
          <div className="front-atm">
            <div id="main-card-atm">
              <div className="top-atm">
                <img src={masterCardIcon} alt="Master Card" height="50" width="auto" />
                <p>Master Card</p>
                <div className="chp-atm"><img src={chipImage} alt="Chip" height="75" /></div>
              </div>
              <div className="mid-atm">
                <div className="name-atm">
                  Card Number
                </div>
                <div className="card-no-atm">
                  8800 3350 4123 1234
                </div>
              </div>
              <div className="bottom-atm">
                <p>Avinash Yadav</p>
                <div className="valid-atm">
                  Valid Thru: <br />12/25
                </div>
              </div>
            </div>
          </div>
          <div className="back-atm">
            <div className="b1-atm">
              <p>For customer service call +977 4343 3433 or email at mastercard@gmail.com</p>
            </div>
            <div className="b2-atm">
            </div>
            <div className="b3-atm">
              <div className="white-atm">
              </div>
              <div className="cvv-atm">
                <p>123</p>
              </div>
            </div>
            <div className="b4-atm">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, rem vitae illum pariatur eos repellendus placeat quas eius! Atque ipsa consectetur itaque modi distinctio eum quidem fugit facilis incidunt nobis!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={handleFlip} className='button-atm'>.</button>
      </div>
    </>
  );
};

export default AtmCard;