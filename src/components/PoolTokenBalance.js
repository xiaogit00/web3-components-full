import { useState, useEffect } from 'react';
import '../App.css';

const PoolTokenBalance = ({ items }) => {
   return (
    <>  
        <div className='poolTokenBalanceHeader'>  
            <div className='rowHeaderPool'>Token Balance</div>
            <div className='rowHeaderAPY'> Value (USD)</div>
        </div>
        <div className='poolTokenContainer'>
            {items.map(token => {
                return (

                    <div className='redeemTokenRow'>
                        <div className='redeem-left'> 
                            <div className='poolTokenName'>{token.contract_name}</div>
                            <div className='poolTokenBalance'>{(token.balance / (10**token.contract_decimals)).toFixed(5)} {token.contract_ticker_symbol}</div>
                        </div>
                        <div className='redeem-right tvl'> ${(token.quote/1000000).toFixed(1) + 'M'} </div>
                    </div>
                    
                )
            })}
        </div>
    </>
   )
}

export default PoolTokenBalance