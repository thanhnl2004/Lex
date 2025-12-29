import { streamText, type UIMessage, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { tavily } from '@tavily/core';
import { z } from 'zod';

export const maxDuration = 30;

// Initialize Tavily client
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY! });

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: UIMessage[] };

  const result = streamText({
    model: google('gemini-2.0-flash'),
    system: `
    You are a helpful travel planning assistant. 
    When users ask about destinations, flights, hotels, or activities, use the tavilySearch tool to find real-time information.
    Provide specific recommendations with details when available.
    `,
    messages: await convertToModelMessages(messages),
    tools: {
      tavilySearch: {
        description: 'Search the web for real-time travel information, flights, hotels, destinations, and activities',
        inputSchema: z.object({
          query: z.string().describe('The search query'),
        }),
        execute: async ({ query }: { query: string }) => {
          const response = await tvly.search(query, {
            maxResults: 5,
            includeAnswer: true,
          });
          return {
            answer: response.answer,
            results: response.results.map((r) => ({
              title: r.title,
              url: r.url,
              content: r.content,
            })),
          };
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
