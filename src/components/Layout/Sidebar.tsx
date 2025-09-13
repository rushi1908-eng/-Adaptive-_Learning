import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Upload, 
  FileText, 
  BarChart3, 
  Target, 
  Home,
  GraduationCap
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  {
    icon: Home,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: Upload,
    label: "Upload Content",
    path: "/upload",
  },
  {
    icon: FileText,
    label: "Assessments",
    path: "/assessments",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: Target,
    label: "Study Plan",
    path: "/study-plan",
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-gradient-to-b from-secondary to-muted">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-lg font-bold text-foreground">EduAdapt</h2>
            <p className="text-xs text-muted-foreground">Smart Learning</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                isActive && "bg-primary text-primary-foreground shadow-md"
              )}
              onClick={() => navigate(item.path)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-lg bg-gradient-to-r from-primary to-accent p-4 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-white mb-2" />
          <p className="text-sm font-medium text-white">Keep Learning!</p>
          <p className="text-xs text-white/80">You're making great progress</p>
        </div>
      </div>
    </div>
  );
}