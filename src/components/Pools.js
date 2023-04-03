import { useState, useEffect } from 'react';
import '../App.css';
import PoolTokenBalance from './PoolTokenBalance';


const Pools = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState({})
    const [tokenList, setTokenList] = useState(null)
    const apiKey = process.env.REACT_APP_APIKEY

    const poolsEndpoint = `https://api.covalenthq.com/v1/cq/covalent/app/curve/markets/`

    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

    const truncateEthAddress = (address) => {
        const match = address.match(truncateRegex);
        if (!match) return address;
        return `${match[1]}…${match[2]}`;
      };

    const toggleDisplay = (i) => {
        setDisplay({
            ...display,
            [i]: !display[i]
        })
    }

    useEffect(() => {
        setLoading(true)
        fetch(poolsEndpoint, {method: 'GET', headers: {
            "Authorization": `Basic ${btoa(apiKey + ':')}`
          }})
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                var groupedData = Object.values(
                    res.data.items.reduce((p, c) => {
                    (p[c.pool_address] = p[c.pool_address] || []).push(c)
                    return p
                }, {})
            )
                setData(groupedData)
            })
    }, [poolsEndpoint, apiKey])

    if (loading) {
        return (
            <>
                <h1 className='sectionTitle'>Pools</h1>
                <div className='sectionContainer'>
                    <div className='loading'>Loading liquidity pools...</div>
                </div>
            </>
            
        )
    } else if (!loading && data) {
        return (
            <>
            {console.log("data",data)}
                <h1 className='sectionTitle'>Pools</h1>
                <div className='rowHeaders'>  
                    <div className='rowHeaderPool'>Pools</div>
                    <div className='rowHeaderPoolType'> Type</div>
                    <div className='rowHeaderAPY'> APY</div>
                    <div className='rowHeaderTVL'>TVL</div>
                </div>
                <div className='poolSectionContainer'>
                    {data.map((item, i) => {
                        return (
                        <>
                            <div className='rowPool clickable' key={item} onClick={() => toggleDisplay(i)}>
                                <div className='left'>
                                    <div className='logoContainer'>
                                        <img className='poolTokenLogo' src='https://res.cloudinary.com/dl4murstw/image/upload/v1678790049/spaces_-MFA0rQI3SzfbVFgp3Ic_uploads_F5ZS9RzAWKZnNxm9F85H_Curve-Logo-HighRez_zzlvug.webp' alt='tokenlogo'/>
                                    </div>
                                    <div className='pool-left-info-container'>
                                        <div className='poolTokenName'>{item.map(token => token.contract_ticker_symbol).join(' / ')}</div>
                                        <a href={'https://etherscan.io/address/' + item[0].pool_address} target='_blank' rel='noreferrer'><div className='poolAddress'>
                                            <div><img className='scroll' src='https://res.cloudinary.com/dl4murstw/image/upload/v1668495918/scroll_bkmays.png' alt='scroll' width='12px' /></div>
                                            <div className='poolAddressText'> {truncateEthAddress(item[0].pool_address)}</div>
                                        </div>
                                        </a>
                                    </div>
                                </div>

                                <div className='poolType'>{cleanPoolType(item[0].pool_type)}</div>
        
                                <div className='apy'>{item[0].supply_apy.toFixed(5) + '%'}</div>
                                
                                <div className='tvl'>${(item[0].tvl_quote / 1000000).toFixed(1)}M</div>
                            </div>
                            {display[i] ? <PoolTokenBalance items={item}/>: null}
                        </>
                        
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Pools

const cleanPoolType = (poolType) => {
    switch (poolType) {
        case 'base_pool <> plain_pool':
            return 'Plain Pool'
        case 'meta_pool': 
            return 'Meta Pool'
        case 'crypto_pool':
            return 'Crypto Pool'
        case 'base_pool <> lending_pool':
            return 'Lending Pool'
        default: 
            return poolType
    }
}