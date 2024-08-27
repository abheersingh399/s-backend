const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route to serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send('Contact form submitted successfully!');
});

// Route to handle appointment booking form submissions
app.post('/book', (req, res) => {
    const { name, date, time } = req.body;
    console.log(`Received booking: Name: ${name}, Date: ${date}, Time: ${time}`);
    res.send('Appointment booked successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
