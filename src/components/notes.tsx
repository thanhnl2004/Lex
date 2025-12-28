"use client";

import { useState } from "react";
import { api } from "@/trpc/react";
import { Button } from "@/components/ui/button";

export function Notes() {
  const [text, setText] = useState("");
  
  const utils = api.useUtils();
  const { data: notes, isLoading } = api.note.getAll.useQuery();
  
  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      setText("");
      void utils.note.getAll.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      createNote.mutate({ text });
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold">Notes (DB Test)</h2>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a note..."
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
        <Button type="submit" disabled={createNote.isPending}>
          {createNote.isPending ? "Adding..." : "Add"}
        </Button>
      </form>

      {isLoading ? (
        <p className="text-muted-foreground">Loading notes...</p>
      ) : notes?.length === 0 ? (
        <p className="text-muted-foreground">No notes yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {notes?.map((note) => (
            <li
              key={note.id}
              className="rounded-md border border-border bg-card p-3 text-card-foreground"
            >
              <p>{note.text}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {new Date(note.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

