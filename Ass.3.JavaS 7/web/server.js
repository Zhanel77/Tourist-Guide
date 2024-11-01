const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email, message, destination } = req.body;

    if (name && email && message && destination) {
        res.status(200).json({ message: 'Thank you for your message!' });
    } else {
        res.status(400).json({ message: 'Please fill out all fields.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
