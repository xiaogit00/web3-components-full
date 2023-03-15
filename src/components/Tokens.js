import { useState, useEffect } from 'react';
import '../App.css';

const Tokens = () => {
    const [data, setData] = useState([...Array(3).keys()])

    return (
        <>
            <h1 className='sectionTitle'>Tokens</h1>
            <div className='sectionContainer'>
                {data.map(item => {
                    return (
                    <div className='row' key={item}>

                        <div className='left'>
                        <div className='logoContainer'>
                            <img className='tokenLogo' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/>
                        </div>
                        <div className='left-info-container'>
                            <div className='tokenName'>Token0</div>
                            <div className='tokenBalance'>0.00</div>
                        </div>
                        </div>

                        <div className='right'>
                        <div className='tokenValue'>$0.00</div>
                        <div className='percentageChange'>0%</div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Tokens