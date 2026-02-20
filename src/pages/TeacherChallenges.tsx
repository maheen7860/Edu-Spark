import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Plus,
  Trophy,
  Target,
  Clock,
  Users,
  Zap,
  Star,
  Brain,
  Lightbulb,
  Calculator,
  Atom,
  Laptop,
  Code,
  Play,
  Edit
} from 'lucide-react';

const TeacherChallenges = () => {
  const { toast } = useToast();
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    subject: '',
    description: '',
    difficulty: 'beginner',
    timeLimit: 30,
    points: 100
  });

  const challenges = [
    {
      id: 1,
      title: 'Speed Math Challenge',
      subject: 'Mathematics',
      icon: Calculator,
      difficulty: 'intermediate',
      timeLimit: 15,
      points: 150,
      participants: 18,
      averageScore: 85,
      status: 'active',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Chemistry Lab Simulation',
      subject: 'Science',
      icon: Atom,
      difficulty: 'advanced',
      timeLimit: 45,
      points: 200,
      participants: 12,
      averageScore: 78,
      status: 'active',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Digital Logic Puzzle',
      subject: 'Technology',
      icon: Laptop,
      difficulty: 'beginner',
      timeLimit: 20,
      points: 100,
      participants: 22,
      averageScore: 92,
      status: 'completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Algorithm Race',
      subject: 'Coding',
      icon: Code,
      difficulty: 'expert',
      timeLimit: 60,
      points: 300,
      participants: 8,
      averageScore: 65,
      status: 'active',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const challengeTemplates = [
    { id: 1, name: 'Quiz Challenge', description: 'Multiple choice questions with time pressure' },
    { id: 2, name: 'Problem Solving', description: 'Step-by-step mathematical or logical problems' },
    { id: 3, name: 'Code Debug', description: 'Find and fix bugs in code snippets' },
    { id: 4, name: 'Science Experiment', description: 'Virtual lab experiments and simulations' },
    { id: 5, name: 'Memory Game', description: 'Remember sequences, patterns, or facts' },
    { id: 6, name: 'Speed Round', description: 'Quick-fire questions for rapid responses' }
  ];

  const leaderboard = [
    { rank: 1, student: 'Priya Sharma', score: 1250, challenges: 8 },
    { rank: 2, student: 'Dev Mehta', score: 1180, challenges: 7 },
    { rank: 3, student: 'Anita Patel', score: 1095, challenges: 9 },
    { rank: 4, student: 'Rajesh Kumar', score: 980, challenges: 6 },
    { rank: 5, student: 'Kavya Singh', score: 875, challenges: 5 }
  ];

  const handleCreateChallenge = () => {
    if (!newChallenge.title || !newChallenge.subject) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Challenge Created",
      description: `"${newChallenge.title}" has been published for students`,
    });
    
    setNewChallenge({
      title: '',
      subject: '',
      description: '',
      difficulty: 'beginner',
      timeLimit: 30,
      points: 100
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'intermediate': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'advanced': return 'bg-orange-500/10 text-orange-700 border-orange-200';
      case 'expert': return 'bg-red-500/10 text-red-700 border-red-200';
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
                Challenge Creator
              </h1>
              <p className="text-muted-foreground">
                Create engaging challenges to motivate and assess students
              </p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Challenge
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Challenge</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Challenge Title"
                    value={newChallenge.title}
                    onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newChallenge.subject}
                    onChange={(e) => setNewChallenge({...newChallenge, subject: e.target.value})}
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                    <option value="Coding">Coding</option>
                  </select>
                  <Textarea
                    placeholder="Challenge Description"
                    value={newChallenge.description}
                    onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
                  />
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newChallenge.difficulty}
                    onChange={(e) => setNewChallenge({...newChallenge, difficulty: e.target.value})}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                  <Input
                    type="number"
                    placeholder="Time Limit (minutes)"
                    value={newChallenge.timeLimit}
                    onChange={(e) => setNewChallenge({...newChallenge, timeLimit: parseInt(e.target.value)})}
                  />
                  <Input
                    type="number"
                    placeholder="Points Reward"
                    value={newChallenge.points}
                    onChange={(e) => setNewChallenge({...newChallenge, points: parseInt(e.target.value)})}
                  />
                  <Button onClick={handleCreateChallenge} className="w-full">
                    Create Challenge
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4">Active Challenges</h2>
                <div className="grid gap-4">
                  {challenges.map((challenge) => {
                    const Icon = challenge.icon;
                    
                    return (
                      <Card key={challenge.id} className="p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${challenge.color}`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                              <div className="flex items-center space-x-4 mb-3">
                                <Badge variant="secondary">{challenge.subject}</Badge>
                                <Badge className={getDifficultyColor(challenge.difficulty)}>
                                  {challenge.difficulty}
                                </Badge>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span>{challenge.timeLimit} min</span>
                                </div>
                                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                  <Star className="w-4 h-4" />
                                  <span>{challenge.points} pts</span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Participants:</span>
                                  <span className="ml-2 font-medium">{challenge.participants}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Avg Score:</span>
                                  <span className="ml-2 font-medium">{challenge.averageScore}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Play className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4">Challenge Templates</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {challengeTemplates.map((template) => (
                    <Card key={template.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <h3 className="font-semibold mb-2">{template.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Use Template
                      </Button>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Challenge Leaderboard
                </h3>
                <div className="space-y-3">
                  {leaderboard.map((student) => (
                    <div key={student.rank} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          student.rank === 1 ? 'bg-yellow-500 text-white' :
                          student.rank === 2 ? 'bg-gray-400 text-white' :
                          student.rank === 3 ? 'bg-amber-600 text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {student.rank}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{student.student}</div>
                          <div className="text-xs text-muted-foreground">
                            {student.challenges} challenges
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm">{student.score}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="font-semibold mb-4">Challenge Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Challenges</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Participants</span>
                    <span className="font-semibold">60</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Completion Rate</span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total XP Awarded</span>
                    <span className="font-semibold">15,250</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherChallenges;