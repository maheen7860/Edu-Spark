import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Users, 
  MessageCircle, 
  BookOpen, 
  Trophy,
  Clock,
  Wifi,
  Battery,
  Signal,
  Star,
  Heart,
  Share2
} from 'lucide-react';

const LiveDemo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [onlineUsers, setOnlineUsers] = useState(1247);
  const [liveViewers, setLiveViewers] = useState(89);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate fluctuating user counts
      setOnlineUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
      setLiveViewers(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const liveClasses = [
    {
      id: 1,
      title: 'Live Math Session: Solving Quadratic Equations',
      teacher: 'Ms. Sarah Johnson',
      subject: 'Mathematics',
      viewers: 156,
      duration: '45 min',
      difficulty: 'Intermediate',
      isLive: true,
      thumbnail: 'https://img.youtube.com/vi/knyrvokugXQ/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Science Lab: Chemical Reactions Demo',
      teacher: 'Dr. Mark Chen',
      subject: 'Chemistry',
      viewers: 203,
      duration: '30 min',
      difficulty: 'Beginner',
      isLive: true,
      thumbnail: 'https://img.youtube.com/vi/rz4Dd1I_fX0/maxresdefault.jpg'
    },
    {
      id: 3,
      title: 'Coding Workshop: Building Your First App',
      teacher: 'Mr. Alex Rivera',
      subject: 'Programming',
      viewers: 89,
      duration: '60 min',
      difficulty: 'Beginner',
      isLive: false,
      startTime: 'Starts in 15 min',
      thumbnail: 'https://img.youtube.com/vi/zOjov-2OZ0E/maxresdefault.jpg'
    }
  ];

  const recentActivities = [
    { user: 'Emma K.', action: 'completed', item: 'Algebra Quiz', time: '2 min ago', xp: 50 },
    { user: 'James L.', action: 'joined', item: 'Live Math Session', time: '5 min ago', xp: 0 },
    { user: 'Sophia M.', action: 'earned', item: 'Problem Solver Badge', time: '8 min ago', xp: 100 },
    { user: 'Daniel R.', action: 'completed', item: 'Science Experiment', time: '12 min ago', xp: 75 }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Live Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center bg-red-500/10 text-red-500 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
              LIVE PLATFORM DEMO
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            EduSpark Live Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience real-time learning with interactive sessions, live chat, and community engagement
          </p>
        </motion.div>

        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="card-elevated p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  <span className="font-semibold text-primary">{onlineUsers.toLocaleString()}</span>
                  <span className="text-muted-foreground ml-1">online</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                  <span className="font-semibold text-red-500">{liveViewers}</span>
                  <span className="text-muted-foreground ml-1">in live sessions</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>
              
              {/* Device Status Indicators */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center text-success">
                  <Wifi className="w-4 h-4 mr-1" />
                  <span>Connected</span>
                </div>
                <div className="flex items-center text-success">
                  <Signal className="w-4 h-4 mr-1" />
                  <span>Strong</span>
                </div>
                <div className="flex items-center text-warning">
                  <Battery className="w-4 h-4 mr-1" />
                  <span>78%</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Classes Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse" />
                Live & Upcoming Sessions
              </h2>

              <div className="space-y-4">
                {liveClasses.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <Card className="card-interactive overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Thumbnail */}
                        <div className="relative aspect-video bg-black overflow-hidden">
                          <img
                            src={session.thumbnail}
                            alt={session.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          
                          {/* Live/Status Overlay */}
                          <div className="absolute top-2 left-2">
                            {session.isLive ? (
                              <Badge className="bg-red-500 text-white">
                                <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                                LIVE
                              </Badge>
                            ) : (
                              <Badge className="bg-yellow-500/90 text-white">
                                Starting Soon
                              </Badge>
                            )}
                          </div>

                          {/* Viewer Count */}
                          {session.isLive && (
                            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                              <div className="flex items-center text-white text-xs">
                                <Users className="w-3 h-3 mr-1" />
                                {session.viewers}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="md:col-span-2 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                              {session.title}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-red-500">
                                <Heart className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-primary">
                                <Share2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            by {session.teacher} • {session.subject}
                          </p>

                          <div className="flex items-center space-x-2 mb-4">
                            <Badge variant="secondary" className="text-xs">
                              {session.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {session.duration}
                            </Badge>
                            {session.isLive && (
                              <Badge className="bg-primary/10 text-primary text-xs">
                                <Users className="w-3 h-3 mr-1" />
                                {session.viewers} watching
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              {session.isLive ? 'Live now' : session.startTime}
                            </div>
                            <Button 
                              className={session.isLive ? "btn-hero" : "btn-secondary"}
                              size="sm"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              {session.isLive ? 'Join Live' : 'Get Notified'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Live Activity */}
          <div className="space-y-6">
            {/* Live Chat Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="card-elevated p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                  Live Chat Activity
                </h3>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  <div className="text-xs text-muted-foreground border-b pb-2">
                    Math Session Chat • {liveViewers} participants
                  </div>
                  
                  {/* Sample chat messages */}
                  <div className="space-y-2">
                    <div className="bg-muted/30 rounded p-2 text-sm">
                      <div className="font-medium text-xs text-primary">Emma_K</div>
                      <div>Great explanation! This makes so much sense now 📚</div>
                    </div>
                    <div className="bg-muted/30 rounded p-2 text-sm">
                      <div className="font-medium text-xs text-success">Teacher_Sarah</div>
                      <div>Excellent question! Let me show you step by step ✨</div>
                    </div>
                    <div className="bg-muted/30 rounded p-2 text-sm">
                      <div className="font-medium text-xs text-primary">James_L</div>
                      <div>Can you repeat the last part please? 🤔</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t">
                  <div className="text-xs text-muted-foreground mb-2">Join the conversation</div>
                  <Button size="sm" className="w-full btn-secondary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Chat
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="card-elevated p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-warning" />
                  Recent Activity
                </h3>
                
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div>
                          <span className="font-medium text-primary">{activity.user}</span>
                          <span className="text-muted-foreground"> {activity.action} </span>
                          <span className="font-medium">{activity.item}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                          {activity.xp > 0 && (
                            <Badge className="xp-badge text-xs">+{activity.xp} XP</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="card-elevated p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-success" />
                  Today's Stats
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lessons Completed</span>
                    <span className="font-semibold text-success">342</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">XP Earned</span>
                    <span className="font-semibold text-primary">12,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">New Badges</span>
                    <span className="font-semibold text-warning">28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-success">87%</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;