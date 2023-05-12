import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { transformData } from '../utils';
import Tokens from './Tokens'
import Diagram from './Diagram'


const TokenAllocation = ( { walletAddress, selectedChainId} ) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([...Array(5).keys()])

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
                    <div className='tokenTitle'>$000</div>
                </div>
                
                
            </div>
        )
    }
}

export default TokenAllocation






