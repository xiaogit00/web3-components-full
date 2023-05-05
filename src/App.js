import { useState, useEffect } from 'react';
import './App.css';
import TokenAllowance from './components/TokenAllowance';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const walletAddress = '0xC6dAc003a497A6fC1D948a07913029AAA73E87D7'
  const approvalsEndpoint = `https://api.covalenthq.com/v1/1/approvals/${walletAddress}/`
  const apiKey = process.env.REACT_APP_APIKEY

  useEffect(() => {
    setLoading(true)
    fetch(approvalsEndpoint, {method: 'GET', headers: {
      "Authorization": `Basic ${btoa(apiKey + ':')}`
    }})
      .then(res => res.json())
      .then(res => {
        console.log(res.data.items)
        setData(res.data.items)
        setLoading(false)
      })
  }, [approvalsEndpoint, apiKey])

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return (
      <div className='outerContainer'>
        <div className='title'>Token Approvals</div>
        {data.map(item => {
          return (
            <TokenAllowance tokenItem={item} queryWalletAddress={walletAddress}/>
          )
        })}
      </div>
    );
  }
  
}

export default App;
