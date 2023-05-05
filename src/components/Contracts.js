const Contracts = ( {spenders} ) => {
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

    const truncateEthAddress = (address) => {
        const match = address.match(truncateRegex);
        if (!match) return address;
        return `${match[1]}…${match[2]}`;
      };

    return (
        <>
        {spenders.map(item => {
            return (
            <div className='allowanceRow'>

                <div className='risk'>
                    <img className='riskLogo' src={'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png'} title={'riskTitle'} alt='tokenlogo'/>
                </div>

                <div className='contract'>
                    <div className='contractName'>ContractName</div>
                    <a className='addressUrl' href={'https://etherscan.io/address/tokenAddress'} target='_blank' rel='noreferrer'><div className='contractAddress'><img className='scroll' src='https://res.cloudinary.com/dl4murstw/image/upload/v1668495918/scroll_bkmays.png' alt='scroll' width='12px' /> {'tokenAddress'}</div></a>
                </div>

                <div className='allowance'>
                000
                </div>

                <div className='valueAtRisk'>
                $000
                </div>

                <div className='dateApproved'>
                2020-01-01
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

export default Contracts