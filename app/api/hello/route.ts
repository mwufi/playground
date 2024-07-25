import OpenAI from 'openai';

export async function GET(request) {
    return new Response('Hello, Next.js! Your API key is ' + process.env.OPENAI_API_KEY);
}

// Initialize the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    try {
        // Parse the request body
        const { text, model } = await request.json();

        // Validate input
        if (!text || !model) {
            return Response.json({ error: 'Missing text or model parameter' }, { status: 400 });
        }

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: model,
            messages: [{ role: 'user', content: text }],
        });

        // Extract and return the response
        const response = completion.choices[0].message.content;
        return Response.json({ response });

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'An error occurred while processing your request' }, { status: 500 });
    }
}