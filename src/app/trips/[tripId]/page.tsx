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

export default function TripWorkspacePage() {
  return (
    <div className="flex h-screen">
      {/* AI Chat Sidebar */}
      <AIChatSidebar
        tripTitle={mockTrip.title}
        messages={mockChatMessages}
        quickActions={quickActions}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Trip Header */}
        <TripHeader
          title={mockTrip.title}
          destination={mockTrip.destination}
          startDate={mockTrip.startDate}
          endDate={mockTrip.endDate}
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
              <ItineraryTab itinerary={mockItinerary} />
            </TabsContent>
            <TabsContent value="flights" className="m-0 h-full">
              <FlightsTab flights={mockFlights} />
            </TabsContent>
            <TabsContent value="hotels" className="m-0 h-full">
              <HotelsTab hotels={mockHotels} />
            </TabsContent>
            <TabsContent value="budget" className="m-0 h-full">
              <BudgetTab budget={mockBudget} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

