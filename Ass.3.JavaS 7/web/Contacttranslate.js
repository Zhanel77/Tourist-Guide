//Translate
document.addEventListener('DOMContentLoaded', function () {
    // Language translations
    const translations = {
        en: {
            title: "Contact Us",
            nameLabel: "Your Name:",
            emailLabel: "Your Email:",
            messageLabel: "Your Message:",
            destinationLabel: "Favorite Destination:",
            submitButton: "Submit",
            responseMessage: "Thank you for your message!",
        },
        ru: {
            title: "Свяжитесь с нами",
            nameLabel: "Ваше имя:",
            emailLabel: "Ваш адрес электронной почты:",
            messageLabel: "Ваше сообщение:",
            destinationLabel: "Любимое место:",
            submitButton: "Отправить",
            responseMessage: "Спасибо за ваше сообщение!",
        },
        kk: {
            title: "Бізге хабарласыңыз",
            nameLabel: "Сіздің атыңыз:",
            emailLabel: "Сіздің электрондық поштаңыз:",
            messageLabel: "Сіздің хабарламаңыз:",
            destinationLabel: "Таңдаулы орын:",
            submitButton: "Жіберу",
            responseMessage: "Хабарыңыз үшін рахмет!",
        }
    };

    function updateLanguage(lang) {
        try {
            document.querySelector('h2').textContent = translations[lang].title;
            document.querySelector('label[for="name"]').textContent = translations[lang].nameLabel;
            document.querySelector('label[for="email"]').textContent = translations[lang].emailLabel;
            document.querySelector('label[for="message"]').textContent = translations[lang].messageLabel;
            document.querySelector('label[for="destination"]').textContent = translations[lang].destinationLabel;
            document.querySelector('button[type="submit"]').textContent = translations[lang].submitButton;
            document.getElementById('response-message').textContent = '';
        } catch (error) {
            console.error("Error updating language: ", error);
        }
    }

    function initializePage() {
        // Set initial language to English
        updateLanguage('en');
        // Event listener for language selector
        document.getElementById('language-selector').addEventListener('change', function (event) {
            updateLanguage(event.target.value);
        });
    }

    // Run initialization
    initializePage();
});

//STAR
document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    const ratingOutput = document.getElementById("rating-output");

    stars.forEach((star) => {
        star.addEventListener("click", () => {
            const rating = star.getAttribute("data-value");
            ratingOutput.textContent = rating;

            // Remove "selected" class from all stars
            stars.forEach(s => s.classList.remove("selected"));

            // Add "selected" class to the clicked star and all previous stars
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("selected");
            }
        });
    });
});


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

//login
document.addEventListener("DOMContentLoaded", function () {
    const popupForm = document.getElementById("popup-form");
    const popupBtn = document.getElementById("popup-btn");
    const closePopup = document.getElementById("close-popup");
    const authBtn = document.getElementById("auth-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const authSound = document.getElementById("AuthSound");

    // Check login status
    function checkLoginStatus() {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (userProfile && userProfile.username) {
            alert(`Welcome back, ${userProfile.username}!`);
            popupBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";
        } else {
            popupBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    // Show login form
    popupBtn.addEventListener("click", () => {
        popupForm.style.display = "flex";
    });

    // Close login form
    closePopup.addEventListener("click", () => {
        popupForm.style.display = "none";
    });

    // Handle login/registration
    authBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!username || !email || !dob || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userProfile = { username, email, dob, password };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        if (authSound) {
            authSound.currentTime = 0;
            authSound.play().catch(error => {
                console.error('Error playing sound:', error);
            });
        }

        popupForm.style.display = "none";
        checkLoginStatus();
    });

    // Handle logout
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("userProfile");
        if (authSound) {
            authSound.currentTime = 0;
            authSound.play().catch(error => {
                console.error('Error playing sound:', error);
            });
        }
        checkLoginStatus();
    });

    // Close form when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    checkLoginStatus(); // Initial check
});
