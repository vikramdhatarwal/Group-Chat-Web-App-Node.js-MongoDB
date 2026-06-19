# Group Chat Web App 💬

A full-stack group chat web application built using **Node.js**, **Express**, **MongoDB** (via Mongoose), and **EJS** templating. Messages are persisted in a MongoDB database, making this a step up from in-memory or SQL-based chat implementations.

---

## 🚀 Features

- Create and view group chat messages
- Persistent storage using MongoDB & Mongoose
- Server-side rendering with EJS templates
- Clean, responsive UI with custom CSS
- Seed data support via `init.js`

---

<img width="1280" height="610" alt="image" src="https://github.com/user-attachments/assets/04c307bf-2745-41db-8773-8c43749a94bd" />
<img width="1280" height="635" alt="image" src="https://github.com/user-attachments/assets/1ea92a64-5db9-4f18-9c31-167e04651966" />
<img width="1280" height="449" alt="image" src="https://github.com/user-attachments/assets/f594e70d-98d9-4650-9ce3-304621c1a809" />
<img width="1280" height="445" alt="image" src="https://github.com/user-attachments/assets/7f1b068b-6851-4692-a95a-6b327b598648" />




## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Backend    | Node.js, Express.js     |
| Database   | MongoDB + Mongoose      |
| Templating | EJS                     |
| Styling    | CSS                     |

> **Note:** This project uses MongoDB for data persistence. A similar version using MySQL is available at [People Dashboard](https://github.com/vikramdhatarwal/people-dashboard).

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/vikramdhatarwal/group-chat-mongodb.git
cd group-chat-mongodb
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://localhost:27017/groupchat
PORT=3000
```

### Run

```bash
# Seed the database
node init.js

# Start the server
node index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
<img width="1211" height="166" alt="image" src="https://github.com/user-attachments/assets/1eae01ac-bba6-4523-ba34-f606ac5cd653" />

---

## 🔮 Future Improvements

- [ ] Real-time messaging with Socket.io
- [ ] User authentication (bcrypt + sessions)
- [ ] Multiple chat rooms
- [ ] Message timestamps & usernames
- [ ] Deploy to Render/Railway

---

## 📄 License

MIT
