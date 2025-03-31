// Add retry mechanism
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3,
  delay = 1000
): Promise<Response> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);

      // If model is loading, wait and retry
      if (response.status === 503) {
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
        continue;
      }

      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
  throw new Error('Max retries reached');
}

const API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function generateAIResponse(prompt: string, context: string) {
  if (!API_KEY) {
    console.error('OpenRouter API key is not configured');
    return 'AI assistant is not configured. Please set up your OpenRouter API key.';
  }

  try {
    console.log('Sending request to OpenRouter API...', {
      url: API_URL,
      key: API_KEY.substring(0, 5) + '...',
      prompt: prompt.substring(0, 50) + '...',
    });

    const response = await fetchWithRetry(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
        'HTTP-Referer': 'https://github.com/yourusername/yourportfolio', // Replace with your actual site
        'X-Title': 'Portfolio Chat Assistant',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [
          {
            role: 'system',
            content: `You are Rajan's AI assistant. Use the following context to answer questions about Rajan's portfolio. Be specific, accurate, and professional. If the information is not in the context, say so.

Context:
${context}`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 250,
        top_p: 0.95,
      }),
    });

    if (!response.ok) {
      let errorData;
      try {
        const text = await response.text();
        console.error('Raw error response:', text);
        errorData = text ? JSON.parse(text) : {};
      } catch (e) {
        console.error('Error parsing error response:', e);
        errorData = {};
      }

      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        url: API_URL,
        headers: Object.fromEntries(response.headers.entries()),
      });

      switch (response.status) {
        case 400:
          return 'Invalid request. Please check your input and try again.';
        case 401:
          return 'Authentication failed. Please check your API key.';
        case 403:
          return 'Access denied. Please check your API key permissions.';
        case 404:
          return 'The AI model is not available. Please try again later.';
        case 429:
          return 'Too many requests. Please try again later.';
        case 500:
          return 'The AI service is experiencing issues. Please try again later.';
        default:
          return "I'm having trouble connecting to the AI service. Please try again later.";
      }
    }

    const result = await response.json();
    console.log('Received response from OpenRouter API:', result);

    if (!result.choices?.[0]?.message?.content) {
      console.error('Invalid response format:', result);
      return 'I received an invalid response. Please try again.';
    }

    let text = result.choices[0].message.content.trim();

    // Format the response for better readability
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line)
      .join('\n');
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I apologize, but I'm having trouble processing your request right now. Please try again later.";
  }
}
