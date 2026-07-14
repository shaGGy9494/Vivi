let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length;
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.name} - GHS ${item.price}</p>`;
  });
  document.getElementById('cart-total').innerText = total;
}

// Modal open/close
const modal = document.getElementById("cart-modal");
document.getElementById("cart-btn").onclick = () => modal.style.display = "block";
document.querySelector(".close").onclick = () => modal.style.display = "none";

// A. WhatsApp Order
document.getElementById("whatsapp-btn").onclick = () => {
  let message = "Hi Vivi, I want to order:\n";
  cart.forEach(item => message += `- ${item.name}: GHS ${item.price}\n`);
  message += `Total: GHS ${document.getElementById('cart-total').innerText}`;
  let url = `https://wa.me/233XXXXXXXXX?text=${encodeURIComponent(message)}`; // <-- Put your WhatsApp number here
  window.open(url, '_blank');
}

// C. Paystack Payment Link
document.getElementById("paystack-btn").onclick = () => {
  let total = document.getElementById('cart-total').innerText;
  // Replace with your Paystack payment link
  let paystackUrl = `https://paystack.shop/vivi-store?amount=${total * 100}`; // amount in pesewas
  alert("This will redirect to Paystack. Replace the link with your real Paystack store link.");
  // window.location.href = paystackUrl;
}
