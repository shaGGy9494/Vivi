let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
  alert(name + " added to cart!");
}

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - GHS ${item.price}</p>`;
  });
  document.getElementById('cart-total').innerText = total;
}

const modal = document.getElementById("cart-modal");
document.getElementById("cart-btn").onclick = () => modal.style.display = "block";
document.querySelector(".close").onclick = () => modal.style.display = "none";

// WhatsApp Order - Your number is here
document.getElementById("whatsapp-btn").onclick = () => {
  if(cart.length === 0) {
    alert("Your cart is empty");
    return;
  }
  let message = "Hi Vivi, I want to order:\n";
  cart.forEach(item => message += `- ${item.name}: GHS ${item.price}\n`);
  message += `\nTotal: GHS ${document.getElementById('cart-total').innerText}`;
  let url = `https://wa.me/233554278079?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Paystack - Add your link later
document.getElementById("paystack-btn").onclick = () => {
  alert("Add your Paystack shop link in script.js");
}
