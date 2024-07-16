const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const dataFilePath = path.join(__dirname, 'form-data.json');

    // Write form data to a JSON file
    fs.writeFile(dataFilePath, JSON.stringify(formData), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).send('Error saving data');
        }
        console.log('Data saved successfully:', formData);
        res.status(200).send('Form data saved successfully');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
