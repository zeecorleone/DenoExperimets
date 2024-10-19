import { OpenAI } from "https://deno.land/x/openai@v4.68.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Load environment variables from .env.dev
const env = config({ export: true, path: ".env.dev" });;


const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
})

async function generateText(prompt: string) {
    try {
            
            const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: "Write a haiku about recursion in programming.",
                },
            ],
        });

        console.log("Response from OpenAI: ", completion.choices[0].message.content);
    } catch (error) {
        console.error("Error generating text: ", error);
    }
}


const userPrompt = "What are some fun activites to do in the fall?";
await generateText(userPrompt);