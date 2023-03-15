import { useState, useEffect } from 'react';
import '../App.css';

const Transactions = () => {
    const [data, setData] = useState([...Array(3).keys()])

    return (
        <>
            <h1 className='sectionTitle'>Transactions</h1>
            <div className='sectionContainer'>
                {data.map(item => {
                    return (
                    <div className='rowTxn' key={item}>

                        <div className='txnContainer'>
                            <div className='action'>
                                <div className='actionText'>Swap</div>
                                <div className='date'>Oct 14</div>
                            </div>
                            <div className='tokenBundle'>
                                <div><img className='tokenLogoTransactions' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/></div>
                                <div className='tokeninfo'>
                                    <p className='txnText'>$0</p>
                                    <p className='txnText'>USDC</p>
                                </div>
                            </div>
                            <div className='arrow'><img src='https://res.cloudinary.com/dl4murstw/image/upload/v1668500894/next_e7qvca.png' alt='arrow' height="32px"/></div>
                            <div className='tokenBundle'>
                                <div><img className='tokenLogoTransactions' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/></div>
                                <div className='tokeninfo'>
                                    <p className='txnText'>$0</p>
                                    <p className='txnText'>USDC</p>
                                </div>
                            </div>
                            <div className='rightTxn'>
                                <div className='gasEth'>0.00
                                <img
                                    alt=""
                                    src="https://res.cloudinary.com/dl4murstw/image/upload/v1668511869/gas-station_ydpfe5.png"
                                    height="12"
                                    />
                                </div>
                                <div className='gasQuote'>ETH</div>
                                <div className='gasQuote'>($0.00)</div>
                            </div>
                        </div>

                        
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Transactions