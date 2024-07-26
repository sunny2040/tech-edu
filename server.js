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


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/admissionFormDB', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a schema and model for the admission form
// const admissionFormSchema = new mongoose.Schema({
//     admissionDate: String,
//     courseCategory: String,
//     session: String,
//     name: String,
//     fatherName: String,
//     motherName: String,
//     mobile: String,
//     email: String,
//     dob: String,
//     language: String,
//     address: String,
//     pincode: String,
//     aadhar: String,
//     gender: String,
//     maritalStatus: String,
//     bloodGroup: String,
//     religion: String,
//     casteCategory: String,
//     photo: String,
//     signature: String,
//     qualification: String,
//     rollNumber: String,
//     boardUniversity: String,
//     passingYear: String,
//     obtainMarks: String
// });

// const AdmissionForm = mongoose.model('AdmissionForm', admissionFormSchema);

// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint to handle form submission
// app.post('/submit-admission-form', async (req, res) => {
//     try {
//         const newAdmission = new AdmissionForm(req.body);
//         await newAdmission.save();
//         res.status(200).send('Form submitted successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error submitting form');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
