const Token = ( {tokenItem} ) => {
  
    const percentageAtRisk = tokenItem.balance_quote === 0 || tokenItem.value_at_risk_quote === 0 
                            ? '0' 
                            : (tokenItem.value_at_risk_quote*100/tokenItem.balance_quote).toFixed(2)
    return (
        <div className='tokenRow'>
            {/* Render Token Logo */}
            <div className='left'>
              <div className='logoContainer'>
                <img className='tokenLogo' src={tokenItem.logo_url} alt='tokenlogo'/>
              </div>

              {/* Render Token Name & Balance */}
              <div className='left-info-container'>
                <div className='tokenName'>{tokenItem.token_address_label}</div>
                <div className='tokenBalance'>{(Number(tokenItem.balance)/(10**tokenItem.contract_decimals)).toFixed(2)} {tokenItem.ticker_symbol}</div>
              </div>
            </div>

              {/* Render value & percentage at risk */}
            <div className='right'>
              <div className='tokenValue'>{tokenItem.pretty_balance_quote}</div>
              <div className='percentageChange'>{percentageAtRisk}% at risk</div>
            </div>
          </div>
    )
}

export default Token