import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Play,
  Clock,
  CheckCircle2,
  Star,
  BarChart3,
  Plus
} from "lucide-react";
import { useState } from "react";

export default function Assessments() {
  const [assessments] = useState([
    {
      id: 1,
      title: "Mathematics: Trigonometry Basics",
      subject: "Mathematics",
      questions: 15,
      duration: 30,
      difficulty: "Medium",
      status: "available",
      score: null,
      attempts: 0
    },
    {
      id: 2,
      title: "Physics: Newton's Laws",
      subject: "Physics", 
      questions: 20,
      duration: 45,
      difficulty: "Hard",
      status: "completed",
      score: 85,
      attempts: 2
    },
    {
      id: 3,
      title: "Chemistry: Periodic Table",
      subject: "Chemistry",
      questions: 12,
      duration: 25,
      difficulty: "Easy",
      status: "in-progress",
      score: null,
      attempts: 1,
      progress: 67
    },
    {
      id: 4,
      title: "Biology: Cell Structure",
      subject: "Biology",
      questions: 18,
      duration: 35,
      difficulty: "Medium",
      status: "available",
      score: null,
      attempts: 0
    }
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/10 text-success";
      case "Medium": return "bg-warning/10 text-warning";
      case "Hard": return "bg-destructive/10 text-destructive";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success";
      case "in-progress": return "bg-primary/10 text-primary";
      case "available": return "bg-muted";
      default: return "bg-muted";
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Assessments</h1>
              <p className="text-lg text-muted-foreground">
                Test your knowledge with AI-generated assessments
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Plus className="mr-2 h-5 w-5" />
              Create Assessment
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Total Assessments</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-warning mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">85%</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </CardContent>
            </Card>
          </div>

          {/* Assessment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{assessment.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{assessment.subject}</Badge>
                        <Badge className={getDifficultyColor(assessment.difficulty)}>
                          {assessment.difficulty}
                        </Badge>
                        <Badge className={getStatusColor(assessment.status)}>
                          {assessment.status}
                        </Badge>
                      </div>
                    </div>
                    {assessment.score && (
                      <div className="text-right">
                        <p className="text-2xl font-bold text-success">{assessment.score}%</p>
                        <p className="text-xs text-muted-foreground">Best Score</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{assessment.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{assessment.duration} minutes</span>
                    </div>
                  </div>

                  {assessment.status === "in-progress" && assessment.progress && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{assessment.progress}%</span>
                      </div>
                      <Progress value={assessment.progress} />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-muted-foreground">
                      {assessment.attempts} attempt{assessment.attempts !== 1 ? 's' : ''}
                    </p>
                    <div className="flex gap-2">
                      {assessment.status === "completed" && (
                        <Button variant="outline" size="sm">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          View Results
                        </Button>
                      )}
                      <Button 
                        size="sm"
                        className={assessment.status === "in-progress" ? "bg-primary" : ""}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {assessment.status === "in-progress" ? "Continue" : "Start"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Assessment Types */}
          <Card>
            <CardHeader>
              <CardTitle>Assessment Types Available</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3 p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Multiple Choice</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional multiple choice questions with instant feedback
                  </p>
                </div>
                
                <div className="text-center space-y-3 p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">True/False</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick assessment questions for concept verification
                  </p>
                </div>
                
                <div className="text-center space-y-3 p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Fill in the Blank</h3>
                  <p className="text-sm text-muted-foreground">
                    Test detailed knowledge with completion exercises
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}