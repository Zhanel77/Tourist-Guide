        const popupForm = document.getElementById("popup-form");
        const popupBtn = document.getElementById("popup-btn");
        const closePopup = document.getElementById("close-popup");
        const languageSelector = document.getElementById("language-selector");

        function aaa() {
            var element = document.body;
            element.classList.toggle("change-mode");
        }

        document.getElementById("welcome-title").innerHTML = "Welcome to our website!";
        document.getElementById("destinations-title").innerHTML = "Top Destinations to Visit.";
        document.getElementById("tips-title").innerHTML = "Travel Tips for a Seamless Adventure.";
        document.getElementById('tips').style.background = 'white';
        

        // Language translations
        const translations = {
            en: {
                greeting: "Good morning!",
                mainTitle: "Discover the Best Destinations",
                mainDescription: "Explore top tourist attractions, hotels, and travel tips to make your journey unforgettable.",
                welcomeTitle: "Welcome to our website!",
                welcomeDescription: "We have collected information about the most popular and exciting places in the world for you to help you choose the perfect country to visit and select the best tour. Our website makes it easy to find affordable flights and tickets, as well as book hotels of all categories - from cozy budget options to luxury resorts. All the necessary services are collected in one place, so you do not have to worry about the details. Plan your trip in comfort and trust us - we have everything included for your convenience and unforgettable impressions!",
                destinationsTitle: "Top Destinations to Visit.",
                destinationsDescription: "Explore some of the most beautiful and popular destinations around the world, from breathtaking mountains to pristine beaches, bustling cities to serene countryside.",
                tipsTitle: "Travel Tips for a Seamless Adventure.",
                footerText: "Created by Zhanel and Zhaniya | Contact: info@touristguide.com",
            },
            ru: {
                greeting: "Доброе утро!",
                mainTitle: "Откройте для себя лучшие направления",
                mainDescription: "Изучите основные туристические достопримечательности, отели и советы по путешествиям, чтобы сделать ваше путешествие незабываемым.",
                welcomeTitle: "Добро пожаловать на наш сайт!",
                welcomeDescription: "Мы собрали информацию о самых популярных и интересных местах мира, чтобы помочь вам выбрать идеальную страну для посещения и выбрать лучший тур. Наш сайт упрощает поиск доступных авиабилетов и билетов, а также бронирование отелей всех категорий - от уютных бюджетных вариантов до роскошных курортов. Все необходимые услуги собраны в одном месте, так что вам не нужно беспокоиться о деталях. Планируйте свою поездку с комфортом и доверьтесь нам - у нас есть все для вашего удобства и незабываемых впечатлений!",
                destinationsTitle: "Лучшие направления для посещения.",
                destinationsDescription: "Исследуйте одни из самых красивых и популярных мест в мире, от захватывающих дух гор до нетронутых пляжей, от бурлящих городов до спокойной деревни.",
                tipsTitle: "Советы по путешествиям для беспроблемного приключения.",
                footerText: "Создано Жанель и Жанией | Контакт: info@touristguide.com",
            },
            kk: {
                greeting: "Қайырлы таң!",
                mainTitle: "Ең жақсы бағыттарды ашыңыз",
                mainDescription: "Сіздің саяхатыңызды ұмытылмас ету үшін туристік көрнекті жерлерді, қонақүйлерді және саяхат туралы кеңестерді зерттеңіз.",
                welcomeTitle: "Біздің веб-сайтымызға қош келдіңіз!",
                welcomeDescription: "Біз сіздерге бару үшін тамаша елді таңдап, ең жақсы турды таңдауға көмектесу үшін әлемдегі ең танымал және қызықты жерлер туралы ақпарат жинадық. Біздің веб-сайтымыз сіздерге қолжетімді әуе билеттері мен билеттерді табуды, сонымен қатар барлық санаттағы - жайлы бюджеттік нұсқалардан бастап, люкс курорттарға дейін қонақүйлерді брондауды жеңілдетеді. Барлық қажетті қызметтер бір жерде жинақталған, сондықтан сіздерге бөлшектер туралы алаңдаудың қажеті жоқ. Саяхатыңызды жайлы жоспарлаңыз және бізге сеніңіз - біз сіздің жайлылығыңыз бен ұмытылмас әсерлеріңіз үшін бәрін қамтыдық!",
                destinationsTitle: "Баруға арналған үздік бағыттар.",
                destinationsDescription: "Сіздердің саяхатыңызды ұмытылмас ету үшін туристік көрнекті жерлерді, қонақүйлерді және саяхат туралы кеңестерді зерттеңіз.",
                tipsTitle: "Саяхат үшін оңайлықпен жұмсалған кеңестер.",
                footerText: "Zhanel және Zhaniya жасаған | Байланыс: info@touristguide.com",
            }
        };

        // Language change event
        languageSelector.addEventListener("change", function() {
            const selectedLanguage = this.value;
            updateContent(selectedLanguage);
        });

        function updateContent(lang) {
            const data = translations[lang];
            document.getElementById('greeting').textContent = data.greeting;
            document.getElementById('main-title').textContent = data.mainTitle;
            document.getElementById('main-description').textContent = data.mainDescription;
            document.getElementById('welcome-title').textContent = data.welcomeTitle;
            document.getElementById('welcome-description').textContent = data.welcomeDescription;
            document.getElementById('destinations-title').textContent = data.destinationsTitle;
            document.getElementById('destinations-description').textContent = data.destinationsDescription;
            document.getElementById('tips-title').textContent = data.tipsTitle;
            document.getElementById('footer-text').textContent = data.footerText;
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


//TIME 
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

        // JavaScript for rating system STAR
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach(s => s.style.color = 'black'); 
                for (let i = 0; i <= index; i++) {
                    stars[i].style.color = 'gold'; 
                }
                document.getElementById('rating-output').textContent = `You rated ${index + 1} stars!`;
            });
        });

        // JavaScript for time-based greeting
        const currentHour = new Date().getHours();
        let greeting;
        switch (true) {
          case (currentHour < 12):
            greeting = "Good morning!";
            break;
          case (currentHour < 18):
            greeting = "Good afternoon!";
            break;
          default:
            greeting = "Good evening!";
            break;
        }
      
        document.getElementById('greeting').textContent = greeting;

