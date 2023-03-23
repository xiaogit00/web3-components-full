import { useState, useEffect } from 'react';
import '../App.css';
import RedeemableTokens from './RedeemableTokens';

const Tokens = () => {
    const [data, setData] = useState(null)
    const [display, setDisplay] = useState({})
    const [loading, setLoading] = useState(false)

    const apiKey = process.env.REACT_APP_APIKEY
    const walletAddress = '0xc0152cd4c429b7273db278a0355f0dfc9edbe840'
    //high balance wallet: 0x4486083589a063ddef47ee2e4467b5236c508fde
    //wide range of balance wallet: 0x2702811b54ad6F58BAdBEb17007a1303a21Af45F

    const lpTokenBalancesEndpoint = `https://api.covalenthq.com/v1/cq/covalent/app/curve/balances/?address=${walletAddress}`

    const toggleDisplay = (i) => {
        setDisplay({
            ...display,
            [i]: !display[i]
        })
    }

    useEffect(() => {
        setLoading(true)
        fetch(lpTokenBalancesEndpoint, {method: 'GET', headers: {
          "Authorization": `Basic ${btoa(apiKey + ':')}`
        }})
          .then(res => res.json())
          .then(res => {
            setData(res.data.items)
            setLoading(false)
          })
      }, [lpTokenBalancesEndpoint, apiKey])

    if (loading) {
        return (
            <div className='loading'>Loading LP tokens...</div>
        )
    } else if (!loading && data) {
        return (
            <>
                <h1 className='sectionTitle'>LP Tokens</h1>
                <div className='sectionContainer'>
                    {data.map((item, i) => {
                        return (
                        <>
                            <div className='row clickable' key={item} onClick={() => toggleDisplay(i)}>
                                <div className='left'>
                                <div className='logoContainer'>
                                    <img className='tokenLogo' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/>
                                </div>
                                <div className='left-info-container'>
                                    <div className='tokenName'>{item.contract_name}</div>
                                    <div className='tokenBalance'>{(Number(item.balance) / (10**item.contract_decimals)).toFixed(6)} {item.contract_ticker_symbol}</div>
                                </div>
                                </div>
        
                                <div className='right'>
                                <div className='tokenValue'>${item.quote.toFixed(3)}</div>
                                <div className='percentageChange'>(+{item.rewards_quote.toFixed(4)})</div>
                                </div>
                            </div>
                            {display[i] ? <RedeemableTokens address={item.address} poolAddress={item.pool_address}/>: null}
                        </>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Tokens