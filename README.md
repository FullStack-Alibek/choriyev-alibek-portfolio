# 🚀 Choriyev Alibek Portfolio

A modern Full Stack Developer Portfolio built with Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and Telegram Bot integration.

## 🌟 Features

### Frontend
- Modern UI/UX Design
- Responsive Layout
- Dark Mode Support
- Contact Form
- Project Showcase
- Skills Section
- About Me Section
- SEO Optimized

### Backend & CRM
- Lead Management System
- PostgreSQL Database
- Prisma ORM
- API Endpoints
- Form Submission Processing

### Telegram Bot
- Instant Lead Notifications
- CRM Integration
- Client Inquiry Alerts
- Portfolio Contact Automation

---

## 🛠 Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- React

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

### Bot
- Telegram Bot API
- Node.js
- TypeScript

---

## 📂 Project Structure

```bash
portfolio/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.local
│
├── bot/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/alibek-portfolio.git
cd alibek-portfolio
```

### 2. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

### 3. Backend & Bot Setup

```bash
cd ../bot

npm install
```

### 4. PostgreSQL

Create database:

```sql
CREATE DATABASE portfolio;
```

### 5. Prisma

```bash
npx prisma generate

npx prisma migrate dev
```

### 6. Run Bot

```bash
npm run dev
```

---

## 🔐 Environment Variables

### Frontend

Create:

```env
frontend/.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Bot

Create:

```env
bot/.env
```

Example:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/portfolio

PORT=4000

TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN

TELEGRAM_CHAT_ID=YOUR_CHAT_ID
```

---

## 📸 Screenshots

Coming Soon...

---

## 🌐 Live Demo

Frontend:
```
https://your-domain.com
```

---

## 👨‍💻 Author

**Alibek Choriyev**

- Full Stack Developer
- Uzbekistan 🇺🇿

GitHub:
https://github.com/your-username

---

## 📄 License

This project is licensed under the MIT License.