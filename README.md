# 🌐 Web3 Research Assistant

A simple and visually engaging assistant that helps users research Web3 projects and check Solana wallet balances — built for the JuliaOS bounty project.

## 🚀 Features

- 🔍 Enter any Web3 project name and get an AI-generated research summary.
- 💰 Check real-time SOL balance of any Solana wallet.
- ✨ Beautiful animated UI with shooting stars and glassmorphism.
- ⚡ Backend using Node.js, Express, and Groq's LLaMA 3 model.
- 🔐 Environment variables handled with `.env`.

## 📸 Demo

![Web UI Preview](./screenshot.png) <!-- Add your screenshot file in the repo -->

---

## 📁 Project Structure

```
web3-research-assistant/
├── agent.js             # Express backend
├── public/
│   └── index.html       # Frontend UI
│   └── script.js        # Client-side logic
├── .env                 # Groq API Key
├── package.json         # Dependencies
└── README.md            # Project overview
```

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/web3-research-assistant.git
cd web3-research-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Groq API key

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Start the backend

```bash
node agent.js
```

You should see:
```
🚀 Research API listening at http://localhost:3000
```

### 5. Open the frontend

Just open `public/index.html` in your browser.

Or run a simple local server:

```bash
npx serve public
```

Then navigate to: [http://localhost:8000](http://localhost:8000)

---

## 📦 API Endpoints

### `POST /research`

**Body:**

```json
{ "projectName": "Polygon" }
```

**Response:**

```json
{ "result": "Research summary..." }
```

---

### `POST /solana-balance`

**Body:**

```json
{ "address": "YOUR_SOL_WALLET_ADDRESS" }
```

**Response:**

```json
{ "address": "...", "sol": 1.23 }
```

---

## 🤖 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js + Express
- **AI Model:** [Groq LLaMA 3 API](https://console.groq.com/)
- **Solana Integration:** `@solana/web3.js`
- **Deployment-ready:** Works locally and can be hosted on Vercel, Netlify, or Railway

---

## 💡 Credits

Built with 💙 by [Aniruddh Salunkhe](https://github.com/letsdeploy16/web3-research-assistant)for the JuliaOS bounty.

---

## 📜 License

MIT