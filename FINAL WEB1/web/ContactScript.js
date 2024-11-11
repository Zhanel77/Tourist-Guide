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

    // Form validation logic
    document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    let isValid = true;

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const destination = document.getElementById('destination').value.trim();

    
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    document.getElementById('destination-error').textContent = '';

    // Validation
    if (name === '') {
        isValid = false;
        document.getElementById('name-error').textContent = 'Please enter your name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    }

   
    if (message === '') {
        isValid = false;
        document.getElementById('message-error').textContent = 'Please enter a message.';
    }

    if (destination === '') {
        isValid = false;
        document.getElementById('destination-error').textContent = 'Please select a destination.';
    }

    if (isValid) {
        document.getElementById('response-message').textContent = 'Form submitted successfully!';
        document.getElementById('response-message').style.color = 'green';
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('response-message').textContent = 'Please fix the errors above.';
        document.getElementById('response-message').style.color = 'red';
    }
});

function aaa() {
    var element = document.body;
    element.classList.toggle("change-mode");
}
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
