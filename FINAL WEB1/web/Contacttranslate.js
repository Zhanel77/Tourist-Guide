//Translate
document.addEventListener('DOMContentLoaded', function () {
    // Language translations
    const translations = {
        en: {
            navbarBrand: 'Ultimate Tourist Guide',
            title: "Contact Us",
            nameLabel: "Your Name:",
            emailLabel: "Your Email:",
            messageLabel: "Your Message:",
            destinationLabel: "Favorite Destination:",
            submitButton: "Submit",
            responseMessage: "Thank you for your message!",
            footerText: 'Created by Zhanel and Zhaniya | Contact:',
            datetimeLabel: 'Date and Time:',
        },
        ru: {
            navbarBrand: 'Лучший туристический гид',
            title: "Свяжитесь с нами",
            nameLabel: "Ваше имя:",
            emailLabel: "Ваш адрес электронной почты:",
            messageLabel: "Ваше сообщение:",
            destinationLabel: "Любимое место:",
            submitButton: "Отправить",
            responseMessage: "Спасибо за ваше сообщение!",
            footerText: 'Создано Жанель и Жанией | Контакт:',
            datetimeLabel: 'Дата и Время:'
        },
        kk: {
            navbarBrand: 'Үздік туристік гид',
            title: "Бізге хабарласыңыз",
            nameLabel: "Сіздің атыңыз:",
            emailLabel: "Сіздің электрондық поштаңыз:",
            messageLabel: "Сіздің хабарламаңыз:",
            destinationLabel: "Таңдаулы орын:",
            submitButton: "Жіберу",
            responseMessage: "Хабарыңыз үшін рахмет!",
            footerText: 'Жанель және Жания жасаған | Байланыс:',
            datetimeLabel: 'Күні мен Уақыты:'
        }
    };

    function updateLanguage(language) {
        if (translations[language]) {
            // Update text content for elements if they exist
            const navbarBrandElement = document.getElementById('navbar-brand');
            if (navbarBrandElement) {
                navbarBrandElement.textContent = translations[language].navbarBrand;
            }

            const footerTextElement = document.getElementById('footer-text');
            if (footerTextElement) {
                footerTextElement.innerHTML = translations[language].footerText + 
                    ' <a href="mailto:info@touristguide.com">info@touristguide.com</a>';
            }

            const datetimeLabelElement = document.getElementById('datetime');
            if (datetimeLabelElement) {
                datetimeLabelElement.textContent = translations[language].datetimeLabel;
            }

            const titleElement = document.querySelector('h2');
            if (titleElement) {
                titleElement.textContent = translations[language].title;
            }

            const nameLabel = document.querySelector('label[for="name"]');
            if (nameLabel) {
                nameLabel.textContent = translations[language].nameLabel;
            }

            const emailLabel = document.querySelector('label[for="email"]');
            if (emailLabel) {
                emailLabel.textContent = translations[language].emailLabel;
            }

            const messageLabel = document.querySelector('label[for="message"]');
            if (messageLabel) {
                messageLabel.textContent = translations[language].messageLabel;
            }

            const destinationLabel = document.querySelector('label[for="destination"]');
            if (destinationLabel) {
                destinationLabel.textContent = translations[language].destinationLabel;
            }

            const submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = translations[language].submitButton;
            }

            const responseMessage = document.getElementById('response-message');
            if (responseMessage) {
                responseMessage.textContent = '';
            }
        }
    }

    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        // Set initial language
        const defaultLanguage = localStorage.getItem('selectedLanguage') || 'en';
        languageSelector.value = defaultLanguage;
        updateLanguage(defaultLanguage);

        // Change language on user selection
        languageSelector.addEventListener('change', function () {
            const selectedLanguage = this.value;
            localStorage.setItem('selectedLanguage', selectedLanguage);
            updateLanguage(selectedLanguage);
        });
    }
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
