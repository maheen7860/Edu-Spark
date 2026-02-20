import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Trophy, 
  Download, 
  TrendingUp, 
  Clock,
  Target,
  FileText,
  Calendar,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const Teacher = () => {
  const classStats = [
    {
      icon: Users,
      label: 'Total Students',
      value: '42',
      change: '+3 this month',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      label: 'Active Lessons',
      value: '18',
      change: '6 completed today',
      color: 'text-success'
    },
    {
      icon: Trophy,
      label: 'Avg. Performance',
      value: '87%',
      change: '+5% from last week',
      color: 'text-warning'
    },
    {
      icon: Clock,
      label: 'Study Time',
      value: '324h',
      change: 'This month',
      color: 'text-purple-500'
    }
  ];

  const studentProgress = [
    { name: 'Arya Patel', subject: 'Mathematics', progress: 92, status: 'excellent', xp: 340 },
    { name: 'Rahul Kumar', subject: 'Science', progress: 78, status: 'good', xp: 280 },
    { name: 'Priya Sharma', subject: 'Technology', progress: 65, status: 'average', xp: 220 },
    { name: 'Amit Singh', subject: 'Coding', progress: 45, status: 'needs-help', xp: 160 },
    { name: 'Sneha Reddy', subject: 'Mathematics', progress: 88, status: 'excellent', xp: 310 },
  ];

  const recentActivity = [
    { student: 'Arya Patel', action: 'Completed Math Challenge #12', time: '2 hours ago', type: 'achievement' },
    { student: 'Rahul Kumar', action: 'Struggling with Physics concepts', time: '4 hours ago', type: 'alert' },
    { student: 'Priya Sharma', action: 'Earned "Problem Solver" badge', time: '6 hours ago', type: 'achievement' },
    { student: 'Class Average', action: 'Weekly performance improved by 5%', time: '1 day ago', type: 'insight' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'average': return 'text-warning';
      case 'needs-help': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'achievement': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'alert': return <AlertCircle className="w-4 h-4 text-destructive" />;
      case 'insight': return <TrendingUp className="w-4 h-4 text-primary" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Teacher Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your students' progress and engagement in real-time
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button 
                className="btn-secondary"
                onClick={() => window.print()}
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
              <Button 
                className="btn-hero"
                onClick={() => {
                  const csvData = "Student,Subject,Progress,XP\nArya Patel,Mathematics,92%,340\nRahul Kumar,Science,78%,280";
                  const blob = new Blob([csvData], { type: 'text/csv' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'student-progress.csv';
                  a.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {classStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-elevated p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-success">{stat.change}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="card-elevated p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Student Performance
                </h2>
                <Badge className="bg-primary/10 text-primary">
                  <Target className="w-3 h-3 mr-1" />
                  This Week
                </Badge>
              </div>

              <div className="space-y-4">
                {studentProgress.map((student, index) => (
                  <motion.div
                    key={student.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{student.name}</h4>
                        <span className={`text-sm font-medium ${getStatusColor(student.status)}`}>
                          {student.progress}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{student.subject}</p>
                      <div className="progress-bar h-2">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-sm font-semibold text-primary">+{student.xp}</div>
                      <div className="text-xs text-muted-foreground">XP Today</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Recent Activity
              </h2>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg"
                  >
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.student}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/teacher/activity">
                <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/10">
                  View All Activity
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Card className="card-elevated p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/teacher/homework">
                <Button className="btn-secondary justify-start w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Assign Homework
                </Button>
              </Link>
              <Link to="/teacher/challenges">
                <Button className="btn-secondary justify-start w-full">
                  <Trophy className="w-4 h-4 mr-2" />
                  Create Challenge
                </Button>
              </Link>
              <Link to="/teacher/schedule">
                <Button className="btn-secondary justify-start w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Class
                </Button>
              </Link>
              <Link to="/teacher/messages">
                <Button className="btn-secondary justify-start w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Message Parents
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Teacher;