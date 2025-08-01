# 🌐 Web3 Research Assistant with JuliaOS Swarm Integration

A decentralized AI-powered research assistant that gathers real-time Web3 project intelligence using JuliaOS agents and swarm coordination.  
Created by [letsdeploy16](https://github.com/letsdeploy16) for the JuliaOS bounty challenge.

---

## 🚀 Features

- 🔍 Web3 Project Research using LLaMA 3 via Groq API  
- 💰 SOL Wallet Balance Checker  
- 🧠 Modular Agent System (OverviewAgent, TokenAgent, CommunityAgent, SecurityAgent)  
- 🐝 JuliaOS Swarm Integration for coordinated multi-agent execution  
- 🎨 Modern responsive frontend with glassmorphism and shooting star animations  

---

## 📸 Screenshots

### 🔹 Project Research Output  
![Research Output](agent.js.png)

### 🔹 SOL Balance Checker  
![SOL Balance](successful API Call.png)


### 🔹 Front-end UI 
(Front_end UI.png)

---

## 🧠 Architecture Overview

- **Frontend**: HTML/CSS/JavaScript (no framework)
- **Backend**: Node.js with Express
- **AI Engine**: LLaMA 3 via Groq API
- **Blockchain API**: Solana Web3.js
- **Swarm Coordination**: JuliaOS agent API integration

---

## 📽️ Live Demo

Watch the full demo here: [Click to view demo] (https://drive.google.com/file/d/1qtgF4ufwyQsSoSGovM1UurCPB3NMJJXJ/view?usp=drive_link)

## 🐝 JuliaOS Usage

This dApp uses **JuliaOS primitives** in the following way:

- Agents are modularized into individual `.js` files representing distinct tasks (e.g., `overviewAgent.js`, `tokenAgent.js`).
- Swarm orchestrator (`swarmCoordinator.js`) coordinates parallel agent execution and aggregates results.
- Demonstrates swarm coordination pattern with real-time Groq API calls per agent.
- Extensible swarm logic allows additional agents for deeper on-chain or community analysis.

---

## 🛠️ Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/letsdeploy16/web3-research-assistant.git
cd web3-research-assistant
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the Server

```bash
node agent.js
```

### 5. Open Frontend

Open `public/index.html` in your browser directly  
or use VS Code Live Server (`right-click > Open with Live Server`).

---

## 🧪 Testing

You can test via:

- Web UI inputs (research form, SOL checker)
- Postman or `curl`:

```bash
curl -X POST http://localhost:3000/research \
  -H "Content-Type: application/json" \
  -d '{"projectName": "Uniswap"}'
```

---

## 📁 File Structure

```
web3-research-assistant/
├── agent.js               # Main server with API routes
├── agents/
│   ├── overviewAgent.js
│   ├── tokenAgent.js
│   ├── communityAgent.js
│   └── securityAgent.js
├── swarmCoordinator.js    # Executes all agents in parallel
├── public/
│   └── index.html         # Frontend UI
├── screenshots/
│   └── *.png              # Screenshots for demo
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 📜 License

MIT License

---

---

## 🙌 Credits

Built with ☢️ by [letsdeploy16](https://github.com/letsdeploy16)  
Using [Groq AI](https://groq.com/), [Solana Web3.js](https://solana-labs.github.io/), and [JuliaOS](https://juliaos.org/)

---