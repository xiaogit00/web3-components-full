export const transformData = (data) => {
    const newData = []
    const totalValue = data.reduce((agg, curr) => {
        if (curr.quote) {
            return agg + curr.quote
        } else {
            return agg
        }
    }, 0)

    if (data.length >= 6) {
        let sumOfRatios = 0
        let sumOfValues = 0
        for (var i = 0; i < 6; i++) {
            if (i !== 5) {
                newData.push({
                    logo: data[i].logo_url,
                    name: data[i].contract_ticker_symbol,
                    ratio: data[i].quote/totalValue,
                    balance: Number(data[i].balance)/10**data[i].contract_decimals,
                    quote: data[i].quote,
                })
                sumOfRatios += data[i].quote/totalValue
                sumOfValues += data[i].quote
            } else {
                newData.push({
                    logo: 'https://res.cloudinary.com/dl4murstw/image/upload/v1677729872/greybox_zkioqf.png',
                    name: 'Others',
                    ratio: 1-sumOfRatios,
                    balance: 0,
                    quote: totalValue - sumOfValues
                })
            }
        }
    } else {
        data.map(item => {
            newData.push({
                logo: item.logo_url,
                name: item.contract_ticker_symbol,
                ratio: item.quote/totalValue,
                balance: Number(item.balance)/10**item.contract_decimals,
                quote: item.quote
            })
            return null
        })
    }
    return {
        newData, 
        totalValue
    }
}

export const COLORS = ["#F44336", "#673AB7", "#03A9F4", "#4CAF50", "#FFEB3B", "#FF5722"];