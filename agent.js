// agent.js
require('dotenv').config();
const https = require('https');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a Web3 project name. Example:\n   node agent.js Solana");
  process.exit(1);
}

console.log(`🔍 Researching project: ${projectName}...`);

const prompt = `Research the Web3 project "${projectName}" and summarize the following:
- Project overview
- Community size and growth
- Tokenomics and use cases
- GitHub activity
- Security or past incidents
- Recent news and partnerships`;

const data = JSON.stringify({
  model: "llama3-70b-8192",
  messages: [
    {
      role: "user",
      content: prompt
    }
  ]
});

const options = {
  hostname: 'api.groq.com',
  path: '/openai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GROQ_API_KEY}`
  }
};

const req = https.request(options, res => {
  let body = '';

  res.on('data', chunk => {
    body += chunk;
  });

  res.on('end', () => {
    try {
      const parsed = JSON.parse(body);
      console.log("🧪 Raw Groq Response:\n", JSON.stringify(parsed, null, 2));
      if (!parsed.choices || !parsed.choices[0]) {
        throw new Error("No valid response from Groq.");
      }
      console.log("🧠 AI Research Result:\n", parsed.choices[0].message.content);
    } catch (err) {
      console.error("❌ Failed to parse Groq response:", err.message);
    }
  });
});

req.on('error', error => {
  console.error("❌ Error calling Groq:", error.message);
});

req.write(data);
req.end();