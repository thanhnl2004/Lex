import * as React from "react";
import { IconMapPin, IconClock } from "@tabler/icons-react";
import { Plane, Building, MapPin, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Activity {
  id: number;
  type: "transport" | "hotel" | "activity" | "food";
  title: string;
  time: string;
}

interface DayItinerary {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
}

interface ItineraryTabProps {
  itinerary: DayItinerary[];
}

const activityIcons = {
  transport: Plane,
  hotel: Building,
  activity: MapPin,
  food: UtensilsCrossed,
};

export function ItineraryTab({ itinerary }: ItineraryTabProps) {
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
