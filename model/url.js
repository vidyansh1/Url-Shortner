const mongoose = require('mongoose'); // Mongoose import kar rahe hain (MongoDB ke liye)

const urlSchema = new mongoose.Schema({ // Ek naya schema bana rahe hain jo batata hai ki document ka structure kaisa hoga
    shortId: { type: String, required: true, unique: true }, // shortId: String type, zaroori hai, unique hona chahiye
    redirectURL: { type: String, required: true },           // redirectURL: String type, zaroori hai (original URL)
    createdAt: { type: Date, default: Date.now, expires: '1d' } // createdAt: Date type, default abhi ka time, 1 din baad expire ho jayega
});

//module.exports = mongoose.model('Url', urlSchema); // (Commented) Model banane ka ek tarika

const URL = mongoose.model('url', urlSchema); // 'url' naam ka model bana rahe hain jo schema follow karega
module.exports = URL;                         // Model ko export kar rahe hain taki dusri files me use ho sake

//OR
// const URL = require('./url');
// module.exports = URL; // (Commented) Yeh galat hai, model ko import/export karne ka sahi tarika upar
