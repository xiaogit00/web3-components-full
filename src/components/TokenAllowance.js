import '../App.css'

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
            <Allowance spenders={tokenItem.spenders} />
            </div>
        </>
    )
}

export default TokenAllowance

const Token = ( {tokenItem} ) => {
    const percentageAtRisk = tokenItem.balance_quote === 0 || tokenItem.value_at_risk_quote === 0 
                            ? '0' 
                            : (tokenItem.value_at_risk_quote*100/tokenItem.balance_quote).toFixed(2)
    return (
        <div className='tokenRow'>

            <div className='left'>
              <div className='logoContainer'>
                <img className='tokenLogo' src={tokenItem.logo_url} alt='tokenlogo'/>
              </div>
              <div className='left-info-container'>
                <div className='tokenName'>{tokenItem.token_address_label}</div>
                <div className='tokenBalance'>{(Number(tokenItem.balance)/(10**tokenItem.contract_decimals)).toFixed(2)} {tokenItem.ticker_symbol}</div>
              </div>
            </div>

            <div className='right'>
              <div className='tokenValue'>${tokenItem.balance_quote.toFixed(2)}</div>
              <div className='percentageChange'>{percentageAtRisk}% at risk</div>
            </div>
          </div>
    )
}


const Allowance = ( {spenders} ) => {
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

    const truncateEthAddress = (address) => {
        const match = address.match(truncateRegex);
        if (!match) return address;
        return `${match[1]}…${match[2]}`;
      };

    return (
        <>
        {spenders.map(item => {
            let riskImage 
            let riskTitle

            switch(item.risk_factor) {
                case 'HIGH RISK, REVOKE NOW':
                    riskImage = 'https://res.cloudinary.com/dl4murstw/image/upload/v1683203742/warning_1_dz7rpq.png'
                    riskTitle = 'HIGH RISK, REVOKE NOW'
                    break;
                case 'CONSIDER REVOKING':
                    riskImage =' https://res.cloudinary.com/dl4murstw/image/upload/v1683203726/warning_ymvqdc.png'
                    riskTitle = 'CONSIDER REVOKING'
                    break;
                case 'LOW RISK':
                    riskImage ='https://res.cloudinary.com/dl4murstw/image/upload/v1683203505/check_zdftsz.png'
                    riskTitle = 'LOW RISK'
                    break;
                default:
                    riskImage ='https://res.cloudinary.com/dl4murstw/image/upload/v1683203505/check_zdftsz.png'
            }
            return (
            <div className='allowanceRow'>

                <div className='risk'>
                    <img className='riskLogo' src={riskImage} title={riskTitle} alt='tokenlogo'/>
                </div>

                <div className='contract'>
                    <div className='contractName'>{item.spender_address_label === null ? "Unknown contract" : item.spender_address_label}</div>
                    <a className='addressUrl' href={'https://etherscan.io/address/' + item.spender_address} target='_blank' rel='noreferrer'><div className='contractAddress'><img className='scroll' src='https://res.cloudinary.com/dl4murstw/image/upload/v1668495918/scroll_bkmays.png' alt='scroll' width='12px' /> {truncateEthAddress(item.spender_address)}</div></a>
                </div>

                <div className='allowance'>
                {item.allowance === "UNLIMITED" ? "Unlimited" : "$" + item.allowance_quote.toFixed(2)}
                </div>

                <div className='valueAtRisk'>
                ${item.value_at_risk_quote.toFixed(2)}
                </div>

                <div className='dateApproved'>
                {item.block_signed_at.slice(0,10)}
                </div>


                <div className='revoke'>
                <button className='revokeButton'>Revoke</button>
                </div>
            </div>
            )
        })}
        </>
    )
}