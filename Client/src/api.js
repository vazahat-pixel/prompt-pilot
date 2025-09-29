// Gemini.js
import axios from "axios";

const API_KEY = "AIzaSyCMi723EOEKGsIebXyJpc1Bw0ErFF9vHXE";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export async function GenrateapiResponse(prompt) {
  try {
    const response = await axios.post(URL, {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI Prompt Refiner.
Rewrite the following user input into a clear, structured, and professional AI-ready prompt:\n\n"${prompt}"\n\nReturn only the improved professional prompt.`,
            },
          ],
        },
      ],
    });

    const fullText =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // ✅ Ensure clean formatting
    const professionalPrompt = fullText.trim();

    return professionalPrompt || "Sorry, could not refine the prompt.";
  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    return "Error: " + error.message;
  }
}
