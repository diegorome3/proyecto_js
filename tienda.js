document.addEventListener('click', (event) => {
  if (event.target && event.target.className.includes('addToCart')) {
    addToCartClicked(event);
  }
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  var objetoJuego = {
    itemTitle,
    itemPrice,
    itemImage
  }
  console.log(objetoJuego);

  localStorage.setItem("juegos", JSON.stringify(objetoJuego))

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem" data-id=${itemId}>
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

let btn1 = document.getElementById("btntrailer")
btn1.addEventListener("click", clickResponse)

function clickResponse() {
  window.location.href = "https://www.youtube.com/watch?v=u6Qypoo0a8w&t=16s";
}

let btn2 = document.getElementById("btntrailer2")
btn2.addEventListener("click", clickResponse2)

function clickResponse2() {
  window.location.href = "https://www.youtube.com/watch?v=o3V-GvvzjE4&t=6s";
}

let btn3 = document.getElementById("btntrailer3")
btn3.addEventListener("click", clickResponse3)

function clickResponse3() {
  window.location.href = "https://www.youtube.com/watch?v=2TMs2E6cms4";
}

let btn4 = document.getElementById("btntrailer4")
btn4.addEventListener("click", clickResponse4)

function clickResponse4() {
  window.location.href = "https://www.youtube.com/watch?v=Jv4BjWoB-NA&t=2s";
}

let btn5 = document.getElementById("btntrailer5")
btn5.addEventListener("click", clickResponse5)

function clickResponse5() {
  window.location.href = "https://www.youtube.com/watch?v=F3jePdO9_jc";
}

let btn6 = document.getElementById("btntrailer6")
btn6.addEventListener("click", clickResponse6)

function clickResponse6() {
  window.location.href = "https://www.youtube.com/watch?v=LioYUfOuK5Q";
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  const shoppingCartItems = getItemsInShoppingCart();
  addToLocalStorage('shoppingCart', shoppingCartItems);

  updateShoppingCartTotal();
}

function getItemsInShoppingCart() {
  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  const arrShoppingCartItems = [];

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    const itemId = shoppingCartItem.dataset.id;

    const item = {
      id: itemId,
      qty: shoppingCartItemQuantity,
    };

    arrShoppingCartItems.push(item);
  });
  return arrShoppingCartItems;
}

function addToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
