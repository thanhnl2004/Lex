"use client";

import * as React from "react";
import { IconFileText, IconClock, IconChevronRight } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DocumentCardProps {
  id: string;
  title: string;
  updatedAt: Date;
  onOpen?: (id: string) => void;
}

export function DocumentCard({
  id,
  title,
  updatedAt,
  onOpen,
}: DocumentCardProps) {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  };

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      {/* Document Icon Header */}
      <div className="flex h-32 items-center justify-center bg-muted/50">
        <IconFileText className="size-16 text-muted-foreground/50" />
      </div>

      {/* Content */}
      <CardContent className="flex flex-col gap-3 p-4">
        <h3 className="truncate text-lg font-semibold leading-tight">{title}</h3>

        {/* Last updated */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <IconClock className="size-4 shrink-0" />
          <span>Edited {formatDate(updatedAt)}</span>
        </div>

        {/* Open Button */}
        <Button
          className="mt-2 w-full"
          onClick={() => onOpen?.(id)}
        >
          Open
          <IconChevronRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
