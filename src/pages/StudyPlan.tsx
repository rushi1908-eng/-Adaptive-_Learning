import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Target, 
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  Star,
  Zap,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function StudyPlan() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review trigonometry basics", subject: "Mathematics", priority: "high", completed: false, estimatedTime: 30 },
    { id: 2, title: "Practice physics problems - Motion", subject: "Physics", priority: "medium", completed: true, estimatedTime: 45 },
    { id: 3, title: "Chemistry lab prep - Safety protocols", subject: "Chemistry", priority: "high", completed: false, estimatedTime: 20 },
    { id: 4, title: "Biology reading - Cell structure", subject: "Biology", priority: "low", completed: false, estimatedTime: 35 },
  ]);

  const weeklyGoals = [
    { subject: "Mathematics", current: 8, target: 10, unit: "hours" },
    { subject: "Physics", current: 6, target: 8, unit: "hours" },
    { subject: "Chemistry", current: 7, target: 8, unit: "hours" },
    { subject: "Biology", current: 4, target: 6, unit: "hours" },
  ];

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/10 text-destructive";
      case "medium": return "bg-warning/10 text-warning";
      case "low": return "bg-success/10 text-success";
      default: return "bg-muted";
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Personalized Study Plan</h1>
              <p className="text-lg text-muted-foreground">
                AI-optimized learning path based on your progress and goals
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Zap className="mr-2 h-5 w-5" />
              Generate New Plan
            </Button>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Today's Progress</h3>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tasks Completed</span>
                    <span className="font-medium">{completedTasks}/{totalTasks}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    {Math.round(progressPercentage)}% of daily goals achieved
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Study Streak</h3>
                  <Star className="h-5 w-5 text-warning" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">7</p>
                  <p className="text-sm text-muted-foreground">consecutive days</p>
                  <Badge className="mt-2 bg-gradient-to-r from-primary to-accent">
                    On Fire! 🔥
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Next Priority</h3>
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Review trigonometry</p>
                  <p className="text-sm text-muted-foreground">Mathematics • 30 min</p>
                  <Button size="sm" className="mt-3 w-full">
                    Start Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Today's Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <Checkbox 
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{task.subject}</Badge>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {task.estimatedTime} min
                        </span>
                      </div>
                    </div>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {weeklyGoals.map((goal) => (
                  <div key={goal.subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{goal.subject}</span>
                      <span className="text-sm font-medium text-foreground">
                        {goal.current}/{goal.target} {goal.unit}
                      </span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{Math.round((goal.current / goal.target) * 100)}% complete</span>
                      <span>{goal.target - goal.current} {goal.unit} remaining</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Smart Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border">
                  <BookOpen className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Focus Session</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your peak performance time, schedule a 90-minute mathematics session at 7 PM today.
                  </p>
                  <Button size="sm" variant="outline">Schedule</Button>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-success/10 to-primary/10 border">
                  <Target className="h-6 w-6 text-success mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Skill Builder</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Practice 5 additional physics problems to reinforce Newton's Laws concepts from yesterday.
                  </p>
                  <Button size="sm" variant="outline">Practice</Button>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-warning/10 to-accent/10 border">
                  <Clock className="h-6 w-6 text-warning mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Quick Review</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Spend 10 minutes reviewing biology notes before starting new chemistry material.
                  </p>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                This Week's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="p-3 border rounded-lg">
                    <div className="text-center">
                      <p className="font-semibold text-foreground mb-2">{day}</p>
                      <div className="space-y-1 text-xs">
                        {index < 3 && (
                          <>
                            <div className="p-1 bg-primary/10 rounded text-primary">Math</div>
                            <div className="p-1 bg-accent/10 rounded text-accent">Physics</div>
                          </>
                        )}
                        {index >= 3 && index < 6 && (
                          <>
                            <div className="p-1 bg-success/10 rounded text-success">Chemistry</div>
                            <div className="p-1 bg-warning/10 rounded text-warning">Biology</div>
                          </>
                        )}
                        {index >= 6 && (
                          <div className="p-1 bg-muted rounded text-muted-foreground">Rest Day</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}