import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator, 
  Atom, 
  Laptop, 
  Code, 
  Play, 
  Lock, 
  Star,
  Trophy,
  Download
} from 'lucide-react';

const Courses = () => {
  const subjects = [
    {
      id: 'math',
      name: 'Mathematics',
      icon: Calculator,
      description: 'Interactive problem-solving and visual math concepts',
      color: 'from-blue-500 to-purple-500',
      progress: 75,
      level: 8,
      xp: 2840,
      totalLessons: 24,
      completedLessons: 18,
      isUnlocked: true,
      badges: ['Problem Solver', 'Geometry Master']
    },
    {
      id: 'science',
      name: 'Science',
      icon: Atom,
      description: 'Explore physics, chemistry, and biology through experiments',
      color: 'from-green-500 to-teal-500',
      progress: 60,
      level: 6,
      xp: 1920,
      totalLessons: 20,
      completedLessons: 12,
      isUnlocked: true,
      badges: ['Lab Explorer', 'Scientific Mind']
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: Laptop,
      description: 'Digital literacy and modern technology concepts',
      color: 'from-purple-500 to-pink-500',
      progress: 40,
      level: 4,
      xp: 1280,
      totalLessons: 16,
      completedLessons: 6,
      isUnlocked: true,
      badges: ['Tech Savvy']
    },
    {
      id: 'coding',
      name: 'Coding',
      icon: Code,
      description: 'Programming basics with interactive coding challenges',
      color: 'from-orange-500 to-red-500',
      progress: 20,
      level: 2,
      xp: 640,
      totalLessons: 18,
      completedLessons: 4,
      isUnlocked: true,
      badges: ['Code Newbie']
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
            STEM Learning Modules
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gamified courses designed to make STEM subjects engaging and fun for rural students
          </p>
        </motion.div>

        {/* Subject Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="card-interactive p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${subject.color} p-3 rounded-xl shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{subject.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Level {subject.level} • {subject.xp} XP
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-success" />
                      <Badge variant="secondary" className="text-xs">
                        Offline Available
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {subject.description}
                  </p>

                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {subject.completedLessons}/{subject.totalLessons} lessons
                      </span>
                    </div>
                    <div className="progress-bar h-2 mb-3">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-warning" />
                      Earned Badges
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.badges.map((badge) => (
                        <Badge key={badge} className="bg-gradient-success text-success-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <Link to={`/course/${subject.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-hero flex items-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Continue Learning</span>
                      </motion.button>
                    </Link>
                    
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">
                        {subject.xp} XP
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Total Earned
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Daily Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <Card className="card-elevated p-6 text-center">
            <h3 className="text-2xl font-semibold mb-3 flex items-center justify-center">
              <Trophy className="w-6 h-6 mr-3 text-warning" />
              Daily STEM Challenge
            </h3>
            <p className="text-muted-foreground mb-6">
              Complete today's challenge to earn bonus XP and unlock special rewards!
            </p>
            <Link to="/challenge/daily">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Start Challenge (+50 XP)
              </motion.button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;