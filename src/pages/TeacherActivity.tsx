import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Clock,
  Trophy,
  BookOpen,
  Target,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';

const TeacherActivity = () => {
  const recentActivity = [
    {
      id: 1,
      type: 'achievement',
      student: 'Priya Sharma',
      action: 'Completed Mathematics Chapter 5',
      time: '2 minutes ago',
      xp: 150,
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      type: 'alert',
      student: 'Rajesh Kumar',
      action: 'Struggling with Physics concepts',
      time: '15 minutes ago',
      icon: AlertTriangle,
      color: 'text-red-500'
    },
    {
      id: 3,
      type: 'progress',
      student: 'Anita Patel',
      action: 'Started new Science module',
      time: '1 hour ago',
      xp: 50,
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      id: 4,
      type: 'achievement',
      student: 'Dev Mehta',
      action: 'Perfect score on coding quiz',
      time: '2 hours ago',
      xp: 200,
      icon: Star,
      color: 'text-purple-500'
    },
    {
      id: 5,
      type: 'insight',
      student: 'Kavya Singh',
      action: 'Improved problem-solving speed by 40%',
      time: '3 hours ago',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 6,
      type: 'alert',
      student: 'Arjun Reddy',
      action: 'Missed 3 consecutive assignments',
      time: '5 hours ago',
      icon: TrendingDown,
      color: 'text-red-500'
    },
    {
      id: 7,
      type: 'achievement',
      student: 'Meera Joshi',
      action: 'Completed daily challenge streak of 7 days',
      time: '1 day ago',
      xp: 300,
      icon: Calendar,
      color: 'text-orange-500'
    },
    {
      id: 8,
      type: 'progress',
      student: 'Sanjay Gupta',
      action: 'Reached Level 5 in Mathematics',
      time: '1 day ago',
      xp: 175,
      icon: Target,
      color: 'text-indigo-500'
    }
  ];

  const getActivityIcon = (type: string) => {
    const activity = recentActivity.find(a => a.type === type);
    return activity ? activity.icon : MessageCircle;
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
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Student Activity Feed
            </h1>
            <p className="text-muted-foreground mb-8">
              Real-time updates on student progress, achievements, and alerts
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <Card key={activity.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{activity.student}</h3>
                        <div className="flex items-center space-x-2">
                          {activity.xp && (
                            <Badge variant="secondary" className="text-xs">
                              +{activity.xp} XP
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {activity.action}
                      </p>
                      
                      {activity.type === 'alert' && (
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Send Message
                          </Button>
                          <Button variant="outline" size="sm">
                            Schedule Meeting
                          </Button>
                        </div>
                      )}
                      
                      {activity.type === 'achievement' && (
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Send Congratulations
                          </Button>
                          <Button variant="outline" size="sm">
                            Share Achievement
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Activity Insights</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">12</div>
                  <div className="text-sm text-muted-foreground">Achievements Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">3</div>
                  <div className="text-sm text-muted-foreground">Students Need Help</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">28</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherActivity;