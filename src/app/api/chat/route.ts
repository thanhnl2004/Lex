import { streamText, type UIMessage, convertToModelMessages, jsonSchema, stepCountIs } from 'ai';
import { google } from '@ai-sdk/google';
import { tavily } from '@tavily/core';

export const maxDuration = 60;

// Initialize Tavily client
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY! });

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: UIMessage[] };

  const result = streamText({
    model: google('gemini-2.0-flash'),
    system: `
    You are a helpful travel planning assistant. 
    When users ask about destinations, flights, hotels, or activities, use the tavilySearch tool to find real-time information.
    After using the tool, always summarize the results in a helpful response.
    `,
    messages: await convertToModelMessages(messages),
    tools: {
      tavilySearch: {
        description: 'Search the web for real-time travel information',
        inputSchema: jsonSchema<{ query: string }>({
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'The search query',
            },
          },
          required: ['query'],
        }),
        execute: async ({ query }: { query: string }) => {
          console.log('[Tavily] Searching:', query);
          try {
            const response = await tvly.search(query, {
              maxResults: 5,
              includeAnswer: true,
            });
            console.log('[Tavily] Got results:', response.results.length);
            return {
              answer: response.answer,
              results: response.results.map((r) => ({
                title: r.title,
                url: r.url,
                content: r.content,
              })),
            };
          } catch (error) {
            console.error('[Tavily] Error:', error);
            return { error: 'Search failed', results: [] };
          }
        },
      },
    },
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
