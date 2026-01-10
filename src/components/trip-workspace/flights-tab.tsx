import * as React from "react";
import { IconPlane, IconClock, IconArrowRight } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FlightOption } from "@/lib/types/plan";


interface FlightsTabProps {
  flights?: FlightOption[];
}

export function FlightsTab({ flights }: FlightsTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (!flights || flights.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
            <IconPlane className="size-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-muted-foreground">No flight options yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ask the AI to search for flights for your trip.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      {flights.map((flight) => (
        <Card key={flight.id}>
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100">
                  <IconPlane className="size-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">{flight.airline}</p>
                  <p className="text-sm text-muted-foreground">{flight.flightNumber}</p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={cn(
                  flight.type === "outbound"
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-gray-50 text-gray-700"
                )}
              >
                {flight.type === "outbound" ? "Outbound" : "Return"}
              </Badge>
            </div>

            {/* Flight Details */}
            <div className="flex items-center justify-between">
              {/* Departure */}
              <div>
                <p className="text-2xl font-bold">{flight.departure.time}</p>
                <p className="text-sm text-muted-foreground">{flight.departure.airport}</p>
                <p className="text-sm text-muted-foreground">{flight.departure.date}</p>
              </div>

              {/* Duration */}
              <div className="flex flex-col items-center px-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <IconClock className="size-4" />
                  <span>{flight.duration}</span>
                </div>
                <div className="my-2 flex items-center gap-2">
                  <div className="h-px w-20 bg-border" />
                  <IconArrowRight className="size-4 text-muted-foreground" />
                  <div className="h-px w-20 bg-border" />
                </div>
                <p className="text-sm text-muted-foreground">{flight.stops}</p>
              </div>

              {/* Arrival */}
              <div className="text-right">
                <p className="text-2xl font-bold">{flight.arrival.time}</p>
                <p className="text-sm text-muted-foreground">{flight.arrival.airport}</p>
                <p className="text-sm text-muted-foreground">{flight.arrival.date}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4 border-t pt-4 text-right">
              <p className="text-2xl font-bold">{formatCurrency(flight.price)}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

