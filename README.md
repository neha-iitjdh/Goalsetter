# 🎯 GoalSetter – MERN Stack Goal Tracking App

**GoalSetter** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to securely register, log in, and manage their personal goals through an intuitive dashboard interface.

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel)**: [https://goalsetter-delta.vercel.app](https://goalsetter-delta.vercel.app)
- 🔗 **Backend (Render)**: [https://goalsetterapi.onrender.com](https://goalsetterapi.onrender.com)

---

## 🛠 Tech Stack

### Frontend:
- ⚛️ React
- 🧰 Redux Toolkit
- 📡 Axios
- 🌐 Vercel (deployment)

### Backend:
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB Atlas + Mongoose
- 🔐 JWT (JSON Web Tokens)
- 🧱 CORS Middleware
- 🛠️ Render (deployment)

---

## 📁 Project Structure
```
GoalSetter/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── features/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ ├── public/
│ └── package.json

```
---

## 🔑 Features

- 🔒 User authentication with JWT
- ✍️ Create, view, and delete goals
- 🛡️ Protected API routes with middleware
- 💡 Frontend and backend deployed independently
- 📱 Fully responsive, modern UI

---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```
### Frontend (`.env`)
```env
REACT_APP_API_URL=https://goalsetterapi.onrender.com
```
---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/goalsetter.git
cd goalsetter
```

### 2. Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file with MongoDB URI and JWT secret
* Start the server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

* Create a `.env` file:

```env
REACT_APP_API_URL=https://goalsetterapi.onrender.com
```

* Start the frontend server:

```bash
npm start
```

---

## ☁️ Deployment Instructions

### 🔧 Backend (Render)

1. Visit [Render Dashboard](https://dashboard.render.com/)
2. Create a new Web Service:

   * Root: `backend`
   * Build Command: `npm install`
   * Start Command: `node server.js`
3. Add your `.env` variables
4. Deploy 🚀

### ⚙️ Frontend (Vercel)

1. Go to [Vercel](https://vercel.com/)
2. Import GitHub repo
3. Set root directory to `frontend`
4. Add environment variable:

```env
REACT_APP_API_URL=https://goalsetterapi.onrender.com
```

5. Deploy 🚀

---

## 🧠 Troubleshooting

* **CORS Errors**: Make sure your backend includes:

```js
app.use(cors({
  origin: 'https://goalsetter-delta.vercel.app',
  credentials: true
}));
```

* **API Errors**: Verify that frontend routes match backend endpoints (e.g., `/api/users`, `/api/goals`).

---

## 🙌 Credits

This project was inspired by the [Brad Traversy MERN Stack Crash Course](https://www.youtube.com/c/TraversyMedia).
Huge thanks to him for the structure and tutorial guidance.

---

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Neha Sharma**

Feel free to fork, contribute, or connect on [GitHub](https://github.com/neha-iitjdh).

