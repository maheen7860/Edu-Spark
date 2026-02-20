import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Plus,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Target,
  BookOpen,
  Calculator,
  Atom,
  Laptop,
  Code
} from 'lucide-react';

const TeacherHomework = () => {
  const { toast } = useToast();
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    subject: '',
    description: '',
    dueDate: '',
    points: 100
  });

  const assignments = [
    {
      id: 1,
      title: 'Algebra Problem Set Chapter 5',
      subject: 'Mathematics',
      icon: Calculator,
      dueDate: '2024-01-25',
      submissions: 18,
      totalStudents: 25,
      status: 'active',
      points: 100
    },
    {
      id: 2,
      title: 'Chemical Reactions Lab Report',
      subject: 'Science',
      icon: Atom,
      dueDate: '2024-01-28',
      submissions: 12,
      totalStudents: 25,
      status: 'active',
      points: 150
    },
    {
      id: 3,
      title: 'Digital Citizenship Essay',
      subject: 'Technology',
      icon: Laptop,
      dueDate: '2024-01-30',
      submissions: 8,
      totalStudents: 25,
      status: 'active',
      points: 120
    },
    {
      id: 4,
      title: 'Basic Python Functions',
      subject: 'Coding',
      icon: Code,
      dueDate: '2024-02-02',
      submissions: 15,
      totalStudents: 25,
      status: 'active',
      points: 200
    }
  ];

  const recentSubmissions = [
    {
      id: 1,
      student: 'Priya Sharma',
      assignment: 'Algebra Problem Set Chapter 5',
      submittedAt: '2 hours ago',
      status: 'submitted',
      grade: null
    },
    {
      id: 2,
      student: 'Rajesh Kumar',
      assignment: 'Chemical Reactions Lab Report',
      submittedAt: '5 hours ago',
      status: 'graded',
      grade: 95
    },
    {
      id: 3,
      student: 'Anita Patel',
      assignment: 'Digital Citizenship Essay',
      submittedAt: '1 day ago',
      status: 'submitted',
      grade: null
    }
  ];

  const handleCreateAssignment = () => {
    if (!newAssignment.title || !newAssignment.subject) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Assignment Created",
      description: `"${newAssignment.title}" has been assigned to all students`,
    });
    
    setNewAssignment({
      title: '',
      subject: '',
      description: '',
      dueDate: '',
      points: 100
    });
  };

  const getSubmissionRate = (submissions: number, total: number) => {
    return Math.round((submissions / total) * 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'graded': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'overdue': return 'bg-red-500/10 text-red-700 border-red-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <Link to="/teacher" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Teacher Dashboard
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Homework Management
              </h1>
              <p className="text-muted-foreground">
                Create, manage, and track student assignments
              </p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Assignment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Assignment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Assignment Title"
                    value={newAssignment.title}
                    onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newAssignment.subject}
                    onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                    <option value="Coding">Coding</option>
                  </select>
                  <Textarea
                    placeholder="Assignment Description"
                    value={newAssignment.description}
                    onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
                  />
                  <Input
                    type="date"
                    value={newAssignment.dueDate}
                    onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                  />
                  <Input
                    type="number"
                    placeholder="Points"
                    value={newAssignment.points}
                    onChange={(e) => setNewAssignment({...newAssignment, points: parseInt(e.target.value)})}
                  />
                  <Button onClick={handleCreateAssignment} className="w-full">
                    Create Assignment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Active Assignments</TabsTrigger>
              <TabsTrigger value="submissions">Recent Submissions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <motion.div variants={itemVariants} className="grid gap-4">
                {assignments.map((assignment) => {
                  const Icon = assignment.icon;
                  const submissionRate = getSubmissionRate(assignment.submissions, assignment.totalStudents);
                  
                  return (
                    <Card key={assignment.id} className="p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{assignment.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>Due: {assignment.dueDate}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Target className="w-4 h-4" />
                                <span>{assignment.points} points</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <Badge variant="secondary">{assignment.subject}</Badge>
                              <div className="text-sm">
                                <span className="font-medium">{assignment.submissions}</span>
                                <span className="text-muted-foreground">/{assignment.totalStudents} submitted</span>
                                <span className="ml-2 text-primary">({submissionRate}%)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View Submissions
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </motion.div>
            </TabsContent>

            <TabsContent value="submissions">
              <motion.div variants={itemVariants} className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <Card key={submission.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{submission.student}</h4>
                        <p className="text-sm text-muted-foreground">{submission.assignment}</p>
                        <p className="text-xs text-muted-foreground">{submission.submittedAt}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {submission.grade && (
                          <Badge variant="secondary">Grade: {submission.grade}%</Badge>
                        )}
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {submission.status === 'graded' ? 'Review' : 'Grade'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="analytics">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted-foreground">Active Assignments</div>
                </Card>
                
                <Card className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">53</div>
                  <div className="text-sm text-muted-foreground">Total Submissions</div>
                </Card>
                
                <Card className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-sm text-muted-foreground">Average Grade</div>
                </Card>
                
                <Card className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Pending Grades</div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherHomework;