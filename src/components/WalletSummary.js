import '../App.css';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import TransactionSummary from './TransactionSummary';
import { copyText,  blockExplorerURLs} from '../utils';

const WalletSummary = ({ walletAddress, chainId, chains }) => {

    const [txnSummaryData, setTxnSummaryData] = useState(null)
    const [loading, setLoading] = useState(false)
    const txnSummaryEndpoint = `https://api.covalenthq.com/v1/${chainId}/address/${walletAddress}/transactions_summary/`
    const apiKey = process.env.REACT_APP_APIKEY
    

    const foundChain = blockExplorerURLs.find(item => item.chainId[0] === Number(chainId))
    console.log(chainId)
    const blockExplorerURL = foundChain.url
    const selectedChainLogo = chains.find(item => Number(item.chain_id) === Number(chainId)).logo_url
    
    return(
        <>
            <div className='walletSummaryContainer'>
                <div className='userProfile'>
                    <div><img className='profilePic' src="https://res.cloudinary.com/dl4murstw/image/upload/v1685502715/user_3_sprzkr.png" alt="profile" height="80px"/> </div>
                    <div className='address'>0x000...000e
                    <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1685502645/copy_prfttd.png" alt="copy" height="12px" onClick={copyText} className='copyText'/>
                    </div>
                </div>

                <div className='txnSummaryContainer'>
                    <div className='textElem'>Activity</div>
                    {loading
                    ?<div className='spinner'><Spin /></div> 
                    : <TransactionSummary 
                        chainLogo={selectedChainLogo} 
                        txnSummaryData={txnSummaryData}
                        blockExplorerURL={blockExplorerURL}
                    />
                    }
                </div>
            </div>
        </>
    )
}

export default WalletSummary

