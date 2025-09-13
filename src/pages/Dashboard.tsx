import { Sidebar } from "@/components/Layout/Sidebar";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { LearningProgress } from "@/components/Dashboard/LearningProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Calendar,
  PlayCircle,
  FileText,
  Upload
} from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div 
          className="relative h-80 bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(168, 162, 241, 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="text-center space-y-4 max-w-2xl px-6">
            <h1 className="text-4xl font-bold">Welcome to Your Learning Journey</h1>
            <p className="text-xl opacity-90">
              Personalized education powered by intelligent analytics
            </p>
            <Button size="lg" variant="secondary" className="mt-6">
              <PlayCircle className="mr-2 h-5 w-5" />
              Continue Learning
            </Button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Courses Enrolled"
              value="12"
              icon={BookOpen}
              trend="+2 this month"
              trendUp={true}
            />
            <StatsCard
              title="Assessments Completed"
              value="48"
              icon={FileText}
              trend="+12 this week"
              trendUp={true}
            />
            <StatsCard
              title="Average Score"
              value="85%"
              icon={Target}
              trend="+5% improvement"
              trendUp={true}
            />
            <StatsCard
              title="Study Streak"
              value="7 days"
              icon={TrendingUp}
              trend="Personal best!"
              trendUp={true}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <RecentActivity />
              
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
                      <Upload className="h-6 w-6" />
                      Upload New Content
                    </Button>
                    <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
                      <FileText className="h-6 w-6" />
                      Take Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <LearningProgress />
            </div>
          </div>

          {/* Study Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Personalized Study Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Review Math Concepts</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your recent assessment, focus on trigonometry basics.
                  </p>
                  <Button size="sm" variant="outline">Start Review</Button>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-success/10 to-primary/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Practice Physics Problems</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    You're doing great! Try advanced motion problems to challenge yourself.
                  </p>
                  <Button size="sm" variant="outline">Practice Now</Button>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-warning/10 to-accent/10 border">
                  <h4 className="font-semibold text-foreground mb-2">Chemistry Lab Prep</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upcoming lab session - review safety protocols and procedures.
                  </p>
                  <Button size="sm" variant="outline">Prepare</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}