export const handler = async (event, context) => {
    // 1. Allow CORS (Optional but good for debugging) and POST only
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const body = JSON.parse(event.body);
        const userCode = body.code;
        const API_KEY = process.env.GEMINI_API_KEY;

        if (!API_KEY) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: "Server Error: Missing API Key" }) 
            };
        }

        // 2. Call Gemini WITH SAFETY SETTINGS DISABLED
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
                }],
                // NEW: DISABLE SAFETY FILTERS so it doesn't block "hacker" keywords
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ]
            })
        });

        const data = await response.json();

        // 3. Return JSON with Correct Headers
        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(data)
        };

    } catch (error) {
        return { 
            statusCode: 500, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message }) 
        };
    }
};
