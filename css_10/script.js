const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.getElementById("darkModeToggle").innerHTML = "🌙"
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
            document.getElementById("darkModeToggle").innerHTML = "☀️"
        }
    });
}