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
            navbarBrand: 'Ultimate Tourist Guide',
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
            loadMore: "Load More",
            footerText: 'Created by Zhanel and Zhaniya | Contact:',
            datetimeLabel: 'Date and Time:'
        },
        ru: {
            navbarBrand: 'Лучший туристический гид',
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
            loadMore: "Загрузить еще",
            footerText: 'Создано Жанель и Жанией | Контакт:',
            datetimeLabel: 'Дата и Время:'
        },
        kk: {
            navbarBrand: 'Үздік туристік гид',
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
            loadMore: "Көбірек жүктеу",
            footerText: 'Жанель және Жания жасаған | Байланыс:',
            datetimeLabel: 'Күні мен Уақыты:'
        }
    };

    const data = translations[language];

    // Update text content
    if (document.getElementById('navbar-brand')) {
        document.getElementById('navbar-brand').textContent = data.navbarBrand;
    }
    if (document.getElementById("searchHotelsHeading")) {
        document.getElementById("searchHotelsHeading").textContent = data.searchHotels;
    }
    if (document.getElementById("destinationLabel")) {
        document.getElementById("destinationLabel").textContent = data.destination;
    }
    if (document.getElementById("checkinLabel")) {
        document.getElementById("checkinLabel").textContent = data.checkin;
    }
    if (document.getElementById("checkoutLabel")) {
        document.getElementById("checkoutLabel").textContent = data.checkout;
    }
    if (document.getElementById("guestsLabel")) {
        document.getElementById("guestsLabel").textContent = data.guests;
    }
    if (document.getElementById("searchBtn")) {
        document.getElementById("searchBtn").textContent = data.searchBtn;
    }
    if (document.getElementById("popularHotelsHeading")) {
        document.getElementById("popularHotelsHeading").textContent = data.popularHotels;
    }
    if (document.getElementById("loadMoreBtn")) {
        document.getElementById("loadMoreBtn").textContent = data.loadMore;
    }
    if (document.getElementById("hotelMapHeading")) {
        document.getElementById("hotelMapHeading").textContent = data.hotelMap;
    }

    // Update footer text
    const footerTextElement = document.getElementById('footer-text');
    if (footerTextElement) {
        footerTextElement.innerHTML = data.footerText + ' <a href="mailto:info@touristguide.com">info@touristguide.com</a>';
    }

    // Update date/time label
    const datetimeLabelElement = document.getElementById('datetime');
    if (datetimeLabelElement) {
        datetimeLabelElement.textContent = data.datetimeLabel;
    }

    // Update buttons with specific class
    const hotelMoreBtns = document.querySelectorAll('.card .btn-primary');
    hotelMoreBtns.forEach(btn => {
        btn.textContent = data.hotelMore;
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

//API
document.getElementById('weatherForm').addEventListener('submit', async function(event) {    
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'df4d8b0dc682ffdd62d09b1f9c1e8bca'; // Замените на ваш реальный API-ключ    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);       
         }
        const data = await response.json();        
        displayWeather(data);
    } catch (error) {        
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        console.error('Error fetching weather data:', error);    }
});
function displayWeather(data) {    
    const weatherContainer = document.getElementById('weatherResult');
    const { name, main, weather } = data;    
    weatherContainer.innerHTML = `
        <h2>Weather in ${name}</h2>        
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>        
        <p>Humidity: ${main.humidity}%</p>
    `;}