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
import { IconPlus, IconMapPin } from "@tabler/icons-react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function CreateTripButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const utils = api.useUtils();
  const createTrip = api.trip.create.useMutation({
    onSuccess: (trip) => {
      setIsOpen(false);
      form.reset();
      void utils.trip.getAll.invalidate();
      router.push(`/trips/${trip.id}`);
    },
  });

  const form = useForm({
    defaultValues: {
      tripName: "",
      destination: "",
    },
    onSubmit: async ({ value }) => {
      createTrip.mutate({
        title: value.tripName.trim(),
        destination: value.destination.trim(),
      });
    },
  });

  const isLoading = createTrip.isPending;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconPlus className="size-4" />
          Create Trip
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Trip</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          <form.Field
            name="tripName"
            validators={{
              onChange: ({ value }) =>
                !value.trim() ? "Trip name is required" : undefined,
            }}
          >
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor={field.name}>Trip Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  placeholder="e.g., Summer in Italy"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  disabled={isLoading}
                />
                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="destination"
            validators={{
              onChange: ({ value }) =>
                !value.trim() ? "Destination is required" : undefined,
            }}
          >
            {(field) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor={field.name}>Destination</Label>
                <div className="relative">
                  <IconMapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id={field.name}
                    name={field.name}
                    placeholder="Where are you going?"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="pl-9"
                    disabled={isLoading}
                  />
                </div>
                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit]) => (
              <DialogFooter className="mt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={!canSubmit || isLoading}>
                  {isLoading ? "Creating..." : "Create Trip"}
                </Button>
              </DialogFooter>
            )}
          </form.Subscribe>
        </form>
      </DialogContent>
    </Dialog>
  );
}
