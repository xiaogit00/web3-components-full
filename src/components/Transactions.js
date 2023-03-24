import { useState, useEffect } from 'react';
import '../App.css';

const Transactions = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const apiKey = process.env.REACT_APP_APIKEY
    const walletAddress = '0xc0152cd4c429b7273db278a0355f0dfc9edbe840'
    const lpTransactionsEndpoint = `https://api.covalenthq.com/v1/cq/covalent/app/curve/transactions/?address=${walletAddress}`

    useEffect(() => {
        setLoading(true)
        fetch(lpTransactionsEndpoint, {method: 'GET', headers: {
          "Authorization": `Basic ${btoa(apiKey + ':')}`
        }})
          .then(res => res.json())
          .then(res => {
            var groupedData = Object.values(
                    res.data.items.reduce((p, c) => {
                    (p[c.tx_hash] = p[c.tx_hash] || []).push(c)
                    return p
                }, {})
            )
            setData(groupedData)
            setLoading(false)
          })
      }, [lpTransactionsEndpoint, apiKey])

      if (loading) {
        return (
            <>
            <h1 className='sectionTitle'>Transactions</h1>
            <div className='sectionContainer'>
                <div className='loading'>Loading Curve protocol transactions...</div>
            </div>
            </>
            
        )
    } else if (!loading && data) {
        return (
            <>
                <h1 className='sectionTitle'>Transactions</h1>
                {console.log(data)}
                <div className='sectionContainer'>
                    {data.map(item => {
                        return (
                        <div className='rowTxn' key={item}>
    
                            <div className='txnContainer'>
                                <div className='action'>
                                    <div className='actionText'>{cleanAction(item[0].event_name)}</div>
                                    <div className='date'>{new Date(item[0].block_signed_at).toLocaleString('en-US', { day: 'numeric', month: 'short', year: "2-digit" })}</div>
                                    <div className='date'>{new Date(item[0].block_signed_at).toLocaleString('en-US', {timeStyle: 'short' })}</div>
                                </div>
                                <div className='tokenBundle'>
                                    <div><img className='tokenLogoTransactions' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/></div>
                                    <div className='tokeninfo'>
                                        <p className='txnText'>{-(getTokenOut(item).value/(10**getTokenOut(item).contract_decimals)).toFixed(2)}</p>
                                        <p className='txnText'>{getTokenOut(item).contract_ticker_symbol}</p>
                                    </div>
                                </div>
                                <div className='arrow'><img src='https://res.cloudinary.com/dl4murstw/image/upload/v1668500894/next_e7qvca.png' alt='arrow' height="32px"/></div>
                                <div className='tokenBundle'>
                                    <div><img className='tokenLogoTransactions' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/></div>
                                    <div className='tokeninfo'>
                                        <p className='txnText'>+{(-getTokenIn(item).value/(10**getTokenIn(item).contract_decimals)).toFixed(2)}</p>
                                        <p className='txnText'>{getTokenIn(item).contract_ticker_symbol}</p>
                                    </div>
                                </div>
                                <div className='rightTxn'>
                                    <div className='gasEth'>{(Number(item[0].fees_paid)/(10**item[0].gas_token_decimals)).toFixed(4)}
                                    <img
                                        alt=""
                                        src="https://res.cloudinary.com/dl4murstw/image/upload/v1668511869/gas-station_ydpfe5.png"
                                        height="12"
                                        />
                                    </div>
                                    <div className='gasQuote'>ETH</div>
                                    <div className='gasQuote'>(${item[0].gas_quote.toFixed(2)})</div>
                                </div>
                            </div>
    
                            
                        </div>
                        )
                    })}
                </div>
            </>
        )
    }
    
}

export default Transactions

const cleanAction = (actionName) => {
    switch (actionName) {
        case 'swap':
            return 'Swap'
        case 'add_liquidity': 
            return 'Add'
        case 'remove_liquidity':
            return 'Remove'
        case 'remove_liquidity_one_coin':
            return 'Remove One'
        case 'remove_liquidity_imbalance':
            return 'Remove Imbalance'
        default: 
            return actionName
    }
}

const getTokenOut = (items) => {
    const token = items.filter(item => item.value_quote !== 0 && item.transfer_type === "token_out")[0]
    return token
}

const getTokenIn = (items) => {
    const token = items.filter(item => item.value_quote !== 0 && item.transfer_type === "token_in")[0]
    return token
}