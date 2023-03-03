import { useState, useEffect } from 'react';
import './App.css';
import { dummyData } from './utils';

function App() {
  const [data, setData] = useState(dummyData)

  return (
    <div className='container'>
      {data.map(item => {
        return (
          <div className='row'>

            <div className='left'>
              <div className='logoContainer'>
                <img className='tokenLogo' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/>
              </div>
              <div className='left-info-container'>
                <div className='tokenName'>Token</div>
                <div className='tokenBalance'>0.00</div>
              </div>
            </div>

            <div className='right'>
              <div className='tokenValue'>$0</div>
              <div className='percentageChange'>0%</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
