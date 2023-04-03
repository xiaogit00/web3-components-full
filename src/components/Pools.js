import { useState, useEffect } from 'react';
import '../App.css';

const Pools = () => {
    const [data, setData] = useState([...Array(3).keys()])

    return (
        <>
            <h1 className='sectionTitle'>Pools</h1>
            <div className='rowHeaders'>  
                <div className='rowHeaderPool'>Pools</div>
                <div className='rowHeaderAPY'> APY</div>
                <div className='rowHeaderTVL'>TVL</div>
            </div>
            <div className='sectionContainer'>
                {data.map(item => {
                    return (
                    <div className='row' key={item}>
                        <div className='left'>
                            <div className='logoContainer'>
                                <img className='poolTokenLogo' src='https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png' alt='tokenlogo'/>
                            </div>
                            <div className='pool-left-info-container'>
                                <div className='poolTokenName'>token1 / token 2</div>
                                <div className='poolTokenBalance'>pool address</div>
                            </div>
                        </div>

                        <div className='apy'>0.0%</div>
                        
                        <div className='tvl'>$0.00M</div>
                        
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Pools