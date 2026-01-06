"use client";

import * as React from "react";
import Image from "next/image";
import { IconMapPin, IconCalendar, IconCurrencyDollar, IconChevronRight } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TripCardProps {
  id: number;
  title: string;
  destination: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  status: "planned" | "draft";
  imageUrl: string;
  onOpen?: (id: number) => void;
}

export function TripCard({
  id,
  title,
  destination,
  startDate,
  endDate,
  budget,
  status,
  imageUrl,
  onOpen,
}: TripCardProps) {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatBudget = (amount?: number) => {
    if (!amount) return null;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const dateRange =
    startDate && endDate
      ? `${formatDate(startDate)} - ${formatDate(endDate)}`
      : startDate
        ? formatDate(startDate)
        : "No dates set";

  return (
    <Card className="group overflow-hidden p-0 transition-shadow hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Status Badge */}
        <Badge
          className={cn(
            "absolute top-3 right-3 capitalize",
            status === "planned"
              ? "bg-chart-1 text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {status}
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="flex flex-col gap-3 px-4 pb-4">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>

        {/* Details */}
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <IconMapPin className="size-4 shrink-0 text-primary" />
            <span className="truncate">{destination}</span>
          </div>

          <div className="flex items-center gap-2">
            <IconCalendar className="size-4 shrink-0 text-primary" />
            <span>{dateRange}</span>
          </div>

          <div className="flex items-center gap-2">
            <IconCurrencyDollar className="size-4 shrink-0 text-primary" />
            <span>{budget ? formatBudget(budget) : "Unknown"}</span>
          </div>
        </div>

        {/* Open Button */}
        <Button
          className="mt-2 w-full"
          onClick={() => onOpen?.(id)}
        >
          Open
          <IconChevronRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

