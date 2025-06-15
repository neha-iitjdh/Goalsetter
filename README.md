```md
# 🎯 GoalSetter - MERN Stack Goal Tracking App

GoalSetter is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and manage personal goals in a clean dashboard interface.

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://goalsetter-delta.vercel.app](https://goalsetter-delta.vercel.app)
- **Backend (Render)**: [https://goalsetterapi.onrender.com](https://goalsetterapi.onrender.com)

---

## 📦 Tech Stack

**Frontend**:
- React
- Redux Toolkit
- Axios
- Vercel (deployment)

**Backend**:
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- CORS middleware
- Render (deployment)

---

## 📁 Folder Structure

```

GoalSetter/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   └── App.js / index.js
│   ├── public/
│   └── package.json

```

---

## 🔑 Features

- ✅ Register and log in securely using JWT
- ✅ Create, view, and delete goals
- ✅ Protected API routes using middleware
- ✅ Frontend and backend deployed separately
- ✅ Fully responsive UI

---

## ⚙️ Environment Variables

### Backend `.env`

```

PORT=5000
MONGO\_URI=your\_mongo\_connection\_string
JWT\_SECRET=your\_jwt\_secret

```

### Frontend `.env`

```

REACT\_APP\_API\_URL=[https://goalsetterapi.onrender.com](https://goalsetterapi.onrender.com)

````

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/goalsetter.git
cd goalsetter
````

### 2. Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file and fill in your MongoDB URI and JWT secret.
* Start the server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

* Create a `.env` file with:

```
REACT_APP_API_URL=https://goalsetterapi.onrender.com
```

* Start the frontend:

```bash
npm start
```

---

## ☁️ Deployment

### 🟪 Backend on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Create a new Web Service:

   * Root directory: `backend`
   * Build command: `npm install`
   * Start command: `node server.js`
3. Add environment variables
4. Deploy!

### 🟦 Frontend on Vercel

1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub project
3. Set root as `frontend`
4. Add environment variable:

   ```
   REACT_APP_API_URL=https://goalsetterapi.onrender.com
   ```
5. Deploy!

---

## 🧠 Troubleshooting

* **CORS Error**: Ensure your backend includes:

```js
app.use(cors({
  origin: 'https://goalsetter-delta.vercel.app',
  credentials: true
}))
```

* **404/405 Errors**: Check that your API route URLs in the frontend match the backend paths exactly (e.g., `/api/users`, `/api/goals`).

---

## 🙌 Credits

This project was built by following the [Brad Traversy - MERN Stack Tutorial](https://www.youtube.com/c/TraversyMedia).
All core ideas and project structure were inspired by his excellent instructional content.

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Neha Sharma**

Feel free to connect, contribute, or fork!

```

---

Let me know if you'd like to add screenshots or badges (e.g. Vercel deploy badge, MIT license badge, etc.) — they add polish to the README.
```
