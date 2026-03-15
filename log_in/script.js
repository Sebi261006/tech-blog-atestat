const form = document.getElementById("authForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("username", username); 
            form.reset();
            window.location.href = "../home/home.html"; 
        } else {
            errorMsg.textContent = data.message;
        }
    } catch (err) {
        errorMsg.textContent = "Eroare server!";
        console.error(err);
    }
});
