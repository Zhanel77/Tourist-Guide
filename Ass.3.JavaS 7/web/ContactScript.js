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
