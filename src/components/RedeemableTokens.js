import { useState, useEffect } from 'react';
import '../App.css';

const RedeemableTokens = ({ address, poolAddress }) => {
    const [tokenData, setTokenData] = useState(null)
    const [loading, setLoading] = useState(false)
    const apiKey = process.env.REACT_APP_APIKEY

    const redeemableTokenBalanceEndpoint = `https://api.covalenthq.com/v1/cq/covalent/app/curve/tokens/?key=${apiKey}&pool-address=${poolAddress}&address=${address}`

    useEffect(() => {
        setLoading(true)
        fetch(redeemableTokenBalanceEndpoint, {method: 'GET', headers: {
            "Authorization": `Basic ${btoa(apiKey + ':')}`
          }})
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setTokenData(res.data.items)
            })
    }, [redeemableTokenBalanceEndpoint])

    if (loading) {
       return (
        <div className='loading'>Loading redeemable tokens...</div>
       )
    } else if (!loading  && tokenData) {
        return (
            <>  
                <div className='rowHeadersRedeem'>  
                    <div className='rowHeaderPool'>Tokens</div>
                    <div className='rowHeaderAPY'> Redeemable Value (USD)</div>
                </div>
                <div className='redeemTokenContainer'>
                    {tokenData.map(token => {
                        return (

                            <div className='redeemTokenRow'>
                                <div className='redeem-left'> 
                                    <div className='poolTokenName'>token0</div>
                                    <div className='poolTokenBalance'>000 USDC</div>
                                </div>
                                <div className='redeem-right tvl'> $00 </div>
                            </div>
                            
                        )
                    })}
                </div>
            </>
        )
    }
}

export default RedeemableTokens