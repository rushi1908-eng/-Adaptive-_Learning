import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy } from "lucide-react";

const subjects = [
  { name: "Mathematics", progress: 78, total: 24, completed: 18, color: "bg-primary" },
  { name: "Physics", progress: 65, total: 20, completed: 13, color: "bg-accent" },
  { name: "Chemistry", progress: 92, total: 18, completed: 16, color: "bg-success" },
  { name: "Biology", progress: 45, total: 22, completed: 10, color: "bg-warning" },
];

export function LearningProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                <span className="font-medium text-foreground">{subject.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {subject.progress >= 90 && <Trophy className="h-4 w-4 text-warning" />}
                <span>{subject.completed}/{subject.total} lessons</span>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
            <p className="text-right text-sm font-medium text-foreground">{subject.progress}%</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}