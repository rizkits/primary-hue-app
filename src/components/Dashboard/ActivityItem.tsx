import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  variant?: "primary" | "success" | "destructive";
}

export const ActivityItem = ({
  icon: Icon,
  title,
  description,
  time,
  variant = "primary",
}: ActivityItemProps) => {
  const iconStyles = {
    primary: "bg-primary text-primary-foreground",
    success: "bg-success text-success-foreground",
    destructive: "bg-destructive text-destructive-foreground",
  };

  return (
    <div className="flex items-start gap-3 py-3">
      <div className={cn("p-2 rounded-full", iconStyles[variant])}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">⏱️ {time}</p>
      </div>
    </div>
  );
};
