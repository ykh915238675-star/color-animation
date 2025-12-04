import { GoogleGenAI, Type, Schema } from "@google/genai";
import { MoodResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePaletteFromMood = async (mood: string): Promise<MoodResponse> => {
  try {
    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        palette: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "A list of 5 hex color codes (e.g., #FF5733) that match the mood.",
        },
        name: {
          type: Type.STRING,
          description: "A creative short name for this color palette.",
        },
      },
      required: ["palette", "name"],
    };

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a harmonious, fluid gradient color palette (5 colors) based on the mood or theme: "${mood}". The colors should blend well together for a background.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 1.2, // High creativity for colors
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    return JSON.parse(text) as MoodResponse;
  } catch (error) {
    console.error("Error generating palette:", error);
    // Fallback if API fails
    return {
      name: "Fallback Blue",
      palette: ["#60A5FA", "#34D399", "#A78BFA", "#F472B6", "#22D3EE"],
    };
  }
};
