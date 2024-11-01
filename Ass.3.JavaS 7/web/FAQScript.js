//FAQ
let questions = document.querySelectorAll(".ASK__question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        let parent = question.parentElement;
        parent.classList.toggle("active");
    });
});

let image = parent.querySelector('.ASK__image');
        if (parent.classList.contains('active')) {
            image.style.display = "block"; 
        } else {
            image.style.display = "none"; 
        }
        
popupBtn.onclick = function() {
    popupForm.style.display = "flex";  
}

closePopup.onclick = function() {
    popupForm.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}

function aaa() {
    var element = document.body;
    element.classList.toggle("change-mode");
}


document.addEventListener("DOMContentLoaded", function () {
    const themeToggleSwitch = document.getElementById("theme-toggle-switch");
    const body = document.body;

    // Load the theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light-mode";
    body.classList.add(currentTheme);
    themeToggleSwitch.checked = currentTheme === "dark-mode";

    // Toggle theme and save preference in localStorage
    themeToggleSwitch.addEventListener("change", function () {
        if (themeToggleSwitch.checked) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });
});
