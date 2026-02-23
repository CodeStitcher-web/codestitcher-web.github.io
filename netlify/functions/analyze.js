// netlify/functions/analyze.js

export const handler = async (event, context) => {
    // 1. Security: Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        // 2. Get the Code from the Frontend
        if (!event.body) {
            return { statusCode: 400, body: JSON.stringify({ error: "No code provided" }) };
        }
        
        const body = JSON.parse(event.body);
        const userCode = body.code;

        // 3. Get the Key from Netlify's Environment Variables
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            console.error("API Key missing");
            return { statusCode: 500, body: JSON.stringify({ error: "Server Configuration Error" }) };
        }

        // 4. Ask Gemini
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Act as a senior software architect. Analyze this Python code. 
                        1. Briefly explain what it does. 
                        2. Point out any errors. 
                        3. Suggest one optimization. 
                        Keep the tone technical, concise, and "cyberpunk/hacker" style. 
                        Code:\n\n${userCode}`
                    }]
                }]
            })
        });

        const data = await response.json();

        // 5. Send Answer to Frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Function Error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
