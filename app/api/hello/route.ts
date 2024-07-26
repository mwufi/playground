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
        const req = await request.json()
        let { messages, text, model } = req;

        // Validate input
        if (!text && !messages) {
            console.log(req)

            return Response.json({ error: 'Missing text or messages parameter' }, { status: 400 });
        }
        // default format
        messages = messages || [{ role: 'user', content: text }]

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: model || "gpt-4o-mini",
            messages: messages,
        });

        // Extract and return the response
        const response = completion.choices[0].message.content;
        return Response.json({ message: response });

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'An error occurred while processing your request' }, { status: 500 });
    }
}