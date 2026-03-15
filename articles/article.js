const username = localStorage.getItem("username");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const commentFormWrapper = document.getElementById("commentFormWrapper");
const commentMsg = document.getElementById("commentMsg");
const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

if (!username) {
    if (logoutBtn) logoutBtn.style.display = "none"; 
    if (commentFormWrapper) commentFormWrapper.style.display = "none";
    if (commentMsg) commentMsg.textContent = "Trebuie să fii logat pentru a adăuga comentarii.";
} else {
    if (loginBtn) loginBtn.style.display = "none"; 
}

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = "../log_in/log.html";
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("username");
        window.location.href = "../guest/guest.html";
    });
}

if (commentBtn) {
    commentBtn.addEventListener("click", () => {
        if (!username) {
            alert("Trebuie să fii logat pentru a adăuga comentarii!");
            return;
        }

        const comment = commentInput.value.trim();
        if (!comment) return;

        const li = document.createElement("li");
        li.textContent = `${username}: ${comment}`;
        commentsList.appendChild(li);

        commentInput.value = "";
    });
}