// Index Audio
const authSound = document.getElementById('AuthSound');

// Add click event listener to the login button
document.getElementById('auth-btn').addEventListener('click', function() {
    // Attempt to play the sound
    if (authSound) {
        authSound.currentTime = 0; // Restart the sound if it was already played
        authSound.play()
            .then(() => console.log('Sound played successfully'))
            .catch(error => {
                console.error('Error playing sound:', error);
            });
    }
});


// First, let's select all navigation items
const navItems = document.querySelectorAll('.navbar-menu .nav-link');
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


//  FILTER SETTINGs 
function saveFilterSettings(filters) {
    localStorage.setItem("filterSettings", JSON.stringify(filters));
}

// Function to load filter settings from local storage
function loadFilterSettings() {
    const savedFilters = localStorage.getItem("filterSettings");
    return savedFilters ? JSON.parse(savedFilters) : null;
}

// Apply the loaded filter settings to the page
function applyFilterSettings(filters) {
    if (!filters) return;

    // Assuming filters is an object like { 'filterType': 'value' }
    Object.keys(filters).forEach(filterType => {
        const filterElement = document.getElementById(filterType);
        if (filterElement) {
            filterElement.value = filters[filterType];
        }
    });
}

// Example: Call this function when filters change (e.g., when user selects a filter)
document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('change', () => {
        const filters = {};
        document.querySelectorAll('.filter').forEach(f => {
            filters[f.id] = f.value;
        });
        saveFilterSettings(filters);
    });
});

// Load and apply filters when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    const filters = loadFilterSettings();
    applyFilterSettings(filters);
});

//Dark MOde
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle-btn");

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleButton.classList.add("dark"); // Optional class for dark mode styling if needed
    }

    // Toggle theme
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }

    // Add event listener
    themeToggleButton.addEventListener("click", toggleTheme);
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

//prof
document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.getElementById("profile-link");
    const logoutLink = document.getElementById("logout-link");

    // Check login status and show the appropriate link
    function checkLoginStatus() {
        const username = localStorage.getItem("username");
        if (username) {
            profileLink.style.display = "inline-block";
            logoutLink.style.display = "inline-block";
        } else {
            profileLink.style.display = "none";
            logoutLink.style.display = "none";
        }
    }

    checkLoginStatus();

    // Handle logout
    logoutLink.addEventListener("click", function () {
        localStorage.removeItem("username");
        checkLoginStatus();
    });
});
