# 🧾 MenuMetrics API

This is a simple backend REST API built with Node.js, Express, Mongoose, and Zod. It allows you to manage restaurants and their menu items through clean and validated endpoints.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PepaPanda/menumetrics.git
cd menumetrics
```

### 2. Install Dependencies

```bash
npm install
```

> This includes dev dependencies like `nodemon` for local development.

---

## ⚙️ Environment Configuration

The app uses environment variables defined in a `.env` file.  
You can start by copying the provided `.env.example`:

```
DATABASE_URL=your-mongo-uri
PORT=3000
```

### Notes:

- You can use `mongodb://localhost/menumetrics` as a test database URI if MongoDB is running locally.
- The `PORT` variable defines which port the server will run on — no need to change the code.

---

## ▶️ Running the Server

```bash
npm run dev
```

Starts the server in development mode using `nodemon` (auto-reloads on file changes).

---

## 🧱 Prerequisites

You need to have **MongoDB installed and running** on your system.

- [MongoDB Community Server (local)](https://www.mongodb.com/try/download/community)
- Or [MongoDB Atlas (cloud)](https://www.mongodb.com/cloud/atlas)

---

## 📫 API Documentation (For the reviewers/professors)

- [UUdocument here](https://uuapp.plus4u.net/uu-managementkit-maing02/38744216cb324edca986789798259ba9/document?oid=67b6f67824292539ed15249d&pageOid=67b6f68024292539ed152545)

---

## 📁 Project Structure

```
controllers/    → Handles route logic (input/output)
services/       → Business logic + DB operations
models/         → Mongoose schemas
routes/         → Route definitions
validation/     → Zod schemas for input validation
helpers/        → Utility functions
```

---

Thank you ❤️
