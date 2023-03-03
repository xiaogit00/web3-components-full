import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([...Array(6).keys()])

  const walletAddress = '0x0b17cf48420400e1D71F8231d4a8e43B3566BB5B'
  const balancesEndpoint = `https://api.covalenthq.com/v1/eth-mainnet/address/${walletAddress}/balances_v2/`

  const apiKey = // Your API Key
  
  useEffect(() => {
    fetch(balancesEndpoint, {method: 'GET', headers: {
      "Authorization": `Basic ${btoa(apiKey + ':')}`
    }})
      .then(res => res.json())
      .then(res => setData(res.data.items))
  }, [balancesEndpoint])

  return (
    <div className='container'>
      {data.map(item => {
        return (
          <div className='row' key={item}>

            <div className='left'>
              <div className='logoContainer'>
                <img className='tokenLogo' src={item.logo_url} alt='tokenlogo'/>
              </div>
              <div className='left-info-container'>
                <div className='tokenName'>{item.contract_name}</div>
                <div className='tokenBalance'>{(item.balance/(10**item.contract_decimals)).toFixed(4)}</div>
              </div>
            </div>

            <div className='right'>
              <div className='tokenValue'>${item.quote}</div>
              <div className='percentageChange'>{(item.quote_rate-item.quote_rate_24h).toFixed(2)}%</div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
