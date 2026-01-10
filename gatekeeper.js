// gatekeeper.js
(function() {
    // 1. Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // 2. If NOT logged in, redirect them to signup immediately
    if (!isLoggedIn || isLoggedIn !== "true") {
        window.location.href = "signup.html";
    }
})();