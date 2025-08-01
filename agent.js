require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } = require('@solana/web3.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

console.log("🟢 Starting server...");

// Solana Balance API
app.post('/solana-balance', async (req, res) => {
  console.log("✅ Registering /solana-balance route");
  const { address } = req.body;
  try {
    const publicKey = new PublicKey(address);
    const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
    const lamports = await connection.getBalance(publicKey);
    const sol = lamports / LAMPORTS_PER_SOL;
    res.json({ address, sol });
  } catch (error) {
    console.error("❌ Solana Balance Error:", error.message);
    res.status(400).json({ error: 'Invalid address or network issue' });
  }
});

// Modular Swarm Agent Prompt Builders
function getOverviewPrompt(project) {
  return `Give a short overview of the Web3 project "${project}".`;
}
function getCommunityPrompt(project) {
  return `How large and active is the community of "${project}"? Include metrics if possible.`;
}
function getTokenomicsPrompt(project) {
  return `Explain the tokenomics and use cases of "${project}". Include supply info if known.`;
}
function getGithubActivityPrompt(project) {
  return `Check GitHub activity for "${project}". Is it actively maintained or stagnant?`;
}
function getSecurityPrompt(project) {
  return `Has "${project}" had any security issues, exploits, or audit results?`;
}
function getNewsPrompt(project) {
  return `List recent news, updates, or partnerships related to "${project}".` ;
}

// Web3 Research Endpoint (Swarm-style)
app.post('/research', async (req, res) => {
  console.log("🐛 /research endpoint hit!");
  const { projectName } = req.body;

  if (!projectName) {
    return res.status(400).json({ error: 'Missing project name' });
  }

  // Swarm prompt aggregation
  const prompts = [
    getOverviewPrompt(projectName),
    getCommunityPrompt(projectName),
    getTokenomicsPrompt(projectName),
    getGithubActivityPrompt(projectName),
    getSecurityPrompt(projectName),
    getNewsPrompt(projectName),
  ];

  const fullPrompt = prompts.map((p, i) => `${i + 1}. ${p}`).join('\n\n');

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [{ role: 'user', content: fullPrompt }],
      }),
    });

    const data = await response.json();
    console.log("🔍 Full Groq response:", JSON.stringify(data, null, 2));

    if (data.choices && data.choices.length > 0) {
      const output = data.choices[0].message.content;
      res.json({ result: output });
    } else {
      res.status(500).json({ error: 'No valid response from Groq' });
    }
  } catch (err) {
    console.error("❌ Groq API Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Research API listening at http://localhost:${port}`);
});