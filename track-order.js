document.addEventListener("DOMContentLoaded", () => {
    updateTrackingUI();
});

// Simulating an order status stored in localStorage
let orderStatus = parseInt(localStorage.getItem("orderStatus")) || 1;

function updateTrackingUI() {
    let steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        if (index + 1 <= orderStatus) {
            step.classList.add("active");
        }
    });
}

function updateOrderStatus() {
    if (orderStatus < 5) {
        orderStatus++;
        localStorage.setItem("orderStatus", orderStatus);
        updateTrackingUI();
    } else {
        alert("Your order has already been delivered! ✅");
    }
}