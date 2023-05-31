const TransactionSummary = ({ chainLogo, txnSummaryData, blockExplorerURL }) => {

    var options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    if (txnSummaryData) {
        return(
            <>
                <div className='txnCount'>
                            <div><img src={chainLogo} alt="chain" height="24px" className='chainLogo'/></div>
                            <div>{txnSummaryData[0].total_count} transactions </div>
                        </div>
    
                        <div className='buttonsRow'>
                            <a href={blockExplorerURL + "tx/" + txnSummaryData[0].latest_transaction.tx_hash} target="_blank" rel="noreferrer" className='link'>
                                <div className='buttons'>Latest Tx:&nbsp;  
                                    {new Date(txnSummaryData[0].latest_transaction.block_signed_at).toLocaleDateString('en', options)}&nbsp;
                                    <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/>
                                </div>
                            </a>
    
                            <a href={blockExplorerURL + "tx/" + txnSummaryData[0].latest_transaction.tx_hash} target="_blank" rel="noreferrer" className='link'>
                                <div className='buttons'>Earliest Tx:&nbsp;
                                    {new Date(txnSummaryData[0].earliest_transaction.block_signed_at).toLocaleDateString('en', options)}&nbsp;
                                    <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/>
                                </div>
                            </a>
                        </div>
            </>
        )
    }
    
}

export default TransactionSummary