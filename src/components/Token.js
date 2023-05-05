const Token = ( {tokenItem} ) => {

    return (
        <div className='tokenRow'>

            <div className='left'>
              <div className='logoContainer'>
                <img className='tokenLogo' src={'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png'} alt='tokenlogo'/>
              </div>
              <div className='left-info-container'>
                <div className='tokenName'>TokenName</div>
                <div className='tokenBalance'>000</div>
              </div>
            </div>

            <div className='right'>
              <div className='tokenValue'>$000</div>
              <div className='percentageChange'>0% at risk</div>
            </div>
          </div>
    )
}

export default Token