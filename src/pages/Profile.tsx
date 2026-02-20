import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Trophy, 
  Star, 
  Calendar, 
  Target, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Edit,
  Camera,
  Mail,
  Phone,
  MapPin,
  School,
  Award,
  Flame,
  Zap,
  Download,
  Settings
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@student.edu',
    phone: '+91 98765 43210',
    location: 'Rajasthan, India',
    school: 'Government Higher Secondary School',
    grade: 'Class 10',
    bio: 'Passionate about mathematics and science. Loves solving complex problems and learning new concepts.',
  });

  const stats = {
    totalXP: 8420,
    level: 12,
    coursesCompleted: 3,
    currentStreak: 15,
    totalStudyTime: '127 hours',
    averageScore: 87,
    rank: 23,
    badges: 12
  };

  const recentAchievements = [
    { name: 'Math Master', icon: '🔢', date: '2 days ago', xp: 200 },
    { name: 'Problem Solver', icon: '🧩', date: '1 week ago', xp: 150 },
    { name: 'Science Explorer', icon: '🔬', date: '2 weeks ago', xp: 175 },
    { name: 'Study Streak', icon: '🔥', date: '3 weeks ago', xp: 100 }
  ];

  const subjects = [
    { name: 'Mathematics', progress: 85, level: 8, xp: 3200 },
    { name: 'Science', progress: 72, level: 6, xp: 2400 },
    { name: 'Technology', progress: 60, level: 5, xp: 1800 },
    { name: 'Coding', progress: 45, level: 3, xp: 1020 }
  ];

  const studyActivity = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.1 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 3.5 },
    { day: 'Sun', hours: 2.1 }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
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
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Student Profile
            </h1>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="btn-secondary"
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="card-elevated p-6 mb-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full shadow-md">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      />
                    </div>
                    <Button onClick={handleSaveProfile} className="btn-hero w-full">
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{profileData.name}</h2>
                    <p className="text-muted-foreground mb-4">{profileData.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <School className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{profileData.school}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{profileData.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="card-elevated p-6">
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.level}</div>
                  <div className="text-xs text-muted-foreground">Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{stats.currentStreak}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">{stats.rank}</div>
                  <div className="text-xs text-muted-foreground">Global Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">{stats.badges}</div>
                  <div className="text-xs text-muted-foreground">Badges</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                {/* XP & Level Progress */}
                <Card className="card-elevated p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Level Progress</h3>
                    <Badge className="level-badge">Level {stats.level}</Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">XP Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.totalXP} / {(stats.level + 1) * 1000} XP
                      </span>
                    </div>
                    <Progress value={(stats.totalXP % 1000) / 10} className="h-3" />
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    {(stats.level + 1) * 1000 - stats.totalXP} XP to Level {stats.level + 1}
                  </div>
                </Card>

                {/* Performance Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="card-interactive p-6 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-3 text-success" />
                    <div className="text-2xl font-bold text-success">{stats.averageScore}%</div>
                    <div className="text-sm text-muted-foreground">Average Score</div>
                  </Card>
                  
                  <Card className="card-interactive p-6 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stats.totalStudyTime}</div>
                    <div className="text-sm text-muted-foreground">Study Time</div>
                  </Card>
                  
                  <Card className="card-interactive p-6 text-center">
                    <Flame className="w-8 h-8 mx-auto mb-3 text-orange-500" />
                    <div className="text-2xl font-bold text-orange-500">{stats.currentStreak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-6">
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="card-interactive p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">{subject.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Level {subject.level} • {subject.xp} XP
                            </p>
                          </div>
                          <Badge className="level-badge">
                            {subject.progress}% Complete
                          </Badge>
                        </div>
                        
                        <Progress value={subject.progress} className="h-2 mb-3" />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Progress: {subject.progress}%
                          </span>
                          <Link to={`/course/${subject.name.toLowerCase()}`}>
                            <Button size="sm" className="btn-secondary">
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="card-interactive p-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{achievement.name}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.date}</p>
                          </div>
                          <Badge className="xp-badge">+{achievement.xp} XP</Badge>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <Card className="card-elevated p-6 mt-6 text-center">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-warning" />
                  <h3 className="text-xl font-semibold mb-2">Keep Going!</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete 2 more lessons to unlock the "Science Champion" badge
                  </p>
                  <Progress value={75} className="h-2" />
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <Card className="card-elevated p-6">
                  <h3 className="text-xl font-semibold mb-6">Weekly Study Activity</h3>
                  
                  <div className="flex items-end justify-between h-48 mb-6">
                    {studyActivity.map((day, index) => (
                      <div key={day.day} className="flex flex-col items-center">
                        <div className="text-xs text-muted-foreground mb-2">
                          {day.hours}h
                        </div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${day.hours * 20}px` }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-primary w-8 rounded-t"
                        />
                        <div className="text-xs text-muted-foreground mt-2">
                          {day.day}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">20.1h</div>
                      <div className="text-sm text-muted-foreground">This Week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">18.5h</div>
                      <div className="text-sm text-muted-foreground">Last Week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-warning">+8.6%</div>
                      <div className="text-sm text-muted-foreground">Growth</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;