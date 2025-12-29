'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

// Type definitions based on AI SDK 6 UIMessage docs
interface TextPart {
  type: 'text';
  text: string;
  state?: 'streaming' | 'done';
}

interface ToolPart {
  type: string; // tool-{toolName}
  toolCallId: string;
  state: 'input-streaming' | 'input-available' | 'output-available' | 'output-error';
  input?: Record<string, unknown>;
  output?: unknown;
  errorText?: string;
}

interface ReasoningPart {
  type: 'reasoning';
  text: string;
}

interface SourceUrlPart {
  type: 'source-url';
  sourceId: string;
  url: string;
  title?: string;
}

type MessagePart = TextPart | ToolPart | ReasoningPart | SourceUrlPart | { type: string };

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  parts: MessagePart[];
}

interface ChatHelpers {
  messages: ChatMessage[];
  sendMessage: (message: { text: string }) => Promise<void>;
  status: 'ready' | 'streaming' | 'submitted' | 'error';
  error: Error | undefined;
  stop: () => void;
}

export default function ChatPage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const chatHelpers = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  }) as unknown as ChatHelpers;

  const { messages, sendMessage, status, error, stop } = chatHelpers;
  const [input, setInput] = useState('');

  const isLoading = status === 'streaming' || status === 'submitted';

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Travel Planner Test</h1>

      {/* Error Display */}
      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-100 p-3 text-red-700">
          Error: {error.message}
        </div>
      )}

      {/* Status Indicator */}
      <div className="mb-2 text-sm text-gray-500">
        Status: <span className="font-medium">{status}</span>
      </div>

      {/* Messages Container */}
      <div className="mb-4 h-[500px] space-y-4 overflow-y-auto rounded border p-4">
        {messages.length === 0 && (
          <p className="text-gray-400">Ask me to plan a trip!</p>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded p-3 ${
              message.role === 'user'
                ? 'ml-8 bg-blue-100'
                : 'mr-8 bg-gray-100'
            }`}
          >
            <div className="mb-1 text-xs font-semibold">
              {message.role === 'user' ? 'You' : 'AI'}
            </div>
            <div className="whitespace-pre-wrap">
              {message.parts.map((part, index) => {
                // Handle text parts
                if (part.type === 'text') {
                  const textPart = part as TextPart;
                  return <span key={index}>{textPart.text}</span>;
                }

                // Handle tool invocations (tool-{toolName} format)
                if (part.type.startsWith('tool-')) {
                  const toolPart = part as ToolPart;
                  const toolName = part.type.replace('tool-', '');

                  return (
                    <div
                      key={index}
                      className="mt-2 rounded border border-yellow-200 bg-yellow-50 p-2 text-xs"
                    >
                      <div className="font-semibold">🔧 Tool: {toolName}</div>
                      <div className="text-gray-600">State: {toolPart.state}</div>
                      {toolPart.input && (
                        <div className="mt-1 text-gray-600">
                          Input: {JSON.stringify(toolPart.input)}
                        </div>
                      )}
                      {toolPart.state === 'output-available' && toolPart.output != null && (
                        <div className="mt-1 text-green-600">
                          ✓ Result: {String(typeof toolPart.output === 'string' 
                            ? toolPart.output 
                            : JSON.stringify(toolPart.output))}
                        </div>
                      )}
                      {toolPart.state === 'output-error' && toolPart.errorText && (
                        <div className="mt-1 text-red-600">
                          ✗ Error: {toolPart.errorText}
                        </div>
                      )}
                    </div>
                  );
                }

                // Handle reasoning parts
                if (part.type === 'reasoning') {
                  const reasoningPart = part as ReasoningPart;
                  return (
                    <div
                      key={index}
                      className="mt-2 rounded border border-purple-200 bg-purple-50 p-2 text-xs italic text-gray-600"
                    >
                      💭 {reasoningPart.text}
                    </div>
                  );
                }

                // Handle source URLs
                if (part.type === 'source-url') {
                  const sourcePart = part as SourceUrlPart;
                  return (
                    <div key={index} className="mt-1 text-xs">
                      <a
                        href={sourcePart.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        📎 {sourcePart.title ?? sourcePart.url}
                      </a>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}

        {/* Loading indicator during streaming */}
        {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="mr-8 animate-pulse rounded bg-gray-100 p-3">
            <div className="mb-1 text-xs font-semibold">AI</div>
            <div>Thinking...</div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim() || isLoading) return;
          void sendMessage({ text: input });
          setInput('');
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Plan a trip to Tokyo..."
          className="flex-1 rounded border px-4 py-2 text-black"
          disabled={isLoading}
        />
        {isLoading ? (
          <button
            type="button"
            onClick={() => stop()}
            className="rounded bg-red-500 px-6 py-2 text-white hover:bg-red-600"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}
