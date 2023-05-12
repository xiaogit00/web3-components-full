import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { transformData } from '../utils';
import Tokens from './Tokens'
import Diagram from './Diagram'


const TokenAllocation = ( { walletAddress, selectedChainId} ) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [netWorth, setNetWorth] = useState()
    const balancesEndpoint = `https://api.covalenthq.com/v1/${selectedChainId}/address/${walletAddress}/balances_v2/`

    const apiKey = process.env.REACT_APP_APIKEY
    
    useEffect(() => {
        setLoading(true)
        fetch(balancesEndpoint, {method: 'GET', headers: {
        "Authorization": `Basic ${btoa(apiKey + ':')}`
        }})
        .then(res => res.json())
        .then(res => {
            const { newData, totalValue } = transformData(res.data.items)
            // console.log(cleanedData)
            setData(newData)
            setNetWorth(totalValue)
            setLoading(false)
        })
    }, [balancesEndpoint, apiKey])

    if (loading) {
        return (
            <div className='tokenAllocationContainer'>
                <div className='tokenTitle'>Token Allocation</div>
                <div className='spinner'><Spin /></div>
            </div>
        )
    }

    if (data) {
        return (
            <div className='tokenAllocationContainer'>
                <div className='tokenTitle'>Token Allocation</div>
                <div className="flex">
                    <Diagram data={data}/>
                    <Tokens data={data}/>
                </div>
                <div className='networthContainer'>
                    <div> Net worth </div>
                    <div className='tokenTitle'>${netWorth.toFixed(2)}</div>
                </div>
                
                
            </div>
        )
    }
}

export default TokenAllocation






