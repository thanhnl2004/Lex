"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isTextUIPart } from "ai";
import { IconRobot, IconSparkles, IconLoader2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AIInput } from "@/components/ui/ai-input";

interface AIChatSidebarProps {
  tripTitle: string;
  tripId: number;
  quickActions: { label: string; icon: string }[];
}

export function AIChatSidebar({ tripTitle, tripId: _tripId, quickActions }: AIChatSidebarProps) {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (value: string) => {
    if (!value.trim() || isLoading) return;
    await sendMessage({ text: value });
  };

  const handleQuickAction = async (label: string) => {
    await sendMessage({ text: label });
  };

  // Extract text content from message parts
  const getMessageText = (parts: typeof messages[0]["parts"]): string => {
    return parts
      .filter(isTextUIPart)
      .map((part) => part.text)
      .join("");
  };

  // Check if message has tool invocations
  const hasToolInvocations = (parts: typeof messages[0]["parts"]): boolean => {
    return parts.some((part) => "type" in part && typeof part.type === "string" && part.type.startsWith("tool-"));
  };

  return (
    <div className="flex h-full w-lg flex-col border-r bg-card">
      {/* Header */}
      <div className="flex items-center gap-3 border-b p-4">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <IconRobot className="size-5 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold">AI Travel Assistant</h2>
          <p className="text-sm text-muted-foreground">{tripTitle}</p>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mx-4 mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          {error.message}
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
                <IconRobot className="size-6 text-primary" />
              </div>
              <p className="text-sm font-medium">How can I help plan your trip?</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Ask me to find flights, hotels, or create an itinerary.
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === "user" && "flex-row-reverse"
              )}
            >
              {message.role === "assistant" && (
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <IconRobot className="size-4 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  message.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {/* Text content */}
                <p className="whitespace-pre-wrap">{getMessageText(message.parts)}</p>

                {/* Tool invocations indicator */}
                {hasToolInvocations(message.parts) && (
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <IconSparkles className="size-3" />
                    <span>Searched the web for information</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
            <div className="flex gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <IconRobot className="size-4 text-primary" />
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
                <IconLoader2 className="size-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        {/* Quick Actions */}
        {messages.length === 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                size="sm"
                className="h-auto gap-1.5 px-2.5 py-1.5 text-xs"
                onClick={() => void handleQuickAction(action.label)}
                disabled={isLoading}
              >
                <IconSparkles className="size-3" />
                {action.label}
              </Button>
            ))}
          </div>
        )}

        <AIInput
          placeholder="Ask anything about your trip..."
          onSubmit={(value) => void handleSubmit(value)}
          className="py-2"
          minHeight={44}
          maxHeight={150}
          disabled={isLoading}
        />

        {/* Stop button when streaming */}
        {isLoading && (
          <Button
            variant="outline"
            size="sm"
            className="mt-2 w-full"
            onClick={() => stop()}
          >
            Stop generating
          </Button>
        )}
      </div>
    </div>
  );
}
