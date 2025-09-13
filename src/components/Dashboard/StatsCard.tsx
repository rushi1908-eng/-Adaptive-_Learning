import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) {
  return (
    <Card className="hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
            {trend && (
              <p className={`text-sm mt-1 ${trendUp ? 'text-success' : 'text-warning'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}