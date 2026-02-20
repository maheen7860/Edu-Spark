import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp, 
  Calendar,
  Users
} from 'lucide-react';

const Leaderboard = () => {
  const topStudents = [
    {
      id: 1,
      name: 'Arya Patel',
      school: 'Sunrise Rural School',
      totalXP: 4820,
      level: 12,
      badges: 8,
      weeklyXP: 340,
      avatar: '/api/placeholder/40/40',
      rank: 1
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      school: 'Green Valley Academy',
      totalXP: 4650,
      level: 11,
      badges: 7,
      weeklyXP: 320,
      avatar: '/api/placeholder/40/40',
      rank: 2
    },
    {
      id: 3,
      name: 'Priya Sharma',
      school: 'Hillside Learning Center',
      totalXP: 4480,
      level: 11,
      badges: 6,
      weeklyXP: 290,
      avatar: '/api/placeholder/40/40',
      rank: 3
    },
    {
      id: 4,
      name: 'Amit Singh',
      school: 'Village Knowledge Hub',
      totalXP: 4210,
      level: 10,
      badges: 6,
      weeklyXP: 280,
      avatar: '/api/placeholder/40/40',
      rank: 4
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      school: 'Rural Excellence School',
      totalXP: 3950,
      level: 9,
      badges: 5,
      weeklyXP: 260,
      avatar: '/api/placeholder/40/40',
      rank: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      label: 'Active Learners',
      value: '1,247',
      change: '+12%',
      color: 'text-primary'
    },
    {
      icon: Trophy,
      label: 'Challenges Completed',
      value: '8,932',
      change: '+8%',
      color: 'text-warning'
    },
    {
      icon: Star,
      label: 'Total XP Earned',
      value: '184,293',
      change: '+15%',
      color: 'text-success'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">{rank}</div>;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Rural STEM Champions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the top performing students across rural schools
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card className="card-elevated p-6 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <Badge className="bg-success/10 text-success hover:bg-success/20">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </Badge>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <Card className="card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-warning" />
                Top Learners This Month
              </h2>
              <Badge className="bg-primary/10 text-primary">
                <Calendar className="w-3 h-3 mr-1" />
                November 2024
              </Badge>
            </div>

            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                    student.rank <= 3 
                      ? 'bg-gradient-primary/5 border border-primary/20 shadow-md' 
                      : 'bg-muted/50 hover:bg-muted/80'
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 mr-4">
                    {getRankIcon(student.rank)}
                  </div>

                  {/* Avatar */}
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  {/* Student Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.school}</p>
                  </div>

                  {/* Stats */}
                  <div className="text-right space-y-1">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-sm font-semibold">{student.totalXP.toLocaleString()} XP</div>
                        <div className="text-xs text-muted-foreground">Total</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-success">+{student.weeklyXP}</div>
                        <div className="text-xs text-muted-foreground">This Week</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="level-badge">
                          Lv. {student.level}
                        </Badge>
                        <Badge className="xp-badge">
                          <Star className="w-3 h-3 mr-1" />
                          {student.badges}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Your Ranking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-4 bg-gradient-primary/10 rounded-xl border border-primary/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    23
                  </div>
                  <div>
                    <h4 className="font-semibold">Your Ranking</h4>
                    <p className="text-sm text-muted-foreground">Keep learning to climb higher!</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">2,840 XP</div>
                  <div className="text-xs text-muted-foreground">+180 this week</div>
                </div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;