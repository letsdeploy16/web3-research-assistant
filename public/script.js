// Fetch research from backend
async function fetchResearch() {
  const project = document.getElementById('projectName').value;
  const resultDiv = document.getElementById('result');

  console.log("🐛 DEBUG: projectName =", project);
  resultDiv.innerText = '⏳ Fetching research...';

  try {
    const response = await fetch('http://127.0.0.1:3000/research', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName: project }),
    });

    // FIXED: You used 'res' in fetch but 'response' here — must be same variable name
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.result) {
      resultDiv.innerText = data.result;
    } else {
      resultDiv.innerText = '❌ Error: No result returned.';
    }
  } catch (error) {
    resultDiv.innerText = `❌ Error fetching data: ${error.message}`;
    console.error("Full error:", error);
  }
}

// Event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("researchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    fetchResearch();
  });

  const getBalanceBtn = document.getElementById("getBalanceBtn");
  const result = document.getElementById("balanceResult");

  getBalanceBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const address = document.getElementById("solAddress").value;

    if (!address) {
      result.textContent = "❌ Please enter a wallet address.";
      return;
    }

    result.textContent = "⏳ Checking balance...";

    
      const res = await fetch("http://127.0.0.1:3000/solana-balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const text = await res.text();
      console.log("🔍 Raw response:", text); // Debug
      try {
      const data = JSON.parse(text);
      result.textContent = data.sol
        ? `✅ Balance: ${data.sol} SOL`
        : `❌ Error: ${data.error||'Unknown error'}`;
    } catch (e) {
      console.error("❌ JSON Parse Error:", e);
  result.textContent = "❌ Failed to parse response.";
    }
  });
});