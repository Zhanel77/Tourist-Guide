//Translate 
document.addEventListener("DOMContentLoaded", function () {
    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage(savedLanguage);

    // Listen for language changes
    document.getElementById('language-selector').addEventListener('change', function () {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        changeLanguage(selectedLanguage);
    });
});

function changeLanguage(language) {
    const translations = {
        en: {
            title: "Hotel Selection",
            searchHotels: "Search for Hotels",
            destination: "Destination",
            checkin: "Check-in Date",
            checkout: "Check-out Date",
            guests: "Guests",
            searchBtn: "Search",
            popularHotels: "Popular Hotels",
            hotelMap: "Hotel Map",
            hotelMore: "More",
            loadMore: "Load More"
        },
        ru: {
            title: "Выбор отеля",
            searchHotels: "Поиск отелей",
            destination: "Направление",
            checkin: "Дата заезда",
            checkout: "Дата выезда",
            guests: "Гости",
            searchBtn: "Поиск",
            popularHotels: "Популярные отели",
            hotelMap: "Карта отелей",
            hotelMore: "Подробнее",
            loadMore: "Загрузить еще"
        },
        kk: {
            title: "Қонақ үй таңдау",
            searchHotels: "Қонақ үйлерді іздеу",
            destination: "Бағыт",
            checkin: "Кіру күні",
            checkout: "Шығу күні",
            guests: "Қонақтар",
            searchBtn: "Іздеу",
            popularHotels: "Танымал қонақ үйлер",
            hotelMap: "Қонақ үй картасы",
            hotelMore: "Толығырақ",
            loadMore: "Көбірек жүктеу"
        }
    };

    document.title = translations[language].title;
    document.getElementById("searchHotelsHeading").textContent = translations[language].searchHotels;
    document.getElementById("destinationLabel").textContent = translations[language].destination;
    document.getElementById("checkinLabel").textContent = translations[language].checkin;
    document.getElementById("checkoutLabel").textContent = translations[language].checkout;
    document.getElementById("guestsLabel").textContent = translations[language].guests;
    document.getElementById("searchBtn").textContent = translations[language].searchBtn;
    document.getElementById("popularHotelsHeading").textContent = translations[language].popularHotels;
    document.getElementById("loadMoreBtn").textContent = translations[language].loadMore;
    document.getElementById("hotelMapHeading").textContent = translations[language].hotelMap;

    const hotelMoreBtns = document.querySelectorAll('.card .btn-primary');
    hotelMoreBtns.forEach(btn => {
        btn.textContent = translations[language].hotelMore;
    });
}

//FILTER
document.addEventListener('DOMContentLoaded', function () {
    // Загружаем фильтры при загрузке страницы
    loadFilterSettings();

    // Форма фильтрации отелей
    const hotelSearchForm = document.getElementById('hotelSearchForm');
    hotelSearchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Останавливаем отправку формы

        // Сохраняем текущие настройки фильтра
        const filterSettings = {
            destination: document.getElementById('destination').value,
            checkin: document.getElementById('checkin').value,
            checkout: document.getElementById('checkout').value,
            guests: document.getElementById('guests').value
        };
        saveFilterSettings(filterSettings);

        // Выполняем фильтрацию отелей (пример, можно заменить на реальный код)
        applyFilter(filterSettings);
    });
});

// Функция для сохранения настроек фильтра в localStorage
function saveFilterSettings(settings) {
    localStorage.setItem('hotelFilterSettings', JSON.stringify(settings));
}

// Функция для загрузки сохраненных настроек фильтра и их применения
function loadFilterSettings() {
    const savedSettings = localStorage.getItem('hotelFilterSettings');
    if (savedSettings) {
        const filterSettings = JSON.parse(savedSettings);

        // Применяем настройки к форме
        document.getElementById('destination').value = filterSettings.destination || '';
        document.getElementById('checkin').value = filterSettings.checkin || '';
        document.getElementById('checkout').value = filterSettings.checkout || '';
        document.getElementById('guests').value = filterSettings.guests || '';
    }
}

// Пример функции для применения фильтра (реализуйте собственную логику фильтрации)
function applyFilter(settings) {
    console.log("Применяем фильтры:", settings);
    // Реализация логики фильтрации здесь
}


//Login and Logout 
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
