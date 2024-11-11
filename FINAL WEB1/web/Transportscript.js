function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',  
        hour12: false        
    };
    document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
}

window.onload = function() {
    updateDateTime(); 
    setInterval(updateDateTime, 1000); 
};

const popupForm = document.getElementById("popup-form");
const popupBtn = document.getElementById("popup-btn");
const closePopup = document.getElementById("close-popup");
const languageSelector = document.getElementById("language-selector");

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



// First, let's select all navigation items
const navItems = document.querySelectorAll('.navbar .nav-link');
let currentIndex = 0;

// Add keyboard event listener to the document
document.addEventListener('keydown', function(event) {
    // Handle arrow key navigation
    switch(event.key) {
        case 'ArrowUp':
            event.preventDefault(); // Prevent page scrolling
            navigateMenu('up');
            break;
        case 'ArrowDown':
            event.preventDefault(); // Prevent page scrolling
            navigateMenu('down');
            break;
        case 'Enter':
            // Activate the currently focused item
            navItems[currentIndex].click();
            break;
    }
});

// Function to handle menu navigation
function navigateMenu(direction) {
    // Remove focus from current item
    navItems[currentIndex].blur();
    
    if (direction === 'up') {
        // Move up in the menu
        currentIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
    } else if (direction === 'down') {
        // Move down in the menu
        currentIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    // Focus on the new current item
    navItems[currentIndex].focus();
}

// Add visual feedback for focused items
navItems.forEach(item => {
    // Add tabindex to make items focusable
    item.setAttribute('tabindex', '0');
    
    // Add focus styling
    item.addEventListener('focus', function() {
        this.style.backgroundColor = '#e9ecef';
        this.style.outline = '2px solid #0d6efd';
    });
    
    // Remove focus styling
    item.addEventListener('blur', function() {
        this.style.backgroundColor = '';
        this.style.outline = '';
    });
});


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
            title: "Transportation",
            transportationOptions: "Transportation Options",
            flights: "Flights",
            flightsDesc: "Explore various airlines and book flights that suit your needs. Ensure to check for best deals and flight durations.",
            trains: "Trains",
            trainsDesc: "Enjoy scenic views and comfort with various train options. Check schedules and book tickets in advance.",
            carRentals: "Car Rentals",
            carRentalsDesc: "Rent a car for flexibility and convenience during your trip. Compare rental agencies and choose the best option.",
            transportMap: "Transport Map",
            footerText: "Created by Zhanel and Zhaniya | Contact: info@touristguide.com",
        },
        ru: {
            navbarBrand: 'Лучший туристический гид',
            title: "Транспорт",
            transportationOptions: "Варианты транспорта",
            flights: "Авиарейсы",
            flightsDesc: "Изучите различные авиакомпании и бронируйте рейсы, которые подходят для ваших нужд. Проверьте лучшие предложения и продолжительность рейсов.",
            trains: "Поезда",
            trainsDesc: "Наслаждайтесь живописными видами и комфортом с различными вариантами поездов. Проверьте расписание и бронируйте билеты заранее.",
            carRentals: "Аренда автомобилей",
            carRentalsDesc: "Арендуйте автомобиль для гибкости и удобства во время поездки. Сравните агентства по аренде и выберите лучший вариант.",
            transportMap: "Карта транспорта",
            footerText: "Создано Жанель и Жанией | Контакт: info@touristguide.com",
        },
        kk: {
            navbarBrand: 'Үздік туристік гид',
            title: "Көлік",
            transportationOptions: "Көлік мүмкіндіктері",
            flights: "Әуе рейстері",
            flightsDesc: "Әртүрлі авиакомпанияларды зерттеп, сізге ыңғайлы рейстерді брондаңыз. Ең жақсы ұсыныстар мен рейс уақыттарын тексеріңіз.",
            trains: "Поездар",
            trainsDesc: "Түрлі поезд нұсқаларымен көркем көріністер мен жайлылықты тамашалаңыз. Кестелерді тексеріп, билеттерді алдын ала брондаңыз.",
            carRentals: "Автокөлік жалға алу",
            carRentalsDesc: "Сапарыңызда икемділік пен қолайлылық үшін автокөлік жалға алыңыз. Жалға беру агенттіктерін салыстырып, ең жақсы нұсқаны таңдаңыз.",
            transportMap: "Көлік картасы",
            footerText: "Жанель және Жания жасаған | Байланыс: info@touristguide.com",
        }
    };


    const navbarBrandElement = document.getElementById('navbar-brand');
    const footerTextElement = document.getElementById('footer-text');
    const datetimeLabelElement = document.getElementById('datetime');
    const languageSelector = document.getElementById('language-selector');

    function updateLanguage(language) {
        if (translations[language]) {
            navbarBrandElement.textContent = translations[language].navbarBrand;
            footerTextElement.innerHTML = translations[language].footerText + 
                ' <a href="mailto:info@touristguide.com">info@touristguide.com</a>';
            datetimeLabelElement.textContent = translations[language].datetimeLabel;
        }
    }

    // Set default language on load
    document.addEventListener('DOMContentLoaded', () => {
        const defaultLanguage = 'en';
        updateLanguage(defaultLanguage);
        languageSelector.value = defaultLanguage;
    });

    // Change language on user selection
    languageSelector.addEventListener('change', (event) => {
        updateLanguage(event.target.value);
    });

    // Apply translations to elements
    document.title = translations[language].title;
    document.querySelector('h2.text-center.mb-4').textContent = translations[language].transportationOptions;
    
    document.querySelectorAll('.card-title')[0].textContent = translations[language].flights;
    document.querySelectorAll('.card-text')[0].textContent = translations[language].flightsDesc;
    
    document.querySelectorAll('.card-title')[1].textContent = translations[language].trains;
    document.querySelectorAll('.card-text')[1].textContent = translations[language].trainsDesc;
    
    document.querySelectorAll('.card-title')[2].textContent = translations[language].carRentals;
    document.querySelectorAll('.card-text')[2].textContent = translations[language].carRentalsDesc;
    
    document.querySelector('.map-container h3').textContent = translations[language].transportMap;
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



