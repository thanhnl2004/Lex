"use client";

import * as React from "react";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TripCard } from "./trip-card";
import { CreateTripButton } from "@/components/trip/create-trip-button";
import CreateWithAI from "@/components/trip/create-with-ai";

// Mock data for trips
const mockTrips = [
  {
    id: 1,
    title: "Summer in Italy",
    destination: "Rome, Florence, Venice",
    startDate: "2024-07-15",
    endDate: "2024-07-28",
    budget: 4500,
    status: "planned" as const,
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    destination: "Tokyo, Kyoto, Osaka",
    startDate: "2024-10-05",
    endDate: "2024-10-18",
    budget: 6200,
    status: "draft" as const,
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 3,
    title: "Greek Island Hopping",
    destination: "Santorini, Mykonos, Athens",
    startDate: "2024-09-01",
    endDate: "2024-09-12",
    budget: 3800,
    status: "planned" as const,
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
  },
  {
    id: 4,
    title: "NYC Weekend",
    destination: "New York City",
    startDate: undefined,
    endDate: undefined,
    budget: undefined,
    status: "draft" as const,
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
];

export function TripsContent() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredTrips = mockTrips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenTrip = (id: number) => {
    console.log("Opening trip:", id);
    // TODO: Navigate to trip workspace
  };

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

      {/* Trips Grid */}
      {filteredTrips.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTrips.map((trip) => (
            <TripCard
              key={trip.id}
              {...trip}
              onOpen={handleOpenTrip}
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
          <Button>
            <IconPlus className="size-4" />
            Create Trip
          </Button>
        </div>
      )}
    </div>
  );
}

