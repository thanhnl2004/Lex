"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconPlus } from "@tabler/icons-react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function CreateDocumentButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const utils = api.useUtils();
  const createDocument = api.document.create.useMutation({
    onSuccess: (document) => {
      setIsOpen(false);
      form.reset();
      void utils.document.getAll.invalidate();
      router.push(`/documents/${document.id}`);
    },
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    onSubmit: async ({ value }) => {
      createDocument.mutate({
        title: value.title.trim() || "Untitled Document",
      });
    },
  });

  const isLoading = createDocument.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconPlus className="size-4" />
          New Document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Document</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <form.Field name="title">
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor={field.name}>Document Title</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  placeholder="e.g., Meeting Notes, Project Proposal..."
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={isLoading}
                  autoFocus
                />
              </div>
            )}
          </form.Field>

          <DialogFooter className="mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Document"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
