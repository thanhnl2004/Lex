"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconDotsVertical, IconMapPin, IconCalendar } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface TripHeaderProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
}

export function TripHeader({ title, destination, startDate, endDate }: TripHeaderProps) {
  const router = useRouter();

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    return `${startDate.toLocaleDateString("en-US", options)} - ${endDate.toLocaleDateString("en-US", options)}`;
  };

  return (
    <div className="border-b bg-card px-6 py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/")}
            className="mt-1"
          >
            <IconArrowLeft className="size-5" />
          </Button>

          {/* Trip Info */}
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <IconMapPin className="size-4" />
                <span>{destination}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCalendar className="size-4" />
                <span>{formatDateRange(startDate, endDate)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <Button variant="ghost" size="icon">
          <IconDotsVertical className="size-5" />
        </Button>
      </div>
    </div>
  );
}

