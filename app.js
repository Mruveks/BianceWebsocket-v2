let lastStreamPriceBtc = null;
let lastStreamPriceEth = null;
let lastStreamPriceAvax = null;
let lastStreamPriceAda = null;
let lastStreamPriceAtom = null;
let lastStreamPriceMatic = null;
let lastStreamPriceFtm = null;

let livePrice = new WebSocket('wss://stream.binance.com:9443/stream?streams=ethusdt@trade/btcusdt@trade/avaxusdt@trade/adausdt@trade/atomusdt@trade/ftmusdt@trade/maticusdt@trade');

livePrice.onmessage = (events) => {

    let streamObject = JSON.parse(events.data)

    if(streamObject.stream === 'btcusdt@trade'){
        let btc = document.getElementById('btc');
        lastStreamPriceBtc = parseFloat(streamObject.data.p).toFixed(2);    
        btc.innerHTML = lastStreamPriceBtc;
    }

    if(streamObject.stream === 'ethusdt@trade'){
        let eth = document.getElementById('eth');
        lastStreamPriceEth = parseFloat(streamObject.data.p).toFixed(2);    
        eth.innerHTML = lastStreamPriceEth;     
    }

    if(streamObject.stream === 'avaxusdt@trade'){
        let avax = document.getElementById('avax');
        lastStreamPriceAvax = parseFloat(streamObject.data.p).toFixed(2)
        avax.innerHTML = lastStreamPriceAvax;  
    }

    if(streamObject.stream === 'adausdt@trade'){
        let ada = document.getElementById('ada');
        lastStreamPriceAda = parseFloat(streamObject.data.p).toFixed(4);  
        ada.innerHTML = lastStreamPriceAda;
    }

    if(streamObject.stream === 'atomusdt@trade'){
        let atom = document.getElementById('atom');
        lastStreamPriceAtom = parseFloat(streamObject.data.p).toFixed(4);  
        atom.innerHTML = lastStreamPriceAtom;
    }

    if(streamObject.stream === 'ftmusdt@trade'){
        let ftm = document.getElementById('ftm');
        lastStreamPriceFtm = parseFloat(streamObject.data.p).toFixed(4);  
        ftm.innerHTML = lastStreamPriceFtm;
    }

    if(streamObject.stream === 'maticusdt@trade'){
        let matic = document.getElementById('matic');
        lastStreamPriceMatic = parseFloat(streamObject.data.p).toFixed(4);  
        matic.innerHTML = lastStreamPriceMatic;
    }
}


let priceHistory = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker/ethusdt@ticker/avaxusdt@ticker/adausdt@ticker/ftmusdt@ticker/atomusdt@ticker/maticusdt@ticker');

priceHistory.onmessage = (event) => {

    let klineObject = JSON.parse(event.data)
    
    if(klineObject.s === 'BTCUSDT'){
        let btcChange = document.getElementById('btcChange')
        let btc_H = document.getElementById('btcHigh')
        let btc_L = document.getElementById('btcLow')

        let btcOpen = parseFloat(klineObject.o).toFixed(2)
        let btcHigh = parseFloat(klineObject.h).toFixed(2);
        let btcLow = parseFloat(klineObject.l).toFixed(2);

        let btc24h = lastStreamPriceBtc - btcOpen;
        btcChange.innerHTML = btc24h.toFixed(2);

        btc_H.innerHTML = btcHigh;
        btc_L.innerHTML = btcLow;
    }

    if(klineObject.s === 'ETHUSDT'){
        let ethChange = document.getElementById('ethChange')
        let eth_H = document.getElementById('ethHigh')
        let eth_L = document.getElementById('ethLow')
    
        let ethOpen = parseFloat(klineObject.o).toFixed(2)
        let ethHigh= parseFloat(klineObject.h).toFixed(2);
        let ethLow = parseFloat(klineObject.l).toFixed(2);

        let eth24h = lastStreamPriceEth - ethOpen;
        ethChange.innerHTML = eth24h.toFixed(2);

        eth_H.innerHTML = ethHigh;
        eth_L.innerHTML = ethLow;
    }

    if(klineObject.s === 'AVAXUSDT'){
        let avaxChange = document.getElementById('avaxChange')
        let avax_H = document.getElementById('avaxHigh')
        let avax_L = document.getElementById('avaxLow')
    
        let avaxOpen = parseFloat(klineObject.o).toFixed(2)
        let avaxHigh= parseFloat(klineObject.h).toFixed(2);
        let avaxLow = parseFloat(klineObject.l).toFixed(2);

        let avax24h = lastStreamPriceAvax - avaxOpen;
        avaxChange.innerHTML = avax24h.toFixed(2);

        avax_H.innerHTML = avaxHigh;
        avax_L.innerHTML = avaxLow;
    }

    if(klineObject.s === 'ADAUSDT'){
        let adaChange = document.getElementById('adaChange')
        let ada_H = document.getElementById('adaHigh')
        let ada_L = document.getElementById('adaLow')
    
        let adaOpen = parseFloat(klineObject.o).toFixed(2)
        let adaHigh= parseFloat(klineObject.h).toFixed(2);
        let adaLow = parseFloat(klineObject.l).toFixed(2);

        let ada24h = lastStreamPriceAda - adaOpen;
        adaChange.innerHTML = ada24h.toFixed(2);

        ada_H.innerHTML = adaHigh;
        ada_L.innerHTML = adaLow;
    }

    if(klineObject.s === 'FTMUSDT'){
        let ftmChange = document.getElementById('ftmChange')
        let ftm_H = document.getElementById('ftmHigh')
        let ftm_L = document.getElementById('ftmLow')
    
        let ftmOpen = parseFloat(klineObject.o).toFixed(2)
        let ftmHigh= parseFloat(klineObject.h).toFixed(2);
        let ftmLow = parseFloat(klineObject.l).toFixed(2);

        let ftm24h = lastStreamPriceFtm - ftmOpen;
        ftmChange.innerHTML = ftm24h.toFixed(2);

        ftm_H.innerHTML = ftmHigh;
        ftm_L.innerHTML = ftmLow;
    }

    if(klineObject.s === 'ATOMUSDT'){
        let atomChange = document.getElementById('atomChange')
        let atom_H = document.getElementById('atomHigh')
        let atom_L = document.getElementById('atomLow')
    
        let atomOpen = parseFloat(klineObject.o).toFixed(2)
        let atomHigh = parseFloat(klineObject.h).toFixed(2);
        let atomLow = parseFloat(klineObject.l).toFixed(2);

        let atom24h = lastStreamPriceAtom - atomOpen;
        atomChange.innerHTML = atom24h.toFixed(2);

        atom_H.innerHTML = atomHigh;
        atom_L.innerHTML = atomLow;
    }

    if(klineObject.s === 'MATICUSDT'){
        let maticChange = document.getElementById('maticChange')
        let matic_H = document.getElementById('maticHigh')
        let matic_L = document.getElementById('maticLow')

        let maticOpen = parseFloat(klineObject.o).toFixed(2)
        let maticHigh = parseFloat(klineObject.h).toFixed(2);
        let maticLow = parseFloat(klineObject.l).toFixed(2);

        let matic24h = lastStreamPriceMatic - maticOpen;
        maticChange.innerHTML = matic24h.toFixed(2);

        matic_H.innerHTML = maticHigh;
        matic_L.innerHTML = maticLow;
    }


}