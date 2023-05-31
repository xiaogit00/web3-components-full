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

const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

export const truncateEthAddress = (address) => {
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  }; 



export const blockExplorerURLs = [
    {
      chainId: [1, 'eth-mainnet'],
      url: 'https://etherscan.io/'
    },
    {
      chainId: [5, 'eth-goerli'],
      url: 'https://goerli.etherscan.io/'
    },
    {
      chainId: [137, 'matic-mainnet'],
      url: 'https://polygonscan.com/'
    },
    {
      chainId: [80001, 'matic-mumbai'],
      url: 'https://mumbai.polygonscan.com/'
    },
    {
      chainId: [43114, 'avalanche-mainnet'],
      url: 'https://snowtrace.io/'
    },
    {
      chainId: [43113, 'avalanche-testnet'],
      url: 'https://testnet.snowtrace.io/'
    },
    {
      chainId: [56, 'bsc-mainnet'],
      url: 'https://www.bscscan.com/'
    },
    {
      chainId: [97, 'bsc-testnet'],
      url: 'https://testnet.bscscan.com/'
    },
    {
      chainId: [1284, 'moonbeam-mainnet'],
      url: 'https://moonscan.io/'
    },
    {
      chainId: [1287, 'moonbeam-moonbase-alpha'],
      url: 'https://moonbase-blockscout.testnet.moonbeam.network/'
    },
    {
      chainId: [1285, 'moonbeam-moonriver'],
      url: 'https://blockscout.moonriver.moonbeam.network/'
    },
    {
      chainId: [30, 'rsk-mainnet'],
      url: 'https://explorer.rsk.co/'
    },
    {
      chainId: [31, 'rsk-testnet'],
      url: 'https://explorer.testnet.rsk.co/'
    },
    {
      chainId: [42161, 'arbitrum-mainnet'],
      url: 'https://arbiscan.io/'
    },
    {
      chainId: [421611, 'arbitrum-testnet'],
      url: 'https://testnet.arbiscan.io/'
    },
    {
      chainId: [42170, 'arbitrum-nova-mainnet'],
      url: 'https://nova.arbiscan.io/'
    },
    {
      chainId: [250, 'fantom-mainnet'],
      url: 'https://explorer.fantom.network/'
    },
    {
      chainId: [4002, 'fantom-testnet'],
      url: 'https://testnet.ftmscan.com/'
    },
    {
      chainId: [11297108109, 'palm-mainnet'],
      url: 'https://explorer.palm.io/'
    },
    {
      chainId: [11297108099, 'palm-testnet'],
      url: 'https://blockscout.com/poa/sokol'
    },
    {
      chainId: [8217, 'klaytn-mainnet'],
      url: 'https://scope.klaytn.com/'
    },
    {
      chainId: [128, 'heco-mainnet'],
      url: 'https://www.hecoinfo.com/'
    },
    {
      chainId: [256, 'heco-testnet'],
      url: 'https://scan-testnet.hecochain.com/home/index'
    },
    {
      chainId: [2020, 'axie-mainnet'],
      url: 'https://explorer.roninchain.com/'
    },
    {
      chainId: [9001, 'evmos-mainnet'],
      url: 'https://evm.evmos.org/'
    },
    {
      chainId: [9000, 'evmos-testnet'],
      url: 'https://evm.evmos.dev/'
    },
    {
      chainId: [592, 'astar-mainnet'],
      url: 'https://astar.subscan.io/'
    },
    {
      chainId: [336, 'astar-shiden'],
      url: 'https://shiden.subscan.io/'
    },
    {
      chainId: [4689, 'iotex-mainnet'],
      url: 'https://iotexscan.io/'
    },
    {
      chainId: [4690, 'iotex-testnet'],
      url: 'https://testnet.iotexscan.io/'
    },
    {
      chainId: [1666600000, 'harmony-mainnet'],
      url: 'https://explorer.harmony.one/'
    },
    {
      chainId: [1666700000, 'harmony-testnet'],
      url: 'https://explorer.pops.one/'
    },
    {
      chainId: [25, 'cronos-mainnet'],
      url: 'https://cronoscan.com/'
    }
  ]

export const copyText = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress)
}