const cryptoData = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC", price_usd: 67234.50,
        market_cap_usd: 1320000000000,
        percent_change_24h: 2.34,
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
    },
    {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        price_usd: 3456.78,
        market_cap_usd: 415000000000,
        percent_change_24h: -1.23,
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
    },

    {
        id: "tether",
        name: "Tether",
        symbol: "USDT",
        price_usd: 1.00,
        market_cap_usd: 112000000000,
        percent_change_24h: 0.01,
        image: "https://assets.coingecko.com/coins/images/325/large/Tether.png"
    },
    {
        id: "bnb",
        name: "BNB",
        symbol: "BNB",
        price_usd: 598.75,
        market_cap_usd: 89000000000,
        percent_change_24h: 1.56,
        image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2.png"
    },
    {
        id: "solana",
        name: "Solana",
        symbol: "SOL",
        price_usd: 172.30,
        market_cap_usd: 75000000000,
        percent_change_24h: -3.45,
        image: "https://assets.coingecko.com/coins/images/4128/large/solana.png"
    },
    {
        id: "ripple",
        name: "XRP",
        symbol: "XRP", price_usd: 0.62,
        market_cap_usd: 34000000000,
        percent_change_24h: 1.89,
        image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white- 128.png"
    },
    {
        id: "cardano",
        name: "Cardano",
        symbol: "ADA",
        price_usd: 0.45,
        market_cap_usd: 15800000000,
        percent_change_24h: 5.67,
        image: "https://assets.coingecko.com/coins/images/975/large/cardano.png"
    },
    {
        id: "dogecoin",
        name: "Dogecoin",
        symbol: "DOGE",
        price_usd: 0.1523,
        market_cap_usd: 21500000000,
        percent_change_24h: -0.89,
        image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png"
    },
    {
        id: "polkadot",
        name: "Polkadot",
        symbol: "DOT",
        price_usd: 7.89,
        market_cap_usd: 10800000000,
        percent_change_24h: -0.78,
        image: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png"
    },
    {
        id: "chainlink",
        name: "Chainlink",
        symbol: "LINK",
        price_usd: 14.56,
        market_cap_usd: 8500000000,
        percent_change_24h: 3.21,
        image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new- logo.png"
    },
    {
        id: "avalanche",
        name: "Avalanche", symbol: "AVAX",
        price_usd: 38.92,
        market_cap_usd: 14500000000,
        percent_change_24h: -2.10,
        image: "https://assets.coingecko.com/coins/images/12559/large/avalanche.png"
    },
    {
        id: "shiba-inu",
        name: "Shiba Inu",
        symbol: "SHIB",
        price_usd: 0.00002345,
        market_cap_usd: 13800000000,
        percent_change_24h: 8.76,
        image: "https://assets.coingecko.com/coins/images/11939/large/shiba.png"
    },
    {
        id: "matic",
        name: "Polygon",
        symbol: "MATIC",
        price_usd: 0.72,
        market_cap_usd: 6700000000,
        percent_change_24h: 4.32,
        image: "https://assets.coingecko.com/coins/images/4713/large/matic-token - icon.png"
    },
    {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        price_usd: 72.45,
        market_cap_usd: 5400000000,
        percent_change_24h: -1.45,
        image: "https://assets.coingecko.com/coins/images/2/large/litecoin.png"
    },
    {
        id: "uniswap",
        name: "Uniswap",
        symbol: "UNI",
        price_usd: 7.23,
        market_cap_usd: 5400000000,
        percent_change_24h: 0.56,
        image: "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png"
    },
    {
        id: "cosmos", name: "Cosmos",
        symbol: "ATOM",
        price_usd: 8.91,
        market_cap_usd: 3500000000,
        percent_change_24h: -2.78,
        image: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png"
    },
    {
        id: "filecoin",
        name: "Filecoin",
        symbol: "FIL",
        price_usd: 8.12,
        market_cap_usd: 3900000000,
        percent_change_24h: 6.34,
        image: "https://assets.coingecko.com/coins/images/12817/large/filecoin.png"
    },
    {
        id: "theta",
        name: "Theta Network",
        symbol: "THETA",
        price_usd: 2.34,
        market_cap_usd: 2300000000,
        percent_change_24h: 1.23,
        image: "https://assets.coingecko.com/coins/images/2538/large/theta-token - logo.png"
    },
    {
        id: "vechain",
        name: "VeChain",
        symbol: "VET",
        price_usd: 0.03456,
        market_cap_usd: 2500000000,
        percent_change_24h: -0.34,
        image: "https://assets.coingecko.com/coins/images/1167/large/VeChain.png"
    },
    {
        id: "algorand",
        name: "Algorand",
        symbol: "ALGO",
        price_usd: 0.18,
        market_cap_usd: 1500000000,
        percent_change_24h: 0.78,
        image: "https://assets.coingecko.com/coins/images/4380/large/algorand.png"
    }
];

const contenido = document.querySelector('#contenedor');
cryptoData.forEach(element => {
    // Contenedor de la card
    const cardcrypto = document.createElement('div');
    cardcrypto.classList.add('p');


    //mostrar colores segun rendimiento

    const positiv = element.percent_change_24h >= 0;
    const spanPercent = document.createElement('span');
    let flecha;
    if (positiv) {
        flecha = '▲';
        spanPercent.classList.add('positivo');
    } else {
        flecha = '▼';
        spanPercent.classList.add('negativo');
    }
    spanPercent.textContent = `${flecha} ${element.percent_change_24h}%`;

    // Lo indicado por Mostrar
    const p = document.createElement('p')
    p.innerHTML =
        `<p>
    ${element.name} - 
    ${element.symbol}- 
    ${element.percent_change_24h}%- 
    ${element.market_cap_usd} - 
    ${formatPrice(element.price_usd)} - 
    ${formatMarketCap(element.market_cap_usd)}
         </p>`;

    //creacion de variable img para extraer la imagen del url
    const img = document.createElement('img');
    const src = '../img/coins-money-stack_icon-icons.com_56193.png';
    img.src = element.image;
    img.onerror = () => {
        img.onerror = null;
        img.src = src;
    };

    // funcion para formaterar los decimales
    function formatPrice(price) {
        if (price >= 1) {
            return price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        } else {
            return price.toLocaleString('en-US', {
                minimumFractionDigits: 6,
                maximumFractionDigits: 8
            });
        }
    }



    //funcion capitalización formateada

    function formatMarketCap(marketCap) {
        if (marketCap >= 1e12) return '$' + (marketCap / 1e12).toFixed(2) + 'T';
        if (marketCap >= 1e9) return '$' + (marketCap / 1e9).toFixed(2) + 'B';
        if (marketCap >= 1e6) return '$' + (marketCap / 1e6).toFixed(2) + 'M';
        return '$' + marketCap.toFixed(2);
    }
    const capitalizacionform = formatMarketCap(1500000000)
    console.log(capitalizacionform);

    // lo que mostrara para  crear y renderizar contenido dinámico en una página web.
    cardcrypto.appendChild(img);
    cardcrypto.appendChild(p);
    contenido.appendChild(cardcrypto);
    p.appendChild(spanPercent);



});



