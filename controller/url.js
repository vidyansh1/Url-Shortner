const URL = require ('../model/url'); 
const { nanoid } = require('nanoid'); // nanoid package import kar rahe hain (unique shortId banane ke liye)

async function createShortUrl(req, res) { // Ek async function jo short URL create karta hai
    const body = req.body; // Client se aayi request ka data body variable me store kar rahe hain

    const shortID = nanoid(7); // 7 character ka unique shortId generate kar rahe hain

    await URL.create({ // Database me naya document create kar rahe hain
        shortId: shortID, // shortId field me generated ID save kar rahe hain
        redirectURL: body.url // redirectURL field me user ka original URL save kar rahe hain
    });

    return res.status(201).json({ // Client ko response bhej rahe hain, status 201 (Created)
        shortId: shortID, // Response me shortId bhej rahe hain
        redirectURL: body.url // Response me original URL bhej rahe hain
    });
}

module.exports = { // Is function ko dusre files me use karne ke liye export kar rahe hain
    createShortUrl
};
