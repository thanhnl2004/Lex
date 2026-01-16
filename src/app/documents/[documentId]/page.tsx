"use client";

import * as React from "react";
import { DocumentAIChatSidebar, DocumentHeader } from "@/components/document";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";

export default function DocumentEditorPage() {
  const params = useParams<{ documentId: string }>();
  const documentId = params.documentId;

  const { data: document, isLoading } = api.document.getById.useQuery(
    { id: documentId },
    { enabled: !!documentId }
  );

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">Loading document...</div>
          <div className="text-sm text-muted-foreground">Please wait</div>
        </div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">Document not found</div>
          <div className="text-sm text-muted-foreground">This document doesn&apos;t exist or you don&apos;t have access</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* AI Chat Sidebar */}
      <DocumentAIChatSidebar
        documentTitle={document.title}
        documentId={documentId}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Document Header */}
        <DocumentHeader title={document.title} />

        {/* dummy editor area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex min-h-[500px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25">
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-medium">Editor coming soon</p>
                <p className="mt-1 text-sm">TipTap editor will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
