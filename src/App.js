import { useState, useEffect } from 'react';
import './App.css';
import TokenAllocation from './components/TokenAllocation';
import ChainSelector from './components/ChainSelector';
import WalletSummary from './components/WalletSummary';

function App() {
  const [chains, setChains] = useState()
  const [selectedChainId, setSelectedChainId] = useState(1)

  const walletAddress = '0x0b17cf48420400e1D71F8231d4a8e43B3566BB5B'
  const walletActivityEndpoint = `https://api.covalenthq.com/v1/labs/activity/${walletAddress}/`
  const apiKey = process.env.REACT_APP_APIKEY

  const handleChainSelect = (chainId) => {
    setSelectedChainId(chainId)
  }

  useEffect(() => {
    fetch(walletActivityEndpoint, {method: 'GET', headers: {
      "Authorization": `Basic ${btoa(apiKey + ':')}`
    }})
      .then(res => res.json())
      .then(res => {
        const excludeTestnet = res.data.items.filter(item => item.is_testnet === false)
        setChains(excludeTestnet)
      })
  }, [walletActivityEndpoint, apiKey])

  

  if (chains) {
    return (
      <>
        <div className='container'>
          <WalletSummary />
          <ChainSelector chains={chains} handleChainSelect={handleChainSelect}/>
          <TokenAllocation selectedChainId={selectedChainId} walletAddress={walletAddress}/>
        </div>
      </>
    );
  }
}

export default App;
