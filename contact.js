document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contactForm").reset(); // Reset form fields
    } else {
        alert("Please fill in all fields.");
    }
});