import { useState, useEffect } from 'react';
import './App.css';
import TokenAllocation from './components/TokenAllocation';
import ChainSelector from './components/ChainSelector';

function App() {
  const [chains, setChains] = useState([...Array(5).keys()])

  if (chains) {
    return (
      <>
        <div className='container'>
          <div className='title'>Dashboard</div>
          <ChainSelector chains={chains} />
          <TokenAllocation />
        </div>
      </>
    );
  }
}

export default App;
