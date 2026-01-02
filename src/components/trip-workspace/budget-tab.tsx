import * as React from "react";
import {
  IconPlane,
  IconBuilding,
  IconTicket,
  IconToolsKitchen2,
  IconCar,
  IconDots,
  IconAlertCircle,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BudgetCategory {
  name: string;
  amount: number;
  percentage: number;
  icon: string;
}

interface BudgetData {
  total: number;
  budgeted: number;
  categories: BudgetCategory[];
}

interface BudgetTabProps {
  budget: BudgetData;
}

const categoryIcons: Record<string, React.ElementType> = {
  plane: IconPlane,
  building: IconBuilding,
  ticket: IconTicket,
  utensils: IconToolsKitchen2,
  car: IconCar,
  ellipsis: IconDots,
};

const categoryColors: Record<string, string> = {
  plane: "bg-blue-100 text-blue-600",
  building: "bg-green-100 text-green-600",
  ticket: "bg-rose-100 text-rose-600",
  utensils: "bg-orange-100 text-orange-600",
  car: "bg-emerald-100 text-emerald-600",
  ellipsis: "bg-gray-100 text-gray-600",
};

const barColors: Record<string, string> = {
  plane: "bg-blue-500",
  building: "bg-green-500",
  ticket: "bg-rose-500",
  utensils: "bg-orange-500",
  car: "bg-emerald-500",
  ellipsis: "bg-gray-500",
};

export function BudgetTab({ budget }: BudgetTabProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const isOverBudget = budget.total > budget.budgeted;
  const percentageUsed = Math.round((budget.total / budget.budgeted) * 100);

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Budget Overview */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Budget Overview</CardTitle>
            {isOverBudget && (
              <div className="flex items-center gap-1.5 text-destructive">
                <IconAlertCircle className="size-4" />
                <span className="text-sm font-medium">Over budget</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{formatCurrency(budget.total)}</span>
            <span className="text-muted-foreground">
              / {formatCurrency(budget.budgeted)} budgeted
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  isOverBudget ? "bg-destructive" : "bg-primary"
                )}
                style={{ width: `${Math.min(percentageUsed, 100)}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {percentageUsed}% of budget used
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Expense Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {budget.categories.map((category) => {
              const Icon = categoryIcons[category.icon] || IconDots;
              const iconColor = categoryColors[category.icon] || categoryColors.ellipsis;
              const barColor = barColors[category.icon] || barColors.ellipsis;

              return (
                <div key={category.name} className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-lg",
                      iconColor
                    )}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold">
                          {formatCurrency(category.amount)}
                        </span>
                        <span className="w-10 text-right text-sm text-muted-foreground">
                          {category.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn("h-full rounded-full", barColor)}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

