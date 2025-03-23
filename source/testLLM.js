/**
 * testLLM.js
 *
 * This file is created for testing the LLM call integration.
 * It imports the initiateLLMCall function from llmChat.js and calls it with a test prompt,
 * then logs the result to the console.
 *
 * To run this test, execute:
 *   node source/testLLM.js
 */

// const { initiateLLMCall } = require("./llmChat");

import initiateLLMCall from "./llmChat.js";

async function testLLM() {
  const prompt = "What is the capital of France?";
  try {
    const result = await initiateLLMCall(prompt);
    console.log("Test LLM response:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Test LLM error:", error);
  }
}

testLLM();