//translate menu 
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    const offcanvasTitle = document.getElementById("offcanvasNavbarLabel");
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Преобразование текста на основании выбранного языка
    const languageData = {
        en: {
            menuTitle: "Menu",
            home: "Home",
            hotels: "Hotels",
            transportation: "Transportation",
            information: "Information",
            topDestinations: "Top Destinations",
            travelTips: "Travel Tips",
            contactUs: "Contact Us",
        },
        ru: {
            menuTitle: "Меню",
            home: "Главная",
            hotels: "Отели",
            transportation: "Транспорт",
            information: "Информация",
            topDestinations: "Топ направления",
            travelTips: "Советы по путешествиям",
            contactUs: "Контакт",
        },
        kk: {
            menuTitle: "Мәзір",
            home: "Басты бет",
            hotels: "Отельдер",
            transportation: "Көлік",
            information: "Ақпарат",
            topDestinations: "Топ бағыттар",
            travelTips: "Саяхат туралы кеңестер",
            contactUs: "Байланыс",
        }
    };

    // Функция для изменения языка
    function changeLanguage(language) {
        // Обновление текста в меню и на навигационных ссылках
        offcanvasTitle.textContent = languageData[language].menuTitle;

        navLinks[0].textContent = languageData[language].home;
        navLinks[1].textContent = languageData[language].hotels;
        navLinks[2].textContent = languageData[language].transportation;
        navLinks[3].textContent = languageData[language].information;
        navLinks[4].textContent = languageData[language].topDestinations;
        navLinks[5].textContent = languageData[language].travelTips;
        navLinks[6].textContent = languageData[language].contactUs;

        // Сохранить выбранный язык в localStorage
        localStorage.setItem('selectedLanguage', language);
    }

    // Получаем язык из localStorage при загрузке страницы
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Если нет сохраненного языка, по умолчанию 'en'
    changeLanguage(savedLanguage); // Применяем сохраненный язык

    // Устанавливаем значение селектора в соответствии с сохраненным языком
    languageSelector.value = savedLanguage;

    // Обработчик события для изменения языка
    languageSelector.addEventListener('change', function (event) {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    });
});
