import '../App.css';

const WalletSummary = () => {
    return(
        <>
            <div className='walletSummaryContainer'>
                <div className='userProfile'>
                    <div><img className='profilePic' src="https://res.cloudinary.com/dl4murstw/image/upload/v1685502715/user_3_sprzkr.png" alt="profile" height="80px"/> </div>
                    <div className='address'>0x000...000e <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1685502645/copy_prfttd.png" alt="copy" height="12px"/></div>
                </div>

                <div className='txnSummaryContainer'>
                    <div className='textElem'>Activity</div>
                    <div className='txnCount'>
                        <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1685504018/ethereum_ygvzfa.png" alt="chain" height="24px"/>
                        00 transactions 
                    </div>

                    <div className='buttonsRow'>
                        <div className='buttons'>Latest Tx: 00 May 2000 <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/></div>
                        <div className='buttons'>Earliest Tx: 00 June 2000 <img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668603285/external-link_kl6vf5.png" alt="link" height="8px"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WalletSummary