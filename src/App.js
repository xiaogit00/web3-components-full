import { useState, useEffect } from 'react';
import './App.css';
import TokenAllowance from './components/TokenAllowance';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const walletAddress = '0x0b17cf48420400e1D71F8231d4a8e43B3566BB5B'
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
            <TokenAllowance tokenItem={item} />
          )
        })}
      </div>
    );
  }
  
}

export default App;
