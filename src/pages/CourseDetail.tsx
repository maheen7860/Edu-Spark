import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Calculator, 
  Atom, 
  Laptop, 
  Code, 
  Play, 
  Lock, 
  Star,
  Trophy,
  CheckCircle,
  ArrowLeft,
  Clock,
  Target,
  BookOpen,
  FileText,
  Brain,
  Award,
  HelpCircle,
  Lightbulb,
  PenTool
} from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { toast } = useToast();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [testScore, setTestScore] = useState(0);

  const courseData = {
    math: {
      name: 'Mathematics',
      icon: Calculator,
      color: 'from-blue-500 to-purple-500',
      description: 'Master mathematical concepts through interactive problem-solving',
      level: 8,
      xp: 2840,
      progress: 75,
      completedLessons: 18,
      totalLessons: 24,
      estimatedTime: '4 weeks',
      difficulty: 'Intermediate'
    },
    science: {
      name: 'Science',
      icon: Atom,
      color: 'from-green-500 to-teal-500',
      description: 'Explore physics, chemistry, and biology through experiments',
      level: 6,
      xp: 1920,
      progress: 60,
      completedLessons: 12,
      totalLessons: 20,
      estimatedTime: '5 weeks',
      difficulty: 'Beginner'
    },
    technology: {
      name: 'Technology',
      icon: Laptop,
      color: 'from-purple-500 to-pink-500',
      description: 'Digital literacy and modern technology concepts',
      level: 4,
      xp: 1280,
      progress: 40,
      completedLessons: 6,
      totalLessons: 16,
      estimatedTime: '3 weeks',
      difficulty: 'Beginner'
    },
    coding: {
      name: 'Coding',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: 'Programming basics with interactive coding challenges',
      level: 2,
      xp: 640,
      progress: 20,
      completedLessons: 4,
      totalLessons: 18,
      estimatedTime: '6 weeks',
      difficulty: 'Beginner'
    }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button className="btn-hero">Back to Courses</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const lessons = [
    { id: 1, title: 'Introduction to Basic Concepts', duration: '15 min', completed: true, xp: 50 },
    { id: 2, title: 'Fundamental Principles', duration: '20 min', completed: true, xp: 75 },
    { id: 3, title: 'Practical Applications', duration: '25 min', completed: true, xp: 100 },
    { id: 4, title: 'Problem Solving Techniques', duration: '30 min', completed: false, xp: 125, current: true },
    { id: 5, title: 'Advanced Concepts', duration: '35 min', completed: false, xp: 150 },
    { id: 6, title: 'Real-world Examples', duration: '40 min', completed: false, xp: 200 },
  ];

  const quizQuestions = [
    {
      id: 1,
      question: courseId === 'math' ? "What is the value of x in the equation 2x + 5 = 13?" : 
                courseId === 'science' ? "Which gas makes up approximately 78% of Earth's atmosphere?" :
                courseId === 'technology' ? "What does 'HTTP' stand for?" :
                "What is a variable in programming?",
      options: courseId === 'math' ? ["x = 3", "x = 4", "x = 5", "x = 6"] :
               courseId === 'science' ? ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"] :
               courseId === 'technology' ? ["HyperText Transfer Protocol", "High Tech Transfer Process", "Home Text Transfer Protocol", "Hyper Transfer Text Protocol"] :
               ["A fixed value", "A storage location with a name", "A function", "A loop"],
      correctAnswer: courseId === 'math' ? 1 : courseId === 'science' ? 1 : courseId === 'technology' ? 0 : 1,
      explanation: courseId === 'math' ? "Solving: 2x + 5 = 13, subtract 5 from both sides: 2x = 8, divide by 2: x = 4" :
                   courseId === 'science' ? "Nitrogen (N₂) makes up about 78% of Earth's atmosphere, oxygen makes up about 21%" :
                   courseId === 'technology' ? "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the web" :
                   "A variable is a storage location with an associated name that contains data"
    },
    {
      id: 2,
      question: courseId === 'math' ? "What is the area of a rectangle with width 6 and height 8?" :
                courseId === 'science' ? "What is the chemical symbol for water?" :
                courseId === 'technology' ? "Which of these is NOT an input device?" :
                "What does 'debugging' mean in programming?",
      options: courseId === 'math' ? ["42", "48", "54", "36"] :
               courseId === 'science' ? ["H₂O", "CO₂", "O₂", "H₂O₂"] :
               courseId === 'technology' ? ["Keyboard", "Mouse", "Monitor", "Microphone"] :
               ["Writing code", "Testing code", "Finding and fixing errors", "Running code"],
      correctAnswer: courseId === 'math' ? 1 : courseId === 'science' ? 0 : courseId === 'technology' ? 2 : 2,
      explanation: courseId === 'math' ? "Area = width × height = 6 × 8 = 48 square units" :
                   courseId === 'science' ? "Water's chemical formula is H₂O - two hydrogen atoms and one oxygen atom" :
                   courseId === 'technology' ? "A monitor is an output device that displays information, not an input device" :
                   "Debugging is the process of finding and fixing errors (bugs) in computer programs"
    },
    {
      id: 3,
      question: courseId === 'math' ? "If a triangle has angles of 60° and 70°, what is the third angle?" :
                courseId === 'science' ? "Which planet is known as the Red Planet?" :
                courseId === 'technology' ? "What is the main function of RAM in a computer?" :
                "What is a 'loop' in programming?",
      options: courseId === 'math' ? ["40°", "50°", "60°", "70°"] :
               courseId === 'science' ? ["Venus", "Mars", "Jupiter", "Saturn"] :
               courseId === 'technology' ? ["Permanent storage", "Temporary storage", "Processing data", "Connecting to internet"] :
               ["A mistake in code", "A way to repeat code", "A type of variable", "A function"],
      correctAnswer: courseId === 'math' ? 1 : courseId === 'science' ? 1 : courseId === 'technology' ? 1 : 1,
      explanation: courseId === 'math' ? "The sum of angles in a triangle is 180°. So 180° - 60° - 70° = 50°" :
                   courseId === 'science' ? "Mars is called the Red Planet due to iron oxide (rust) on its surface" :
                   courseId === 'technology' ? "RAM provides temporary storage for data that the CPU is currently working with" :
                   "A loop is a programming construct that repeats a block of code multiple times"
    }
  ];

  const courseNotes = {
    math: [
      {
        title: "Algebraic Equations",
        content: "Remember: Whatever you do to one side of an equation, you must do to the other side. This keeps the equation balanced.",
        icon: "🔢"
      },
      {
        title: "Geometry Basics",
        content: "Area formulas: Rectangle = l×w, Triangle = ½×b×h, Circle = πr². Always check your units!",
        icon: "📐"
      },
      {
        title: "Problem Solving Tips",
        content: "1. Read the problem twice 2. Identify what you know 3. Identify what you need to find 4. Choose the right formula 5. Solve step by step",
        icon: "💡"
      }
    ],
    science: [
      {
        title: "Scientific Method",
        content: "Steps: 1. Observation 2. Question 3. Hypothesis 4. Experiment 5. Analysis 6. Conclusion",
        icon: "🔬"
      },
      {
        title: "Chemical Formulas",
        content: "H₂O (water), CO₂ (carbon dioxide), O₂ (oxygen), NaCl (salt). Remember: subscripts show how many atoms!",
        icon: "⚗️"
      },
      {
        title: "Physics Laws",
        content: "Newton's First Law: Objects at rest stay at rest, objects in motion stay in motion (unless acted upon by a force)",
        icon: "⚡"
      }
    ],
    technology: [
      {
        title: "Computer Components",
        content: "CPU (brain), RAM (temporary memory), Storage (permanent memory), GPU (graphics), Motherboard (connects everything)",
        icon: "💻"
      },
      {
        title: "Internet Basics",
        content: "HTTP/HTTPS for web pages, Email protocols (SMTP, POP3), DNS translates domain names to IP addresses",
        icon: "🌐"
      },
      {
        title: "Digital Safety",
        content: "Use strong passwords, don't share personal info online, be careful with downloads, keep software updated",
        icon: "🔒"
      }
    ],
    coding: [
      {
        title: "Variables & Data Types",
        content: "Variables store data: strings ('text'), numbers (42), booleans (true/false). Always give meaningful names!",
        icon: "📦"
      },
      {
        title: "Control Structures",
        content: "If-statements make decisions, loops repeat code, functions organize code into reusable blocks",
        icon: "🔄"
      },
      {
        title: "Debugging Tips",
        content: "Print/log values to see what's happening, check for typos, test small parts first, ask for help when stuck",
        icon: "🐛"
      }
    ]
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    const correctAnswers = quizQuestions.filter(
      (question, index) => selectedAnswers[question.id] === question.correctAnswer
    ).length;
    
    const score = Math.round((correctAnswers / quizQuestions.length) * 100);
    setTestScore(score);
    setShowResults(true);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}% (${correctAnswers}/${quizQuestions.length} correct)`,
    });
  };

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/courses" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className={`bg-gradient-to-r ${course.color} p-4 rounded-2xl shadow-md`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  {course.name}
                </h1>
                <p className="text-muted-foreground text-lg">{course.description}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <Badge className="level-badge">Level {course.level}</Badge>
                  <Badge className="xp-badge">{course.xp} XP</Badge>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    {course.estimatedTime}
                  </Badge>
                  <Badge variant="outline">{course.difficulty}</Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="card-elevated p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-primary" />
                  Course Progress
                </h3>
                <div className="progress-bar h-3 mb-2">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Trophy className="w-4 h-4 mr-2 text-warning" />
                  XP Earned
                </h3>
                <p className="text-2xl font-bold text-primary">{course.xp}</p>
                <p className="text-sm text-muted-foreground">Total experience points</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-success" />
                  Next Milestone
                </h3>
                <p className="text-2xl font-bold text-success">{course.level + 1}</p>
                <p className="text-sm text-muted-foreground">Level {course.level + 1} in 160 XP</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Course Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="lessons" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="lessons" className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Lessons
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Practice Quiz
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Study Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lessons" className="mt-6">
              <Card className="card-elevated p-6">
                <h2 className="text-2xl font-semibold mb-6">Course Lessons</h2>
                
                <div className="space-y-4">
                  {lessons.map((lesson, index) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        lesson.completed
                          ? 'bg-success/5 border-success/20'
                          : lesson.current
                          ? 'bg-primary/5 border-primary/20 shadow-md'
                          : 'bg-muted/30 border-muted'
                      }`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full mr-4">
                        {lesson.completed ? (
                          <CheckCircle className="w-6 h-6 text-success" />
                        ) : lesson.current ? (
                          <Play className="w-6 h-6 text-primary" />
                        ) : (
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className={`font-semibold ${lesson.current ? 'text-primary' : ''}`}>
                          {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </span>
                          <Badge className="xp-badge text-xs">+{lesson.xp} XP</Badge>
                        </div>
                      </div>

                      <div>
                        {lesson.completed ? (
                          <Button variant="ghost" size="sm" className="text-success">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completed
                          </Button>
                        ) : lesson.current ? (
                          <Link to={`/lesson/${courseId}/${lesson.id}`}>
                            <Button className="btn-hero">
                              <Play className="w-4 h-4 mr-2" />
                              Continue
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="ghost" size="sm" disabled>
                            <Lock className="w-4 h-4 mr-2" />
                            Locked
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <Card className="card-elevated p-6">
                <h2 className="text-2xl font-semibold mb-6">Course Videos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: 1,
                      title: `${course.name} Fundamentals`,
                      duration: '12:35',
                      thumbnail: 'https://images.unsplash.com/photo-1606270082294-e9e6b4bf5ad9?w=400&h=225&fit=crop',
                      description: `Learn the core concepts of ${course.name.toLowerCase()} with this comprehensive introduction.`,
                      isCompleted: true
                    },
                    {
                      id: 2,
                      title: `Advanced ${course.name} Techniques`,
                      duration: '18:42',
                      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
                      description: `Master advanced techniques and problem-solving methods in ${course.name.toLowerCase()}.`,
                      isCompleted: false
                    },
                    {
                      id: 3,
                      title: `Real-World Applications`,
                      duration: '15:28',
                      thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=225&fit=crop',
                      description: `See how ${course.name.toLowerCase()} is applied in real-world scenarios and careers.`,
                      isCompleted: false
                    },
                    {
                      id: 4,
                      title: `Practice Problems & Solutions`,
                      duration: '22:15',
                      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop',
                      description: `Work through practice problems with step-by-step solutions.`,
                      isCompleted: false
                    }
                  ].map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <Card className="card-interactive p-4 h-full">
                        <div className="relative mb-4">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                          {video.isCompleted && (
                            <div className="absolute top-2 left-2 bg-success/90 text-success-foreground p-1 rounded-full">
                              <CheckCircle className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {video.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <Badge variant={video.isCompleted ? "default" : "secondary"} className="text-xs">
                              {video.isCompleted ? "Completed" : "Watch"}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {video.duration}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {/* Featured Live Session */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Card className="card-elevated p-6 bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          <span className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                          Live Q&A Session
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Join our weekly live session for {course.name} with expert instructors
                        </p>
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          Next: Today at 7:00 PM
                        </Badge>
                      </div>
                      <Link to="/live-demo">
                        <Button className="btn-hero">
                          <Play className="w-4 h-4 mr-2" />
                          Join Live
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              </Card>
            </TabsContent>

            <TabsContent value="quiz" className="mt-6">
              <Card className="card-elevated p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold flex items-center">
                    <Brain className="w-6 h-6 mr-3 text-primary" />
                    Practice Quiz
                  </h2>
                  {showResults && (
                    <Badge className={`text-lg px-4 py-2 ${testScore >= 70 ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                      <Award className="w-4 h-4 mr-2" />
                      Score: {testScore}%
                    </Badge>
                  )}
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <motion.div
                      key={question.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-muted/30 rounded-xl"
                    >
                      <h3 className="font-semibold mb-4 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                        Question {index + 1}: {question.question}
                      </h3>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                              selectedAnswers[question.id] === optionIndex
                                ? showResults
                                  ? optionIndex === question.correctAnswer
                                    ? 'bg-success/20 border-success text-success-foreground'
                                    : 'bg-destructive/20 border-destructive text-destructive-foreground'
                                  : 'bg-primary/20 border-primary'
                                : 'bg-background hover:bg-muted border border-border'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={optionIndex}
                              onChange={() => handleAnswerSelect(question.id, optionIndex)}
                              disabled={showResults}
                              className="mr-3"
                            />
                            <span>{option}</span>
                            {showResults && optionIndex === question.correctAnswer && (
                              <CheckCircle className="w-4 h-4 ml-auto text-success" />
                            )}
                          </label>
                        ))}
                      </div>

                      {showResults && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20"
                        >
                          <p className="text-sm">
                            <Lightbulb className="w-4 h-4 inline mr-2 text-primary" />
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  {!showResults ? (
                    <Button 
                      onClick={submitQuiz}
                      className="btn-hero"
                      disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    >
                      <PenTool className="w-4 h-4 mr-2" />
                      Submit Quiz
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {testScore >= 70 ? '🎉 Great Job!' : '📚 Keep Learning!'}
                        </h3>
                        <p className="text-muted-foreground">
                          {testScore >= 70 
                            ? 'You have a solid understanding! Ready for the next lesson.'
                            : 'Review the study notes and try again when you\'re ready.'
                          }
                        </p>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button 
                          onClick={() => {
                            setSelectedAnswers({});
                            setShowResults(false);
                            setTestScore(0);
                          }}
                          className="btn-secondary"
                        >
                          Retake Quiz
                        </Button>
                        {testScore >= 70 && (
                          <Link to={`/lesson/${courseId}/4`}>
                            <Button className="btn-hero">
                              <Play className="w-4 h-4 mr-2" />
                              Start Next Lesson
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="mt-6">
              <Card className="card-elevated p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Study Notes
                </h2>
                
                <div className="grid gap-6">
                  {(courseNotes[courseId as keyof typeof courseNotes] || courseNotes.math).map((note, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/20"
                    >
                      <h3 className="font-semibold mb-2 flex items-center">
                        <span className="text-2xl mr-3">{note.icon}</span>
                        {note.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{note.content}</p>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 bg-gradient-primary/10 rounded-xl border border-primary/20 text-center"
                  >
                    <Lightbulb className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Study Tip</h3>
                    <p className="text-sm text-muted-foreground">
                      Practice regularly, take breaks, and don't hesitate to ask questions. 
                      Learning is a journey, not a race!
                    </p>
                  </motion.div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;