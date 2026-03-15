const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentContainer = document.getElementById("comments");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");


const username = localStorage.getItem("username");

if (!username) {
    
    if (commentForm) commentForm.style.display = "none";

    
    const commentMsg = document.getElementById("commentMsg");
    if (commentMsg) commentMsg.textContent = "Trebuie să fii logat pentru a adăuga comentarii.";

   
    if (logoutBtn) logoutBtn.style.display = "none";

    
    if (loginBtn) {
        loginBtn.style.display = "inline-block";
        loginBtn.addEventListener("click", () => {
            window.location.href = "../log_in/log.html";
        });
    }
} else {
  
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) {
        logoutBtn.style.display = "inline-block";
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("username");
            window.location.href = "../guest/guest.html";
        });
    }
}


if (username && commentForm && commentInput && commentContainer) {
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const comment = commentInput.value.trim();
        if (!comment) return;

        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p><strong>${username}:</strong> ${comment}</p>`;
        commentContainer.appendChild(newComment);

        commentInput.value = "";
    });
}
