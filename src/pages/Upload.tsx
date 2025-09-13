import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Upload as UploadIcon, 
  FileText, 
  File, 
  CheckCircle2,
  Clock,
  Trash2
} from "lucide-react";
import { useState } from "react";
import uploadImage from "@/assets/document-upload.jpg";

export default function Upload() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: "Mathematics_Chapter_5.pdf", type: "PDF", status: "processed", size: "2.4 MB" },
    { id: 2, name: "Physics_Notes.docx", type: "Word", status: "processing", size: "1.8 MB" },
    { id: 3, name: "Chemistry_Lab_Guide.txt", type: "Text", status: "processed", size: "0.5 MB" },
  ]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Upload Educational Content</h1>
            <p className="text-lg text-muted-foreground">
              Add documents, PDFs, and text files to create personalized assessments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5 text-primary" />
                  Upload New Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${uploadImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <UploadIcon className="h-12 w-12 text-primary mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Drop files here or click to browse
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Supports PDF, Word, Text files (Max 20MB)
                    </p>
                  </div>
                  <Button variant="outline">
                    <File className="mr-2 h-4 w-4" />
                    Choose Files
                  </Button>
                </div>

                {/* File Details Form */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Content Title</Label>
                    <Input id="title" placeholder="e.g., Math Chapter 5: Trigonometry" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Mathematics, Physics, Chemistry" />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Brief description of the content and learning objectives..."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <UploadIcon className="mr-2 h-5 w-5" />
                    Process Content
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Uploaded Files */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Uploaded Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="p-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{file.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{file.type}</Badge>
                          <span className="text-sm text-muted-foreground">{file.size}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {file.status === "processed" && (
                          <Badge className="bg-success/10 text-success">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Processed
                          </Badge>
                        )}
                        {file.status === "processing" && (
                          <Badge variant="outline">
                            <Clock className="mr-1 h-3 w-3" />
                            Processing
                          </Badge>
                        )}
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing Info */}
          <Card>
            <CardHeader>
              <CardTitle>How Content Processing Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">1. Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your educational documents in supported formats
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">2. Process</h3>
                  <p className="text-sm text-muted-foreground">
                    AI analyzes content and extracts key concepts and learning points
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">3. Generate</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically create assessments and personalized study plans
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