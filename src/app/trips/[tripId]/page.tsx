"use client";

import * as React from "react";
import {
  IconLayoutList,
  IconPlane,
  IconBuilding,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AIChatSidebar,
  TripHeader,
  ItineraryTab,
  FlightsTab,
  HotelsTab,
  BudgetTab,
} from "@/components/trip-workspace";
import {
  mockTrip,
  mockItinerary,
  mockFlights,
  mockHotels,
  mockBudget,
  mockChatMessages,
  quickActions,
} from "@/lib/mock-data/trip-workspace";
import { api } from "@/trpc/react";
import { useParams } from "next/navigation";
import type { TripPlanData } from "@/lib/types/plan";

export default function TripWorkspacePage() {
  const params = useParams<{ tripId: string }>();
  const tripId = Number(params.tripId);

  const { data: trip, isLoading: tripLoading } = api.trip.getById.useQuery(
    { id: tripId },
    { enabled: !!tripId && !isNaN(tripId)}
  );

  const { data: plan, isLoading: planLoading } = api.plan.getLatestByTripId.useQuery(
    { tripId },
    { enabled: !!tripId && !isNaN(tripId)}
  );

  const planData = React.useMemo<TripPlanData | null>(() => {
    if (!plan?.plan) return null;
    return plan.plan as unknown as TripPlanData;
  }, [plan]);

  if (tripLoading || planLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">Loading trip...</div>
          <div className="text-sm text-muted-foreground">Please wait</div>
        </div>
      </div>
    );
  }
  if (!trip) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">Trip not found</div>
          <div className="text-sm text-muted-foreground">This trip doesn&apos;t exist or you don&apos;t have access</div>
        </div>
      </div>
    );
  }

  const intinerary = planData?.itinerary;
  const flights = planData?.flights;
  const hotels = planData?.hotels;
  const budget = planData?.budget;

  const startDate = trip.startDate?.toISOString() ?? "";
  const endDate = trip.endDate?.toISOString() ?? "";

  return (
    <div className="flex h-screen">
      {/* AI Chat Sidebar */}
      <AIChatSidebar
        tripTitle={trip.title}
        messages={mockChatMessages}
        quickActions={quickActions}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Trip Header */}
        <TripHeader
          title={trip.title}
          destination={trip.destination}
          startDate={startDate}
          endDate={endDate}
        />

        {/* Tabs */}
        <Tabs defaultValue="itinerary" className="flex flex-1 flex-col overflow-hidden">
          <div className="border-b px-6">
            <TabsList className="h-12 w-auto gap-0 bg-transparent p-0">
              <TabsTrigger
                value="itinerary"
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                <IconLayoutList className="mr-2 size-4" />
                Itinerary
              </TabsTrigger>
              <TabsTrigger
                value="flights"
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                <IconPlane className="mr-2 size-4" />
                Flights
              </TabsTrigger>
              <TabsTrigger
                value="hotels"
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                <IconBuilding className="mr-2 size-4" />
                Hotels
              </TabsTrigger>
              <TabsTrigger
                value="budget"
                className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                <IconCurrencyDollar className="mr-2 size-4" />
                Budget
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-y-auto">
            <TabsContent value="itinerary" className="m-0 h-full">
              <ItineraryTab itinerary={intinerary} planId={plan?.id ?? 0} />
            </TabsContent>
            <TabsContent value="flights" className="m-0 h-full">
              <FlightsTab flights={flights} />
            </TabsContent>
            <TabsContent value="hotels" className="m-0 h-full">
              <HotelsTab hotels={hotels} />
            </TabsContent>
            <TabsContent value="budget" className="m-0 h-full">
              <BudgetTab budget={budget} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

