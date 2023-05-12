import { Button } from 'antd'

const ChainSelector = ( { chains, handleChainSelect } ) => {
   
    return(
        <div className='buttonsContainer'>
            {chains.map(item => {
                return (
                    <Button type="primary" icon={<Logo url={item.logo_url}/>} size="small" onClick={() => handleChainSelect(item.chain_id)}>
                        {item.category_label}
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
            <img src={url} alt='chains' height="18px" width="18px"/>
        </>
    )
}