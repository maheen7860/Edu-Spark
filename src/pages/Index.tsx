import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  BarChart3, 
  BookOpen, 
  Users, 
  Star, 
  Lightbulb,
  Trophy,
  Download,
  Smartphone,
  Wifi,
  Heart,
  ChevronRight,
  Calculator,
  Atom,
  Laptop,
  Code,
  Clock,
  Target
} from 'lucide-react';
import heroStudents from '@/assets/hero-students.jpg';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Gamified STEM modules with quizzes, puzzles, and visual explanations',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Trophy,
      title: 'Progress Tracking',
      description: 'XP points, badges, levels, and leaderboards to motivate learning',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Teacher Analytics',
      description: 'Real-time dashboards with student progress and engagement data',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'Download lessons for learning without internet connectivity',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: Calculator, color: 'text-blue-500', progress: 75 },
    { name: 'Science', icon: Atom, color: 'text-green-500', progress: 60 },
    { name: 'Technology', icon: Laptop, color: 'text-purple-500', progress: 40 },
    { name: 'Coding', icon: Code, color: 'text-orange-500', progress: 20 }
  ];

  const stats = [
    { number: '1,200+', label: 'Active Students', icon: Users },
    { number: '15+', label: 'Rural Schools', icon: BookOpen },
    { number: '87%', label: 'Improvement Rate', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const dailyChallenge = {
    title: 'Today\'s STEM Challenge',
    description: 'Design a simple water filtration system using common materials',
    reward: '+50 XP',
    difficulty: 'Medium',
    timeLeft: '18h 23m'
  };

  const funFact = {
    title: 'Fun Fact of the Day',
    content: 'Did you know? A single raindrop falls at about 7 mph (11 km/h) - that\'s slower than you walk!',
    category: 'Physics'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="mb-6 bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Optimized for Rural Devices
                </Badge>
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Empowering Rural Minds
                </span>
                <br />
                <span className="text-foreground">with Fun STEM Learning!</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Interactive, gamified learning platform designed specifically for rural school 
                students in grades 6-12. Learn Math, Science, Technology, and Coding through 
                engaging challenges and real-world applications.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/courses">
                  <Button className="btn-hero group">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/live-demo">
                  <Button className="btn-secondary">
                    <Wifi className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </Link>
                <Link to="/teacher">
                  <Button variant="outline" className="border-white/20 text-foreground hover:bg-white/10">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    For Teachers
                  </Button>
                </Link>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

              {/* Hero Image & Video Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 space-y-4">
                <img
                  src={heroStudents}
                  alt="Rural students learning STEM with tablets"
                  className="w-full h-auto rounded-3xl shadow-lg object-cover"
                />
                
                {/* Sample Video Preview */}
                <div className="relative bg-black rounded-2xl aspect-video overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/knyrvokugXQ?si=sample&autoplay=0&controls=1&modestbranding=1&rel=0"
                    title="Sample educational video - Introduction to STEM learning"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center text-white text-sm">
                      <Play className="w-4 h-4 mr-2" />
                      Sample Lesson Preview
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                >
                  <Trophy className="w-6 h-6 text-warning" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                >
                  <Star className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Subject Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              Master <span className="bg-gradient-primary bg-clip-text text-transparent">STEM Subjects</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Interactive learning modules designed to make complex concepts simple and fun
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={subject.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card-interactive p-6 text-center"
                >
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 mx-auto ${subject.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{subject.name}</h3>
                  <div className="progress-bar h-2 mb-2">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{subject.progress}% Complete</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Daily Content Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Daily Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-elevated p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Target className="w-5 h-5 mr-2 text-warning" />
                    {dailyChallenge.title}
                  </h3>
                  <Badge className="xp-badge">{dailyChallenge.reward}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{dailyChallenge.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary">Difficulty: {dailyChallenge.difficulty}</Badge>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {dailyChallenge.timeLeft} left
                  </div>
                </div>
                <Link to="/challenge/daily">
                  <Button className="btn-hero w-full">
                    Start Challenge
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-elevated p-6 h-full">
                <h3 className="text-xl font-semibold flex items-center mb-4">
                  <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                  {funFact.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {funFact.content}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary">{funFact.category}</Badge>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">EduSpark?</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Designed specifically for rural learning environments with engaging gamification 
              and offline capabilities
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card-interactive p-6 text-center group"
                >
                  <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-primary p-3 rounded-xl shadow-md">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    EduSpark
                  </h3>
                  <p className="text-sm text-muted-foreground">Built for Rural Learners</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering rural minds with interactive STEM education that works everywhere, 
                even offline. Making quality education accessible to all.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                Made with love for rural education
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
                <li><Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</Link></li>
                <li><Link to="/teacher" className="text-muted-foreground hover:text-primary transition-colors">Teacher Dashboard</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground flex items-center">
                  <Wifi className="w-4 h-4 mr-2" />
                  Offline Learning
                </li>
                <li className="text-muted-foreground flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Optimized
                </li>
                <li className="text-muted-foreground flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community Support
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 EduSpark. Empowering rural minds through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;