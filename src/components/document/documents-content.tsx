"use client";

import * as React from "react";
import { IconSearch, IconFileText } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { DocumentCard } from "./document-card";
import { DocumentCardSkeleton } from "./document-card-skeleton";
import { CreateDocumentButton } from "./create-document-button";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function DocumentsContent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  const { data: documents, isLoading } = api.document.getAll.useQuery();

  const filteredDocuments = React.useMemo(() => {
    if (!documents) return [];
    if (!searchQuery.trim()) return documents;
    return documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [documents, searchQuery]);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Documents</h1>
          <p className="text-muted-foreground">Create and edit your documents with AI assistance</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <CreateDocumentButton />
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <DocumentCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredDocuments.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              id={doc.id}
              title={doc.title}
              updatedAt={doc.updatedAt}
              onOpen={(id) => router.push(`/documents/${id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <div className="rounded-full bg-muted p-4">
            <IconFileText className="size-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">No documents found</h3>
            <p className="text-sm text-muted-foreground">
              {searchQuery ? "Try adjusting your search" : "Create your first document to get started"}
            </p>
          </div>
          {!searchQuery && <CreateDocumentButton />}
        </div>
      )}
    </div>
  );
}
