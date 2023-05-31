const TransactionSummary = ({ chainLogo, txnSummaryData, blockExplorerURL }) => {

    var options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    return(
        <>
            <div className='txnCount'>
                        <div><img src={chainLogo} alt="chain" height="24px" className='chainLogo'/></div>
                        <div>00 transactions </div>
                    </div>

                    <div className='buttonsRow'>
                        <a href={''} target="_blank" rel="noreferrer" className='link'>
                            <div className='buttons'>Latest Tx: 00 May 2000
                                <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/>
                            </div>
                        </a>

                        <a href={''} target="_blank" rel="noreferrer" className='link'>
                            <div className='buttons'>Earliest Tx: 00 June 2000
                                <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/>
                            </div>
                        </a>
                    </div>
        </>
    )
    
}

export default TransactionSummary