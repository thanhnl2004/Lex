import * as React from "react";
import Image from "next/image";
import { IconMapPin, IconCalendar, IconStar, IconBuilding } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import type { HotelOption } from "@/lib/types/plan";

interface HotelsTabProps {
  hotels?: HotelOption[];
}

export function HotelsTab({ hotels }: HotelsTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (!hotels || hotels.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
            <IconBuilding className="size-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-muted-foreground">No hotel options yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ask the AI to search for hotels for your trip.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden">
          <CardContent className="flex gap-6 p-0">
            {/* Hotel Image */}
            <div className="relative h-40 w-40 shrink-0">
              {hotel.imageUrl ? (
                <Image
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted">
                  <IconBuilding className="size-8 text-muted-foreground" />
                </div>
              )}
            </div>

            {/* Hotel Info */}
            <div className="flex flex-1 flex-col justify-center py-4 pr-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <IconMapPin className="size-4" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <IconStar className="size-4 fill-amber-500" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <IconCalendar className="size-4" />
                <span>
                  {hotel.checkIn} - {hotel.checkOut} · {hotel.nights} nights
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {formatCurrency(hotel.pricePerNight)}/night
                </p>
                <p className="text-xl font-bold">{formatCurrency(hotel.totalPrice)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

