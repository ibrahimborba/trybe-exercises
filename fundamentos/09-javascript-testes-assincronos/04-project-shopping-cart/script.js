const cartItemsList = document.querySelector('.cart__items');
const priceTotal = document.querySelector('.total-price');
const cartCount = document.querySelector('.cart-counter');
const searchInput = document.querySelector('.input-search');
const searchBtn = document.querySelector('.btn-search');
const orderOptions = document.querySelector('.order-options');

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

function createProductItemElement({ sku, name, image, price }) {
  const section = document.createElement('section');
  section.classList.add('item');

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', price));
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

const addProductItem = async (search) => {
  const itemsSection = document.querySelector('.items');
  const productsResponse = await fetchProducts(search);
  productsResponse.results.forEach((elem) => {
    const { id: sku, title: name, thumbnail: image, price} = elem;
    itemsSection.appendChild(createProductItemElement({ sku, name, image, price}));
  });
};

const addProductToCart = async () => {
  const btnsAddToCart = document.querySelectorAll('.item__add');
  btnsAddToCart.forEach((button) => button.addEventListener('click', async (event) => {
    const itemSKU = getSkuFromProductItem(event.target.parentElement);
    const itemResponse = await fetchItem(itemSKU);
    const { id: sku, title: name, price: salePrice } = itemResponse;
    cartItemsList.appendChild(createCartItemElement({ sku, name, salePrice }));
    saveCartItems(cartItemsList.innerHTML);
    calculateTotalPrice();
    countCartItems();
  }));
};

const searchProducts = async () => {
  const searchValue = searchInput.value;
  createLoadingMessage();
  const itemsSection = document.querySelector('.items');
  itemsSection.innerHTML = '';
  await addProductItem(searchValue);
  addProductToCart();
  removeLoadingMessage();
}
searchBtn.addEventListener('click', searchProducts);

const orderByPrice = () => {
  const itemListSection = document.querySelector('.items');
  const itemList = document.querySelectorAll('.item');
  const itemListSorted = [...itemList];
  if (orderOptions.value === '1') {    
    itemListSorted.sort((a, b) => {
      return parseFloat(b.children[3].innerText) - parseFloat(a.children[3].innerText);
    });
  }
  if (orderOptions.value === '2') {    
    itemListSorted.sort((a, b) => {
      return parseFloat(a.children[3].innerText) - parseFloat(b.children[3].innerText);
    });
  }
  itemListSection.innerHTML = '';
  itemListSorted.forEach((item) => {
    itemListSection.appendChild(item);
  });
}
orderOptions.addEventListener('change', orderByPrice);

const initialRenderization = async () => {
  await addProductItem('computador');
  addProductToCart();
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