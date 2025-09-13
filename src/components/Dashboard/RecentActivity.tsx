import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, BookOpen, TrendingUp } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "assessment",
    title: "Math Quiz Chapter 5",
    status: "completed",
    score: 85,
    time: "2 hours ago",
    icon: CheckCircle2,
  },
  {
    id: 2,
    type: "study",
    title: "Physics: Motion Laws",
    status: "in-progress", 
    progress: 67,
    time: "4 hours ago",
    icon: BookOpen,
  },
  {
    id: 3,
    type: "achievement",
    title: "Streak Master",
    status: "unlocked",
    description: "7 days learning streak",
    time: "1 day ago",
    icon: TrendingUp,
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <div className="text-right">
                {activity.status === "completed" && activity.score && (
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    {activity.score}%
                  </Badge>
                )}
                {activity.status === "in-progress" && activity.progress && (
                  <Badge variant="outline">
                    {activity.progress}% done
                  </Badge>
                )}
                {activity.status === "unlocked" && (
                  <Badge className="bg-gradient-to-r from-primary to-accent">
                    New!
                  </Badge>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}