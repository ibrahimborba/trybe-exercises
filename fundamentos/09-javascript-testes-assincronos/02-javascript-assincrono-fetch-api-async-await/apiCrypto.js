const appendCrypto = ({name, symbol, priceUsd}, conversor) => {
  const cryptoList = document.getElementById('crypto-list');
  const convertedPrice = parseFloat(priceUsd) * conversor;
  const listItem = document.createElement('li');
  listItem.innerText = `${name} (${symbol}): ${convertedPrice.toFixed(2)}`;
  cryptoList.appendChild(listItem);
}

const fetchCurrencies = () => {
  return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
  .then(response => response.json())
  .then(data => data.usd.brl);
}

const addCrypto = async () => {
  const conversor = await fetchCurrencies();
  fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => data.data.filter((crypto) => crypto.rank <= 10)
      .reduce((acc, crypto) => acc = appendCrypto(crypto, conversor), 0));
};

addCrypto();

