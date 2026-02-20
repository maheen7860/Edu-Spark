import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Calendar,
  Play,
  Star,
  Flame,
  Zap,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Bell,
  MessageSquare
} from 'lucide-react';

const Dashboard = () => {
  const studentStats = {
    totalXP: 8420,
    level: 12,
    streak: 15,
    completedLessons: 47,
    totalLessons: 68,
    rank: 23,
    todayGoal: 3,
    completedToday: 1
  };

  const recentActivity = [
    {
      type: 'lesson',
      title: 'Completed Advanced Algebra',
      course: 'Mathematics',
      xp: 150,
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      type: 'achievement',
      title: 'Earned "Problem Solver" badge',
      course: 'Mathematics',
      xp: 200,
      time: '1 day ago',
      icon: Award,
      color: 'text-warning'
    },
    {
      type: 'quiz',
      title: 'Physics Quiz - 85% Score',
      course: 'Science',
      xp: 85,
      time: '2 days ago',
      icon: Target,
      color: 'text-primary'
    }
  ];

  const upcomingLessons = [
    {
      title: 'Quadratic Equations',
      course: 'Mathematics',
      duration: '25 min',
      difficulty: 'Intermediate',
      xp: 175
    },
    {
      title: 'Chemical Reactions',
      course: 'Science', 
      duration: '30 min',
      difficulty: 'Beginner',
      xp: 150
    },
    {
      title: 'Computer Basics',
      course: 'Technology',
      duration: '20 min',
      difficulty: 'Beginner',
      xp: 125
    }
  ];

  const notifications = [
    {
      title: 'Daily Challenge Available',
      message: 'Complete today\'s STEM challenge to earn bonus XP!',
      time: '10 minutes ago',
      type: 'challenge'
    },
    {
      title: 'Friend Request',
      message: 'Raj Kumar wants to connect with you',
      time: '1 hour ago',
      type: 'social'
    },
    {
      title: 'Course Update',
      message: 'New lessons added to Mathematics course',
      time: '3 hours ago',
      type: 'update'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Welcome back, Priya! 👋
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Link to="/profile">
                <Button className="btn-secondary">
                  View Profile
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="card-interactive p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-primary mr-2" />
              <span className="text-2xl font-bold text-primary">{studentStats.totalXP}</span>
            </div>
            <p className="text-sm text-muted-foreground">Total XP</p>
          </Card>
          
          <Card className="card-interactive p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-6 h-6 text-warning mr-2" />
              <span className="text-2xl font-bold text-warning">{studentStats.level}</span>
            </div>
            <p className="text-sm text-muted-foreground">Current Level</p>
          </Card>
          
          <Card className="card-interactive p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Flame className="w-6 h-6 text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-orange-500">{studentStats.streak}</span>
            </div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </Card>
          
          <Card className="card-interactive p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-success mr-2" />
              <span className="text-2xl font-bold text-success">#{studentStats.rank}</span>
            </div>
            <p className="text-sm text-muted-foreground">Global Rank</p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Today's Progress */}
            <Card className="card-elevated p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Today's Goal
                </h2>
                <Badge className="level-badge">
                  {studentStats.completedToday}/{studentStats.todayGoal} lessons
                </Badge>
              </div>
              
              <Progress 
                value={(studentStats.completedToday / studentStats.todayGoal) * 100} 
                className="h-3 mb-4" 
              />
              
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {studentStats.todayGoal - studentStats.completedToday} lessons remaining
                </p>
                <Button size="sm" className="btn-hero">
                  Continue Learning
                </Button>
              </div>
            </Card>

            {/* Course Progress */}
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Course Progress
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: 'Mathematics', progress: 75, level: 8, color: 'from-blue-500 to-purple-500' },
                  { name: 'Science', progress: 60, level: 6, color: 'from-green-500 to-teal-500' },
                  { name: 'Technology', progress: 40, level: 4, color: 'from-purple-500 to-pink-500' }
                ].map((course, index) => (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.color}`} />
                      <div>
                        <h3 className="font-medium">{course.name}</h3>
                        <p className="text-sm text-muted-foreground">Level {course.level}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-24">
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <span className="text-sm font-medium min-w-[3rem]">{course.progress}%</span>
                      <Link to={`/course/${course.name.toLowerCase()}`}>
                        <Button size="sm" variant="ghost">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Upcoming Lessons */}
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Up Next
              </h2>
              
              <div className="space-y-3">
                {upcomingLessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Play className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{lesson.course}</span>
                          <span>•</span>
                          <span>{lesson.duration}</span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge className="xp-badge text-xs">+{lesson.xp} XP</Badge>
                      <Button size="sm" className="btn-secondary">
                        Start
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* Recent Activity */}
            <Card className="card-elevated p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Recent Activity
              </h3>
              
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
                  >
                    <activity.icon className={`w-4 h-4 mt-0.5 ${activity.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.course}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge className="xp-badge text-xs">+{activity.xp}</Badge>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Notifications */}
            <Card className="card-elevated p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Bell className="w-4 h-4 mr-2 text-primary" />
                Notifications
              </h3>
              
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="p-3 bg-muted/30 rounded-lg"
                  >
                    <p className="text-sm font-medium mb-1">{notification.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elevated p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link to="/challenge/daily">
                  <Button className="btn-hero w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Daily Challenge
                  </Button>
                </Link>
                
                <Link to="/leaderboard">
                  <Button variant="outline" className="w-full justify-start">
                    <Trophy className="w-4 h-4 mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
                
                <Link to="/live-demo">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Join Live Session
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;