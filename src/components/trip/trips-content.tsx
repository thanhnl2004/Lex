"use client";

import * as React from "react";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { TripCard } from "./trip-card";
import { TripCardSkeleton } from "./trip-card-skeleton";
import { CreateTripButton } from "@/components/trip/create-trip-button";
import CreateWithAI from "@/components/trip/create-with-ai";
import { api } from '@/trpc/react';
import { useRouter } from "next/navigation";

export function TripsContent() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  const { data: trips, isLoading } = api.trip.getAll.useQuery();

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
          <p className="text-muted-foreground">Plan and manage your travel adventures</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <CreateTripButton />
          <CreateWithAI />
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search trips..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <TripCardSkeleton key={i} />
          ))}
        </div>
      ) : trips && trips.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trips?.map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id}
              title={trip.title}
              destination={trip.destination}
              startDate={trip.startDate?.toISOString()}
              endDate={trip.endDate?.toISOString()}
              budget={trip.budget ?? undefined}
              status="planned"
              imageUrl="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"
              onOpen={(id) => router.push(`/trips/${id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <div className="rounded-full bg-muted p-4">
            <IconSearch className="size-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">No trips found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or create a new trip
            </p>
          </div>
          <CreateTripButton />
        </div>
      )}
    </div>
  );
}

