import { useState, useEffect } from 'react';
import './App.css';
import TokenAllowance from './components/TokenAllowance';

function App() {
  const [data, setData] = useState([...Array(3).keys()])
  const [loading, setLoading] = useState(false)
  

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
