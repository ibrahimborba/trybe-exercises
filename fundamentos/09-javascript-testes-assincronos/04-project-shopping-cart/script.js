const cartItemsList = document.querySelector('.cart__items');
const priceTotal = document.querySelector('.total-price');
const cartCount = document.querySelector('.cart-counter');

const countCartItems = () => {
  const cartItem = document.querySelectorAll('.cart_item_li');
  cartCount.innerText = cartItem.length;
}

const calculateTotalPrice = () => {
  let priceCounter = 0;
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => {
    const itemPrice = parseFloat(item.innerText.substring(item.innerText.indexOf('$') + 1));
    priceCounter += itemPrice;
  });
  priceTotal.innerHTML = `<b>Total: R$${priceCounter.toFixed(2)}`;
};

const createLoadingMessage = () => {
  const itemsSection = document.querySelector('.items');
  const loadingMessage = document.createElement('p');
  loadingMessage.className = 'loading';
  loadingMessage.innerText = 'carregando...';
  itemsSection.appendChild(loadingMessage);
};

const removeLoadingMessage = () => {
  const loadingMessage = document.querySelector('.loading');
  loadingMessage.remove();
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.parentElement.remove();
  saveCartItems(cartItemsList.innerHTML);
  calculateTotalPrice();
  countCartItems();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart_item_li';
  const span = document.createElement('span');
  span.className = 'cart__item';
  span.innerHTML = `${name}<br><b>R$${salePrice}<b>`;
  span.addEventListener('click', cartItemClickListener);
  const hr = document.createElement('hr');
  li.appendChild(span);
  li.appendChild(hr);
  return li;
}

const addProductItem = async () => {
  const itemsSection = document.querySelector('.items');
  const productsResponse = await fetchProducts('painelsolar');
  productsResponse.results.forEach((elem) => {
    const { id: sku, title: name, thumbnail: image } = elem;
    itemsSection.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const addProductToCart = async () => {
  createLoadingMessage();
  await addProductItem();
  removeLoadingMessage();
  const btnsAddToCart = document.querySelectorAll('.item__add');
  btnsAddToCart.forEach((button) => button.addEventListener('click', async (event) => {
    const itemSKU = event.target.parentElement.firstChild.innerText;
    const itemResponse = await fetchItem(itemSKU);
    const { id: sku, title: name, price: salePrice } = itemResponse;
    cartItemsList.appendChild(createCartItemElement({ sku, name, salePrice }));
    saveCartItems(cartItemsList.innerHTML);
    calculateTotalPrice();
    countCartItems();
  }));
};
addProductToCart();

const initialRenderization = () => {
  cartItemsList.innerHTML = getSavedCartItems();
  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((item) => item.addEventListener('click', cartItemClickListener));
  calculateTotalPrice();
  countCartItems();
};

const emptyCart = () => {
  cartItemsList.innerHTML = '';
  saveCartItems(cartItemsList.innerHTML);
  calculateTotalPrice();
  countCartItems();
};
const btnEmptyCart = document.querySelector('.empty-cart');
btnEmptyCart.addEventListener('click', emptyCart);

window.onload = () => { initialRenderization(); };
