import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import Notes from '@/components/Notes';
import { 
  ArrowLeft, 
  ArrowRight,
  BookOpen, 
  Play, 
  CheckCircle,
  Trophy,
  Clock,
  Target,
  Lightbulb,
  Video,
  FileText,
  Brain,
  Bookmark
} from 'lucide-react';

const LessonDetail = () => {
  const { courseId, lessonId } = useParams();
  const { toast } = useToast();

  const lessonData: Record<string, {
    title: string;
    duration: string;
    xp: number;
    content: {
      overview: string;
      keyPoints: string[];
      videoTime: string;
      readingTime: string;
    };
  }> = {
    '1': {
      title: 'Introduction to Basic Concepts',
      duration: '15 min',
      xp: 50,
      content: {
        overview: 'This lesson introduces fundamental concepts that form the foundation of your learning journey.',
        keyPoints: [
          'Understanding core principles',
          'Building strong foundations',
          'Preparing for advanced topics',
          'Practical applications'
        ],
        videoTime: '8 minutes',
        readingTime: '7 minutes'
      }
    },
    '2': {
      title: 'Fundamental Principles',
      duration: '20 min',
      xp: 75,
      content: {
        overview: 'Dive deeper into the fundamental principles that govern this subject area.',
        keyPoints: [
          'Core theories and concepts',
          'Real-world applications',
          'Problem-solving strategies',
          'Common misconceptions'
        ],
        videoTime: '12 minutes',
        readingTime: '8 minutes'
      }
    },
    '3': {
      title: 'Practical Applications',
      duration: '25 min',
      xp: 100,
      content: {
        overview: 'Learn how to apply theoretical knowledge to solve real-world problems.',
        keyPoints: [
          'Hands-on examples',
          'Step-by-step solutions',
          'Best practices',
          'Common pitfalls to avoid'
        ],
        videoTime: '15 minutes',
        readingTime: '10 minutes'
      }
    },
    '4': {
      title: 'Problem Solving Techniques',
      duration: '30 min',
      xp: 125,
      content: {
        overview: 'Master various problem-solving techniques and approaches.',
        keyPoints: [
          'Analytical thinking methods',
          'Creative problem-solving',
          'Systematic approaches',
          'Verification strategies'
        ],
        videoTime: '18 minutes',
        readingTime: '12 minutes'
      }
    }
  };

  const lesson = lessonData[lessonId || '1'];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to={`/course/${courseId}`}>
            <Button className="btn-hero">Back to Course</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const completeLesson = () => {
    toast({
      title: "Lesson Completed! 🎉",
      description: `You earned ${lesson.xp} XP! Keep up the great work.`,
    });
  };

  const currentLessonNum = parseInt(lessonId || '1');
  const nextLesssonNum = currentLessonNum + 1;
  const prevLessonNum = currentLessonNum - 1;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to={`/course/${courseId}`} 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {lesson.title}
              </h1>
              <div className="flex items-center space-x-4">
                <Badge className="xp-badge">+{lesson.xp} XP</Badge>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  {lesson.duration}
                </Badge>
                <Badge variant="outline">Lesson {lessonId}</Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="card-elevated p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Lesson Progress</span>
              <span className="text-sm text-muted-foreground">Step {lessonId} of 6</span>
            </div>
            <Progress value={(currentLessonNum / 6) * 100} className="h-2" />
          </Card>
        </motion.div>

        {/* Lesson Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Video Section */}
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Video className="w-5 h-5 mr-3 text-primary" />
                Video Lesson
              </h2>
              
              {/* Enhanced Video Player */}
              <div className="relative bg-black rounded-xl overflow-hidden mb-4">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1606270082294-e9e6b4bf5ad9?w=800&h=450&fit=crop"
                    alt="Lesson video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                    {lesson.content.videoTime}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/70 text-white border-none">HD</Badge>
                  </div>
                </div>
              </div>
              
              {/* Video Progress & Controls */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <span>Quality: 1080p</span>
                    <span>Speed: 1x</span>
                    <span>Captions: ON</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Progress: 0%</span>
                    <div className="w-20 h-1 bg-muted rounded-full">
                      <div className="w-0 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                <Button className="btn-hero w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Interactive Lesson
                </Button>
              </div>
            </Card>

            {/* Reading Material */}
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-primary" />
                Reading Material
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {lesson.content.overview}
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Key Learning Points:</h3>
                  <ul className="space-y-2">
                    {lesson.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-success" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-primary" />
                    <strong>Pro Tip:</strong> Take notes as you go through the material. 
                    Active learning helps retention!
                  </p>
                </div>
              </div>
            </Card>

            {/* Interactive Exercise */}
            <Card className="card-elevated p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-3 text-primary" />
                Practice Exercise
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Apply what you've learned with this interactive exercise.
                </p>
                <div className="p-4 border-2 border-dashed border-primary/30 rounded-xl text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Interactive exercise will load here
                  </p>
                  <Button className="btn-secondary">
                    Start Exercise
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <Card className="card-elevated p-6">
                <h3 className="font-semibold mb-4">Lesson Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Video Time</span>
                    <span className="text-sm font-medium">{lesson.content.videoTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reading Time</span>
                    <span className="text-sm font-medium">{lesson.content.readingTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">XP Reward</span>
                    <Badge className="xp-badge">{lesson.xp} XP</Badge>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated p-6">
                <h3 className="font-semibold mb-4">Navigation</h3>
                <div className="space-y-3">
                  {prevLessonNum >= 1 && (
                    <Link to={`/lesson/${courseId}/${prevLessonNum}`}>
                      <Button variant="outline" className="w-full justify-start">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous Lesson
                      </Button>
                    </Link>
                  )}
                  
                  <Button 
                    onClick={completeLesson}
                    className="btn-hero w-full"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Complete
                  </Button>

                  {nextLesssonNum <= 6 && (
                    <Link to={`/lesson/${courseId}/${nextLesssonNum}`}>
                      <Button className="btn-secondary w-full justify-start">
                        Next Lesson
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>

              {/* Achievement */}
              <Card className="card-elevated p-6 text-center mt-6">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-warning" />
                <h3 className="font-semibold mb-2">Keep Going!</h3>
                <p className="text-sm text-muted-foreground">
                  Complete this lesson to unlock the next challenge and earn XP!
                </p>
              </Card>
            </motion.div>

            {/* Notes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bookmark className="h-5 w-5 mr-2" />
                My Notes for This Lesson
              </h3>
              <Notes courseId={courseId || ''} lessonId={lessonId || ''} />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LessonDetail;