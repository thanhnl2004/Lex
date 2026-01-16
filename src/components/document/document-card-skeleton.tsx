import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function DocumentCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      {/* Document Icon Header */}
      <Skeleton className="h-32 w-full rounded-none" />

      {/* Content */}
      <CardContent className="flex flex-col gap-3 p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="mt-2 h-10 w-full" />
      </CardContent>
    </Card>
  );
}
