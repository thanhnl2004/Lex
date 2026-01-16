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
    You are a helpful AI assistant for a document editor. 
    When users ask questions that require current or factual information, you MUST use the tavilySearch tool to find real-time information.

    CRITICAL RULES FOR ACCURACY:
    1. ALWAYS use tavilySearch for factual queries (stats, current events, dates, numbers, etc.)
    2. ONLY use information from the search results - never make up, guess, or use outdated knowledge
    3. Always cite your sources by mentioning where the information came from (title or URL)
    4. If the search results don't contain the answer, say "I couldn't find that information" rather than guessing
    5. Be precise with numbers and statistics - quote them exactly as found in the search results
    6. When providing stats or data, include the source (e.g., "According to [source title/URL]...")
    7. Cross-reference multiple sources when possible for accuracy

    After using tavilySearch, summarize the results accurately and include citations.
    `,
    messages: await convertToModelMessages(messages),
    tools: {
      tavilySearch: {
        description: 'Search the web for real-time, accurate information. Use this for ANY factual query (stats, current events, dates, etc.). The results include an AI-generated answer and source URLs. ALWAYS cite your sources when using this information. Only use information from the search results - never make up facts.',
        inputSchema: jsonSchema<{ query: string }>({
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'The search query for factual information',
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
              summary: response.answer,
              results: response.results.map((r) => ({
                title: r.title,
                url: r.url,
                content: r.content,
              })),
            };
          } catch (error) {
            console.error('[Tavily] Error:', error);
            return { 
              error: error instanceof Error ? error.message : 'Search failed', 
              results: [] 
            };
          }
        },
      },
    },
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
