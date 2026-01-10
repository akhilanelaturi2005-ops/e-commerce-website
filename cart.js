document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    // Only try to display items if we are on the cart page
    if (document.getElementById("cart-items")) {
        displayCartItems();
    }
});

// Add to Cart (Use this on your Product Page)
function addToCart(name, price) {
    // Ensure we use "cart" consistently
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(name + " added to cart!");
    updateCartCount();
}

// Update Cart Count in Navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Display Cart Items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceContainer = document.getElementById("cart-total");
    let total = 0;

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='color: black; padding: 20px;'>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartContainer.innerHTML += `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; background:white; margin:10px; padding:15px; border-radius:8px; color:black; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <p style="margin:0;"><strong>${item.name}</strong> - $${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})" style="background:#ff4444; color:white; width:auto; padding:5px 15px; border-radius:5px;">Remove</button>
                </div>
            `;
        });
    }

    if (totalPriceContainer) {
        totalPriceContainer.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Remove from Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}