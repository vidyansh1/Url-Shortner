# 📦 URL Shortener API

**Technologies:** Node.js, Express, MongoDB, Mongoose, dotenv

## 📦 How to Use Short URL

POST http://localhost:3000/api/shorten  
→ Body: `{ "longUrl": "https://youtube.com" }`  
→ Returns: `{ "shortUrl": "http://localhost:3000/url/abc1234" }`

GET http://localhost:3000/url/abc1234  
→ Redirects to `https://youtube.com`

## 🧱 Setup

```bash
git clone https://github.com/vidyansh1/Url-Shortner.git
cd Url-Shortner
npm install
# Create .env file:
# MONGO_URI=...
# BASE_URL=http://localhost:3000
# PORT=5000

npm run start
