import { COLORS } from "../utils"

const Tokens = ( {data} ) => {
    const defaultSrc = (e) => {
        e.target.src = 'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png'
    }
    return (
        <div className='tokenContainer'>
            {data.map((item, i) => {
                return(
                    <div className='tokenRow'>
                        <div><img onError={defaultSrc} className='tokenLogo' src={'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png'} alt={'123'} /></div>
                        <div className='alignLeft'>Token 0</div>
                        <div> {(item.ratio*100).toFixed(2)}% </div>

                        {/* Labels */}
                        <span style={{
                            height: "8px",
                            width: "8px",
                            backgroundColor: COLORS[i],
                            borderRadius: "50%",
                            display: "inline-block",
                            margin: "8px"
                        }}></span>
                    </div>
                )
            })}
        </div>
    )
}

export default Tokens