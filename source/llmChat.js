/**
 * llmChat.js
 *
 * This module provides an interface to initiate an LLM call using Perplexity AI's chat completions.
 */

async function initiateLLMCall(prompt) {
  const API_URL = "https://api.perplexity.ai/chat/completions";
  const apiKey = "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"; // Replace with your actual API key

  // Build the payload according to Perplexity AI's requirements
  const requestBody = {
    model: "sonar-pro",
    messages: [
      {
        role: "system",
        content: "Be precise and concise.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("LLM call failed with status " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during LLM call:", error);
    throw error;
  }
}

// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = {
//     initiateLLMCall,
//   };
// } else {
//   // Expose the function to the global scope for browser usage.
//   window.initiateLLMCall = initiateLLMCall;
// }
export default initiateLLMCall;
