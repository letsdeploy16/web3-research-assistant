# Web3 Research Assistant

A simple and powerful AI-powered agent that performs automated research on Web3 projects using Groq's LLaMA 3 model. Built for the JuliaOS bounty.

## 🔍 Features

- Summarizes project overview, tokenomics, community stats, GitHub activity, and more  
- Runs completely locally via Node.js  
- Powered by Groq's blazing-fast inference API (100% free, no credit card required)

---

## ⚙️ Setup Instructions

### 1. Clone or Download this Repo

```bash
git clone https://github.com/yourusername/web3-research-assistant.git
cd web3-research-assistant
```

### 2. Install Dependencies

```bash
npm install openai dotenv
```

> You are still using the OpenAI SDK as it works with Groq.

### 3. Set Your Groq API Key

Create a `.env` file in the root:

```bash
touch .env
```

Inside `.env`, add your key:

```
GROQ_API_KEY=your_actual_groq_key_here
```

---

## 🚀 Usage

Run the agent by passing a Web3 project name:

```bash
node agent.js Solana
```

Output:

```
🔍 Researching project: Solana...
🧠 AI Research Result:
(Project overview, tokenomics, GitHub, security, and more)
```

---

## 🧠 Example Projects to Try

- Polygon  
- Uniswap  
- Aave  
- Chainlink  
- Arbitrum  
- Filecoin

---

## 🛠 Tech Stack

- Node.js  
- Groq (LLaMA 3 model via `openai` SDK)  
- dotenv for secure key management

---

## 🪪 License

MIT License

---

## 🌐 For JuliaOS Bounty

- Agent is fully autonomous and uses Groq LLM via API  
- No front-end (CLI-based)  
- Can be easily extended to support JuliaOS swarms or UI layer