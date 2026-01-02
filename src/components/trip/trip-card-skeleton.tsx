import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TripCardSkeleton() {
  return (
    <Card className="overflow-hidden p-0">
      {/* Image Skeleton */}
      <Skeleton className="h-40 w-full rounded-none" />

      {/* Content */}
      <CardContent className="flex flex-col gap-3 p-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Details */}
        <div className="flex flex-col gap-1.5">
          {/* Location */}
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-4 w-40" />
          </div>

          {/* Budget */}
          <div className="flex items-center gap-2">
            <Skeleton className="size-4 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="mt-2 h-9 w-full" />
      </CardContent>
    </Card>
  );
}

