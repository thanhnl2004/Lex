"use client";

import * as React from "react";
import { IconRobot, IconSparkles } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AIInput } from "@/components/ui/ai-input";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

interface AIChatSidebarProps {
  tripTitle: string;
  messages: Message[];
  quickActions: { label: string; icon: string }[];
}

export function AIChatSidebar({ tripTitle, messages, quickActions }: AIChatSidebarProps) {
  const handleSubmit = (value: string) => {
    // Handle message submission
    console.log("Message submitted:", value);
  };

  return (
    <div className="flex h-full w-lg flex-col border-r bg-card">
      <div className="flex items-center gap-3 border-b p-4">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <IconRobot className="size-5 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold">AI Travel Assistant</h2>
          <p className="text-sm text-muted-foreground">{tripTitle}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
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
                  "rounded-lg px-3 py-2 text-sm",
                  message.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              size="sm"
              className="h-auto gap-1.5 px-2.5 py-1.5 text-xs"
            >
              <IconSparkles className="size-3" />
              {action.label}
            </Button>
          ))}
        </div>

        <AIInput
          placeholder="Ask anything about your trip..."
          onSubmit={handleSubmit}
          className="py-2"
          minHeight={44}
          maxHeight={150}
        />
      </div>
    </div>
  );
}

