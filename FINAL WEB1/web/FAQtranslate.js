//Translate 
document.addEventListener("DOMContentLoaded", function () {
    // Загружаем сохраненный язык или ставим по умолчанию английский
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage(savedLanguage);

    // Слушатель для изменения языка
    document.getElementById('language-selector').addEventListener('change', function () {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        changeLanguage(selectedLanguage);
    });
});

function changeLanguage(language) {
    const translations = {
        en: {
            faqTitle: "Question",
            question1: "1. How can I book a hotel and tour date?",
            answer1: "You can book a hotel and tour through travel agencies: Many agencies offer package tours where you can immediately choose a hotel and tour with flights and excursions included. On our website, you will find the 'Hotel' and 'Transport' tabs where you can also book a hotel and dates. Additionally, you can book directly on hotel websites.",
            question2: "2. Where is the best place to go on holiday in winter?",
            answer2: "Both warm and snowy destinations are popular for winter holidays: Maldives, Thailand, and the UAE are ideal for a beach holiday with warm seas and wonderful weather. Alternatively, ski resorts in Switzerland, Austria, and France (the Alps) are great for winter sports.",
            question3: "3. Where can I go with my family?",
            answer3: "The following destinations are ideal for family vacations: Spain (Costa Brava, Canary Islands) offers a warm sea and entertainment for all ages. France (Disneyland in Paris) is perfect for children. Turkey (Antalya, Kemer) has family-friendly hotels with animation and water parks.",
            question4: "4. What are the best destinations for active tourism?",
            answer4: "Popular destinations for active tourism include Nepal (Himalayas, trekking), New Zealand (hiking, water sports), Norway (fjords trekking), Peru (Machu Picchu trekking), Canada (mountaineering, national parks), and Iceland (glacial caves, geysers).",
            question5: "5. Which countries are best for solo travel and which for family travel?",
            answer5: "For solo travel, Japan, New Zealand, Canada, Portugal, and Iceland are considered safe and convenient. For family travel, it’s best to go to places with well-developed infrastructure and entertainment, like Spain, Italy, France, or Australia.",
            question6: "6. Which countries are the safest for tourists in 2024?",
            answer6: "The safest countries for tourists in 2024 include Iceland, New Zealand, Japan, Portugal, Switzerland, Austria, and Denmark, known for low crime rates and stable political environments."
        },
        ru: {
            faqTitle: "Вопрос",
            question1: "1. Как я могу забронировать отель и дату тура?",
            answer1: "Вы можете забронировать отель и тур через туристические агентства: Многие агентства предлагают пакетные туры, где можно сразу выбрать отель и даты с включенными перелетами и экскурсиями. На нашем сайте в разделе 'Отель' и 'Транспорт' также можно забронировать отель и даты. Вы также можете забронировать номер напрямую на сайте отеля.",
            question2: "2. Куда лучше поехать на отдых зимой?",
            answer2: "Для зимнего отдыха популярны как теплые, так и снежные направления: Мальдивы, Таиланд и ОАЭ — идеальные места для пляжного отдыха зимой с теплым морем и прекрасной погодой. Также популярны горнолыжные курорты в Швейцарии, Австрии и Франции (Альпы) для зимних видов спорта.",
            question3: "3. Куда я могу поехать с семьей?",
            answer3: "Следующие направления идеально подходят для семейного отдыха: Испания (Коста-Брава, Канарские острова) с теплым морем и развлечениями для детей и взрослых. Франция (Диснейленд в Париже) — идеальное место для детей. Турция (Анталия, Кемер) с семейными отелями, анимацией и аквапарками.",
            question4: "4. Какие лучшие места для активного туризма?",
            answer4: "Популярные направления для активного отдыха включают Непал (Гималаи, треккинг), Новую Зеландию (пеший туризм, водные виды спорта), Норвегию (треккинг по фьордам), Перу (поход к Мачу-Пикчу), Канаду (альпинизм, национальные парки) и Исландию (ледниковые пещеры, гейзеры).",
            question5: "5. Какие страны лучше подходят для одиночного и семейного путешествия?",
            answer5: "Для одиночных поездок лучше всего подходят Япония, Новая Зеландия, Канада, Португалия и Исландия, которые считаются безопасными и удобными. Для семейного отдыха подходят страны с развитой инфраструктурой и развлечениями, такие как Испания, Италия, Франция или Австралия.",
            question6: "6. Какие страны самые безопасные для туристов в 2024 году?",
            answer6: "Самыми безопасными странами для туристов в 2024 году считаются Исландия, Новая Зеландия, Япония, Португалия, Швейцария, Австрия и Дания, известные низким уровнем преступности и стабильной политической обстановкой."
        },
        kk: {
            faqTitle: "Сұрақ",
            question1: "1. Қонақ үй мен тур күнін қалай брондауға болады?",
            answer1: "Сіз қонақ үй мен турды туристік агенттіктер арқылы брондауға болады: Көптеген агенттіктерде қонақ үй мен турды бірден таңдауға болатын пакет турлары бар, онда ұшу және экскурсиялар қамтылған. Біздің сайтта 'Қонақ үй' және 'Көлік' бөлімдерінен қонақ үйді және күндерді брондауға болады. Сондай-ақ, қонақ үй сайтында тікелей брондау жасай аласыз.",
            question2: "2. Қыста демалысқа қайда бару керек?",
            answer2: "Қыста демалыс үшін жылы және қарлы бағыттар да танымал: Мальдивтер, Таиланд және БАӘ жылы теңіз және тамаша ауа-райымен қыстағы жағажай демалысы үшін тамаша орындар. Сондай-ақ, Швейцариядағы, Австриядағы және Франциядағы (Альпі) тау шаңғысы курорттары қысқы спорт түрлеріне тамаша.",
            question3: "3. Отбасыммен қайда бара аламын?",
            answer3: "Келесі бағыттар отбасылық демалыс үшін тамаша: Испания (Коста-Брава, Канар аралдары) жылы теңізі және барлық жастағы адамдарға арналған ойын-сауықтары бар. Франция (Париждегі Диснейленд) балалар үшін тамаша орын. Түркия (Анталия, Кемер) анимациясы және аквапарктері бар отбасылық қонақүйлер ұсынады.",
            question4: "4. Белсенді туризмге арналған ең жақсы бағыттар қандай?",
            answer4: "Белсенді туризм үшін танымал бағыттар: Непал (Гималай, жаяу туризм), Жаңа Зеландия (жаяу жүру, су спорт түрлері), Норвегия (фьордтарда жаяу серуендеу), Перу (Мачу-Пикчуға саяхат), Канада (тау шаңғысы, ұлттық парктер) және Исландия (мұзды үңгірлер, гейзерлер).",
            question5: "5. Жалғыз саяхатқа және отбасылық саяхатқа қай елдер жақсы?",
            answer5: "Жеке саяхат үшін Жапония, Жаңа Зеландия, Канада, Португалия және Исландия қауіпсіз және ыңғайлы болып саналады. Отбасылық саяхат үшін Испания, Италия, Франция немесе Австралия сияқты дамыған инфрақұрылымы мен ойын-сауықтары бар елдер қолайлы.",
            question6: "6. 2024 жылы туристер үшін ең қауіпсіз елдер қайсысы?",
            answer6: "2024 жылы туристер үшін ең қауіпсіз елдерге Исландия, Жаңа Зеландия, Жапония, Португалия, Швейцария, Австрия және Дания кіреді, олар қылмыс деңгейі төмен және саяси тұрақтылыққа ие."
        }
    };
    // Перевод заголовка и вопросов
    document.getElementById("faqTitle").textContent = translations[language].faqTitle;

    

    const questions = document.querySelectorAll(".ASK__question p");
    const answers = document.querySelectorAll(".ASK__answer p");

    questions.forEach((el, index) => {
        const questionKey = `question${index + 1}`;
        if (translations[language][questionKey]) {
            el.textContent = translations[language][questionKey];
        }
    });

    answers.forEach((el, index) => {
        const answerKey = `answer${index + 1}`;
        if (translations[language][answerKey]) {
            el.textContent = translations[language][answerKey];
        }
    });

    // Apply translations to elements
    document.getElementById("faqTitle").textContent = translations[language].faqTitle;
    document.getElementById("question1").textContent = translations[language].question1;
    document.getElementById("answer1").textContent = translations[language].answer1;
    document.getElementById("question2").textContent = translations[language].question2;
    document.getElementById("answer2").textContent = translations[language].answer2;
    document.getElementById("question3").textContent = translations[language].question3;
    document.getElementById("answer3").textContent = translations[language].answer3;
    document.getElementById("question4").textContent = translations[language].question4;
    document.getElementById("answer4").textContent = translations[language].answer4;
    document.getElementById("question5").textContent = translations[language].question5;
    document.getElementById("answer5").textContent = translations[language].answer5;
    document.getElementById("question6").textContent = translations[language].question6;
    document.getElementById("answer6").textContent = translations[language].answer6;
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


//DARK MODE
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
