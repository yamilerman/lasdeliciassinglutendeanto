document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartList = document.querySelectorAll(".cart-list");
  const totalElement = document.querySelectorAll(".total span");
  const clearCartButton = document.querySelectorAll(".clear-cart");

  let cart = [];

  products.forEach((product) => {
    const addToCartButton = product.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => addToCart(product));
  });


clearCartButton.addEventListener("click", clearCart);

function addToCart(product) {
  const productId = product.dataset.id;
  const productName = product.dataset.name;
  const productPrice = parseFloat(
    product.querySelector(".price").textContent.replace("$", "")
  );

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice });
  }
  updateCartUI();
}

function updateCartUI(){
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalElement.textContent = `${total.toFixed(2)}`;
    const removeButtons = document.querySelectorAll('.remove-item');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => removeItem(button.dataset.id));
      });
}
});