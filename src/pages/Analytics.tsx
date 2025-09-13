import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp,
  Target,
  Calendar,
  Download,
  Eye
} from "lucide-react";
import analyticsImage from "@/assets/analytics-visual.jpg";

export default function Analytics() {
  const performanceData = [
    { subject: "Mathematics", score: 78, trend: "+5%", color: "bg-primary" },
    { subject: "Physics", score: 85, trend: "+12%", color: "bg-accent" },
    { subject: "Chemistry", score: 92, trend: "+3%", color: "bg-success" },
    { subject: "Biology", score: 67, trend: "-2%", color: "bg-warning" },
  ];

  const studyPatterns = [
    { time: "Morning (6-9 AM)", effectiveness: 85, sessions: 12 },
    { time: "Afternoon (12-3 PM)", effectiveness: 72, sessions: 8 },
    { time: "Evening (6-9 PM)", effectiveness: 90, sessions: 15 },
    { time: "Night (9-12 PM)", effectiveness: 65, sessions: 5 },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Track your learning progress and identify improvement areas
              </p>
            </div>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Export Report
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">+15%</p>
                <p className="text-sm text-muted-foreground">Overall Improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">81%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">7</p>
                <p className="text-sm text-muted-foreground">Study Streak (days)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-8 w-8 text-warning mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">24h</p>
                <p className="text-sm text-muted-foreground">Total Study Time</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Performance by Subject */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Performance by Subject
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {performanceData.map((item) => (
                  <div key={item.subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{item.subject}</span>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-success/10 text-success">
                          {item.trend}
                        </Badge>
                        <span className="font-bold text-foreground">{item.score}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${item.color} transition-all duration-300`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Visual Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Learning Patterns Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="h-64 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${analyticsImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="text-center space-y-3">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                    <p className="font-semibold text-foreground">Interactive Charts</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed performance analytics and trends
                    </p>
                    <Button size="sm">
                      View Full Analytics
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Study Patterns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Optimal Study Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {studyPatterns.map((pattern) => (
                  <div key={pattern.time} className="p-4 border rounded-lg space-y-3">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground">{pattern.time}</h4>
                      <p className="text-sm text-muted-foreground">{pattern.sessions} sessions</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Effectiveness</span>
                        <span className="font-medium">{pattern.effectiveness}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                          style={{ width: `${pattern.effectiveness}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Data-Driven Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Peak Performance Time</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your highest effectiveness is during evening sessions (6-9 PM). Schedule challenging topics during this time.
                  </p>
                  <Badge className="bg-primary/10 text-primary">90% effectiveness</Badge>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-success/10 to-primary/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Subject Focus</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Biology needs attention. Consider spending 20% more time on this subject to improve overall performance.
                  </p>
                  <Badge className="bg-warning/10 text-warning">Needs improvement</Badge>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-success/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Study Frequency</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Maintain your 7-day streak! Consistent daily study sessions show 15% better retention rates.
                  </p>
                  <Badge className="bg-success/10 text-success">Excellent streak</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}