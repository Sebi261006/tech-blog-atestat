const form = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert(data.message);
            form.reset();
             window.location.href = "../log_in/log.html";
        } else {
            errorMsg.textContent = data.message;
        }
    } catch (err) {
        errorMsg.textContent = "Eroare server!";
        console.error(err);
    }
});
