"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconDotsVertical } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface DocumentHeaderProps {
  title: string;
}

export function DocumentHeader({ title }: DocumentHeaderProps) {
  const router = useRouter();

  return (
    <div className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/documents")}
          >
            <IconArrowLeft className="size-5" />
          </Button>

          {/* Document Title */}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>

        {/* Actions */}
        <Button variant="ghost" size="icon">
          <IconDotsVertical className="size-5" />
        </Button>
      </div>
    </div>
  );
}
