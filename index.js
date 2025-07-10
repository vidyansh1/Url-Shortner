const express = require('express');         // Express framework import kar rahe hain (server banane ke liye)
const mongoose = require('mongoose');       // Mongoose import kar rahe hain (MongoDB se connect karne ke liye)
const urlRoutes = require('./routes/url');  // URL ke routes import kar rahe hain (shorten karne ke liye)
const URL = require('./model/url');         // URL model import kar rahe hain (database ke liye)
const app = express();                      // Express app ka instance bana rahe hain
const PORT = 3000;                          // Server ka port number set kar rahe hain

app.use(express.json());                    // JSON body parsing middleware laga rahe hain (request body ko JSON me convert karta hai)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/urlShortener') // MongoDB se connect kar rahe hain (local database)
    .then(() => {
        console.log('Connected to MongoDB');               // Agar connection ho gaya toh message print hoga
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);   // Agar error aayi toh error print hogi
    });

// Use the URL routes
app.use('/url', urlRoutes);                                // '/url' path par routes use kar rahe hain (POST request ke liye)

// Short URL redirect route
app.get('/:id', async (req, res) => {                      // Jab bhi koi short URL hit karega (jaise /abc1234)
    try {
        const url = await URL.findOne({ shortId: req.params.id }); // Database me shortId se URL dhund rahe hain
        if (!url) {
            return res.status(404).send('URL not found');          // Agar nahi mila toh 404 error bhej rahe hain
        }
        return res.redirect(url.redirectURL);                      // Agar mil gaya toh original URL par redirect kar rahe hain
    } catch (err) {
        res.status(500).send('Internal Server Error');             // Agar koi aur error aayi toh 500 error bhej rahe hain
    }
});

app.listen(PORT, () => {                                   // Server ko start kar rahe hain
    console.log(`Server is running on http://localhost:${PORT}`); // Server start hone par message print hoga
});