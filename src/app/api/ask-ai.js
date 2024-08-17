// pages/api/ask-ai.js

import { Configuration, OpenAIApi } from "openai";

// Replace with your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    // Call the OpenAI API
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    // Extract the reply from the API response
    const aiReply = response.data.choices[0].message.content;

    res.status(200).json({ reply: aiReply });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
}
