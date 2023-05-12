import { Button } from 'antd'

const ChainSelector = ( { chains, handleChainSelect } ) => {
   
    return(
        <div className='buttonsContainer'>
            {chains.map(item => {
                return (
                    <Button type="primary" icon={<Logo url={item.logo_url}/>} size="small" onClick={() => handleChainSelect(item.chain_id)}>
                        ChainName
                    </Button>
                )
            })}
        </div>
    )
}

export default ChainSelector

const Logo = ( {url} ) => {
    return (
        <>
            <img src={'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png'} alt='chains' height="18px" width="18px"/>
        </>
    )
}