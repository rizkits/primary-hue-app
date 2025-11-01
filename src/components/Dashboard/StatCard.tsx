import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  value: string | number;
  trend?: string;
  variant?: "primary" | "success" | "info";
}

export const StatCard = ({
  icon: Icon,
  title,
  subtitle,
  value,
  trend,
  variant = "primary",
}: StatCardProps) => {
  const variantStyles = {
    primary: "border-primary/20 bg-primary/5",
    success: "border-success/20 bg-success/5",
    info: "border-info/20 bg-info/5",
  };

  const iconStyles = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    info: "bg-info/10 text-info",
  };

  return (
    <Card className={cn("p-6 border-2", variantStyles[variant])}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", iconStyles[variant])}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className="text-xs font-medium text-success px-2 py-1 bg-success/10 rounded-md">
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <p className="text-xs text-muted-foreground mb-2">{subtitle}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </Card>
  );
};
