import * as React from "react";
import { IconMapPin, IconClock, IconCalendarEvent } from "@tabler/icons-react";
import { Plane, Building, MapPin, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import type { DayItinerary } from "@/lib/types/plan";

interface ItineraryTabProps {
  itinerary?: DayItinerary[];
  planId: number;
}

const activityIcons = {
  transport: Plane,
  hotel: Building,
  activity: MapPin,
  food: UtensilsCrossed,
};

export function ItineraryTab({ itinerary, planId }: ItineraryTabProps) {
  const utils = api.useUtils();
  const updateActivity = api.activity.update.useMutation({
    onSuccess: () => {
      void utils.plan.getLatestByTripId.invalidate();
    },
  });
  const deleteActivity = api.activity.delete.useMutation({
    onSuccess: () => {
      void utils.plan.getLatestByTripId.invalidate();
    },
  });

  const [editing, setEditing] = React.useState<{
    day: number;
    activityId: number;
    field: "time" | "title"
  } | null>(null);

  const handleUpdate = (
    day: number,
    activityId: number,
    field: "time" | "title",
    value: string,
  ) => {
    updateActivity.mutate({
      planId,
      day,
      activityId,
      updates: {
        [field]: value,
      },
    });
    setEditing(null);
  };

  const handleDelete = (day: number, activityId: number) => {
    deleteActivity.mutate({
      planId,
      day,
      activityId,
    });
    setEditing(null);
  };

  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
            <IconCalendarEvent className="size-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-muted-foreground">No itinerary yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ask the AI to create a travel plan for your trip.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-24 py-6">
      {itinerary.map((day) => (
        <Card key={day.day}>
          {/* Day Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                {day.day}
              </div>
              <div>
                <h3 className="font-semibold">Day {day.day}</h3>
                <p className="text-sm text-muted-foreground">{day.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <IconMapPin className="size-4 text-primary" />
              <span>{day.location}</span>
            </div>
          </div>

          {/* Activities */}
          <CardContent className="px-6 pb-5 pt-0">
            <div className="flex flex-col gap-3">
              {day.activities.map((activity) => {
                const Icon = activityIcons[activity.type];

                return (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 rounded-xl bg-muted/40 px-4 py-3"
                  >
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full",
                        
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <IconClock className="size-3.5" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
