document.addEventListener("DOMContentLoaded", function () {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));

    // Log the saved profile to check its contents
    console.log("Loaded profile from localStorage:", savedProfile);

    if (savedProfile) {
        document.getElementById("name").value = savedProfile.name || ""; // Correctly use 'name'
        document.getElementById("email").value = savedProfile.email || "";
        document.getElementById("dob").value = savedProfile.dob || "";
    }

    // Save profile to local storage on form submission
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const username = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const dob = document.getElementById("dob").value;
    
        // Password confirmation validation
        if (password !== confirmPassword) {
            responseMessage.textContent = "Passwords do not match!";
            return;
        }
    
        // Save profile data
        const profileData = { name, email, dob };
    
        // Log profile data to console to check what is being saved
        console.log("Saving profile data:", profileData);
    
        localStorage.setItem("userProfile", JSON.stringify(profileData));
    
        // Play audio when profile is saved successfully
        if (audio) {
            audio.currentTime = 0; // Restart the audio from the beginning
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    
        responseMessage.textContent = "Profile saved successfully!";
    });
});

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
