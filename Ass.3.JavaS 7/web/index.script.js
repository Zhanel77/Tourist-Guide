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

        // JavaScript for rating system
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

    //Index Audio 
    const subscribeSound = document.getElementById('SubscribeSound');

    
     
    // Add click event listener to the button
    document.getElementById('subscribe-btn').addEventListener('click', function() {

    // Play the sound
    subscribeSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });

});



// First, let's select all navigation items
const navItems = document.querySelectorAll('.navbar-nav .nav-link');
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

document.addEventListener("DOMContentLoaded", function() {
    const authBtn = document.getElementById('auth-btn');
    
    if (authBtn) {
        authBtn.addEventListener('click', function() {
            console.log('Auth button clicked'); // Для отладки
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                localStorage.setItem('username', username);
                console.log('Login successful'); // Для отладки
                // Здесь код для воспроизведения звука и обновления UI
                document.getElementById('popup-form').style.display = 'none';
                checkLoginStatus(); // Убедитесь, что эта функция определена
            } else {
                console.log('Login failed'); // Для отладки
                alert('Please enter both username and password');
            }
        });
    } else {
        console.error('Auth button not found'); // Для отладки
    }

    // Остальной код...
});
document.addEventListener("DOMContentLoaded", function() {
    const popupBtn = document.getElementById('popup-btn');
    const popupForm = document.getElementById('popup-form');
    const closePopup = document.getElementById('close-popup');
    const authBtn = document.getElementById('auth-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const authSound = document.getElementById('AuthSound');

    // Check if the user is already logged in
    function checkLoginStatus() {
        const username = localStorage.getItem('username');
        if (username) {
            popupBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            alert(`Welcome back, ${username}!`);
        } else {
            popupBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
        }
    }

    // Call checkLoginStatus on page load
    checkLoginStatus();

    // Show login form
    popupBtn.addEventListener('click', function() {
        popupForm.style.display = 'block';
    });

    // Close popup
    closePopup.addEventListener('click', function() {
        popupForm.style.display = 'none';
    });

    // Handle login
    authBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For demonstration, we will not validate the password
        if (username) {
            localStorage.setItem('username', username);
            authSound.play();
            popupForm.style.display = 'none';
            checkLoginStatus();
        } else {
            alert('Please enter a username.');
        }
    });

    // Handle logout
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('username');
        authSound.play();
        checkLoginStatus();
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
