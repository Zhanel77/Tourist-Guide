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

// Обработчик отправки формы
document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    let isValid = true;

    // Получаем значения полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const destination = document.getElementById('destination').value.trim();

    // Очищаем сообщения об ошибках
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    document.getElementById('destination-error').textContent = '';

    // Проверка на наличие ошибок
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

    // Если форма валидна, отправляем данные
    if (isValid) {
        const formData = { name, email, message, destination };

        try {
            const response = await fetch('your-server-endpoint-url', { // Замените на ваш URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Проверка на успешный статус ответа
            if (response.ok) {
                const data = await response.json(); // Получаем данные из ответа
                document.getElementById('response-message').textContent = data.message || 'Thank you for your message!';
                document.getElementById('response-message').style.color = 'green';
                document.getElementById('contact-form').reset(); // Сбрасываем форму
            } else {
                const errorData = await response.json();
                document.getElementById('response-message').textContent = `Error: ${errorData.message || 'Something went wrong!'}`;
                document.getElementById('response-message').style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('response-message').textContent = 'There was a problem submitting your form.';
            document.getElementById('response-message').style.color = 'red';
        }
    } else {
        document.getElementById('response-message').textContent = 'Please fix the errors above.';
        document.getElementById('response-message').style.color = 'red';
    }
});

// Функция для переключения темной/светлой темы
function aaa() {
    var element = document.body;
    element.classList.toggle("change-mode");
}

// Обработка всплывающей формы
const popupForm = document.getElementById("popup-form");
const popupBtn = document.getElementById("popup-btn");
const closePopup = document.getElementById("close-popup");

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

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Обработчик GET-запроса на корневом маршруте
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Обработчик POST-запроса для формы
app.post('/submit', (req, res) => {
    const { name, email, message, destination } = req.body;
    console.log('Received data:', req.body);
    res.json({ message: 'Thank you for your message!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

