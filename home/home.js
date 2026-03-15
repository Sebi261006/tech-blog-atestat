const username = localStorage.getItem("username");

if (!username) {
    window.location.href = "../guest/guest.html";
} else {
    const header = document.querySelector(".header");
    const userSpan = document.createElement("span");
    userSpan.textContent = `Salut, ${username}!`;
    userSpan.style.marginLeft = "20px";
    userSpan.style.fontWeight = "bold";
    header.appendChild(userSpan);
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("username"); 
    window.location.href = "../guest/guest.html"; 
});
