const appendCrypto = ({name, symbol, priceUsd}) => {
  const cryptoList = document.getElementById('crypto-list');

  const listItem = document.createElement('li');
  listItem.innerText = `${name} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}`;
  cryptoList.appendChild(listItem);
}

const fetchCrypto = () => {
  fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => data.data.filter((crypto) => crypto.rank <= 10)
      .reduce((acc, crypto) => acc = appendCrypto(crypto), 0));
  
  return promise;
};

fetchCrypto();

