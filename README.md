# 🚀 Personal Portfolio Website (Full Stack)

A full-stack personal portfolio website built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.  
It showcases my skills, projects, and contact details with dynamic backend integration using REST APIs.

---

## 📌 Tech Stack

### 🎨 Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB Atlas

### 🚀 Deployment
- Frontend → Netlify  
- Backend → Render  

---

## 🌐 Live Links

- 🔗 **Frontend:** https://personal-portfil.netlify.app/  
- 🔗 **Backend API:** https://personal-portfolio-b2gb.onrender.com

---

## ✨ Features

- 📱 Responsive & Mobile-Friendly UI
- 👤 About section with personal introduction
- 💡 Skills showcase section
- 📂 Dynamic Projects section (fetched from backend API)
- 📩 Contact section with email & social links
- 🔗 REST API integration
- 🗄️ MongoDB database integration for projects

---

## 📁 Project Structure

```bash
Personal-Portfolio/
│
├── backend/
│   ├── server.js          # Entry point of backend server
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes (GET, POST, etc.)
│   └── config/            # Database configuration
│
├── index.html             # Frontend main page
├── style.css              # UI styling
├── script.js              # Frontend logic + API calls
└── README.md              # Project documentation
```
## ⚙️ System Flow (How It Works)
Frontend UI loads in browser
script.js sends HTTP request to backend API
Express.js handles the request
MongoDB retrieves stored data
Backend sends JSON response
Frontend dynamically renders projects
## 🔌 API Endpoints

### 📌 Get All Projects

```http
GET /projects
```
### 📌 Sample Response
```
[
  {
    "title": "Portfolio Website",
    "description": "Full-stack personal portfolio project"
  }
]
```
### Setup Instructions (Run Locally)
``` # 1. Clone repository
git clone https://github.com/poojasripopuri548-max/portfolio.git

# 2. Navigate into project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Create .env file
MONGO_URL=your_mongodb_connection_string
PORT=5000

# 5. Start server
node server.js
```
### 🧠 Learning Outcomes

Full-stack MERN fundamentals

REST API development using Express.js

MongoDB Atlas integration

Frontend ↔ Backend communication

Deployment using Netlify & Render

### 👩‍💻 Author

Pooja Sri Popuri

GitHub: https://github.com/poojasripopuri548-max

Portfolio: https://personal-portfil.netlify.app/
