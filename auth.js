// --- SIGNUP LOGIC ---
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const name = document.getElementById('signup-name').value;

        // Store user data
        localStorage.setItem(email, JSON.stringify({ name, password }));
        
        alert("Account Created! Please Login.");
        window.location.href = "login.html"; // Move to Login next
    });
}

// --- LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {
            // SET THE KEY THAT GATEKEEPER LOOKS FOR
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", storedUser.name);
            
            window.location.href = "index.html"; // Finally enter Home
        } else {
            alert("Invalid credentials!");
        }
    });
}