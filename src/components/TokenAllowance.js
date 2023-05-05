import '../App.css'
import Token from './Token'
import Contracts from './Contracts'

const TokenAllowance = ( {tokenItem} ) => {
    return (
        <>
            <div className='tokenContainer'>
            <Token tokenItem={tokenItem}/>
            <div className='headers'>
                <div className='width-custom'>Risk Factor</div>
                <div>Allowance</div>
                <div>Value at Risk</div>
                <div>Date approved</div>
            </div>
            <Contracts spenders={[...Array(3).keys()]} />
            </div>
        </>
    )
}

export default TokenAllowance