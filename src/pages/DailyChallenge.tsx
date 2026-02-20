import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  Trophy, 
  Clock, 
  Target, 
  Star,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Flame,
  Award,
  Brain,
  Zap
} from 'lucide-react';

const DailyChallenge = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const challenge = {
    title: "Design a Simple Water Filtration System",
    description: "Using common household materials, design a system that can filter muddy water to make it cleaner.",
    difficulty: "Medium",
    estimatedTime: "30 minutes",
    xpReward: 75,
    bonusXP: 25,
    timeLeft: "18h 23m",
    category: "Science & Engineering"
  };

  const challengeSteps = [
    {
      id: 1,
      title: "Gather Materials",
      description: "Collect the following items from around your home:",
      materials: [
        "Empty plastic bottle",
        "Cotton balls or cloth",
        "Small stones or pebbles", 
        "Sand",
        "Coffee filter or tissue paper",
        "Muddy water (mix soil with water)"
      ],
      tips: "Make sure all materials are clean before using them in your filter."
    },
    {
      id: 2,
      title: "Design Your Filter",
      description: "Layer your materials in the bottle to create an effective filter:",
      steps: [
        "Cut the bottom off the plastic bottle",
        "Turn the bottle upside down (cap pointing down)",
        "Layer materials from bottom to top: cotton, fine sand, coarse sand, small stones",
        "Make small holes in the bottle cap if it's too tight"
      ],
      tips: "Think about how water flows and which materials will catch different sized particles."
    },
    {
      id: 3,
      title: "Test and Observe",
      description: "Pour your muddy water through the filter and observe the results:",
      observations: [
        "How clear is the filtered water compared to the original?",
        "Which layer seems to be doing the most filtering?",
        "How long does it take for water to pass through?",
        "What particles were removed?"
      ],
      tips: "Record your observations - this is how real scientists work!"
    },
    {
      id: 4,
      title: "Improve Your Design",
      description: "Based on your observations, make improvements:",
      improvements: [
        "Add more layers if water isn't clear enough",
        "Adjust the size of holes in the cap",
        "Try different materials (activated charcoal if available)",
        "Create a second filter to run water through twice"
      ],
      tips: "Engineering is all about iteration - making something better each time!"
    }
  ];

  const currentStepData = challengeSteps[currentStep - 1];

  const completeStep = () => {
    if (currentStep < challengeSteps.length) {
      setCurrentStep(currentStep + 1);
      toast({
        title: `Step ${currentStep} Complete!`,
        description: "Great progress! Moving to the next step.",
      });
    } else {
      setChallengeCompleted(true);
      const totalXP = challenge.xpReward + challenge.bonusXP;
      setEarnedXP(totalXP);
      toast({
        title: "Challenge Complete! 🎉",
        description: `Amazing work! You earned ${totalXP} XP total!`,
      });
    }
  };

  const resetChallenge = () => {
    setCurrentStep(1);
    setChallengeCompleted(false);
    setEarnedXP(0);
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
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Flame className="w-6 h-6 mr-3 text-orange-500" />
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Daily STEM Challenge
                </h1>
              </div>
              <p className="text-muted-foreground text-lg mb-4">{challenge.title}</p>
              <div className="flex items-center space-x-4">
                <Badge className="xp-badge">+{challenge.xpReward} XP</Badge>
                <Badge className="bg-warning/10 text-warning">Bonus: +{challenge.bonusXP} XP</Badge>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  {challenge.estimatedTime}
                </Badge>
                <Badge variant="outline">{challenge.difficulty}</Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Time Remaining</p>
              <p className="text-xl font-bold text-orange-500">{challenge.timeLeft}</p>
            </div>
          </div>
        </motion.div>

        {!challengeCompleted ? (
          <>
            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Card className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Target className="w-5 h-5 mr-3 text-primary" />
                    Challenge Progress
                  </h2>
                  <Badge className="bg-primary/10 text-primary">
                    Step {currentStep} of {challengeSteps.length}
                  </Badge>
                </div>
                <Progress value={(currentStep / challengeSteps.length) * 100} className="h-3" />
              </Card>
            </motion.div>

            {/* Current Step */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="card-elevated p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{currentStep}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
                    <p className="text-muted-foreground">{currentStepData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    {currentStepData.materials && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Brain className="w-4 h-4 mr-2 text-primary" />
                          Materials Needed:
                        </h3>
                        <ul className="space-y-2">
                          {currentStepData.materials.map((material, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-3 text-success" />
                              <span className="text-sm">{material}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentStepData.steps && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-primary" />
                          Step-by-Step Instructions:
                        </h3>
                        <ol className="space-y-2">
                          {currentStepData.steps.map((step, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                                {index + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {currentStepData.observations && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-primary" />
                          What to Observe:
                        </h3>
                        <ul className="space-y-2">
                          {currentStepData.observations.map((observation, index) => (
                            <li key={index} className="flex items-start">
                              <Star className="w-4 h-4 mr-3 text-warning mt-0.5" />
                              <span className="text-sm">{observation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentStepData.improvements && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary" />
                          Improvement Ideas:
                        </h3>
                        <ul className="space-y-2">
                          {currentStepData.improvements.map((improvement, index) => (
                            <li key={index} className="flex items-start">
                              <Lightbulb className="w-4 h-4 mr-3 text-warning mt-0.5" />
                              <span className="text-sm">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2 text-primary" />
                        Pro Tip:
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentStepData.tips}
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <Button onClick={completeStep} className="btn-hero w-full">
                        {currentStep < challengeSteps.length ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Complete Step {currentStep}
                          </>
                        ) : (
                          <>
                            <Trophy className="w-4 h-4 mr-2" />
                            Complete Challenge
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        ) : (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="card-elevated p-12 max-w-2xl mx-auto">
              <Trophy className="w-20 h-20 mx-auto mb-6 text-warning" />
              <h2 className="text-3xl font-bold mb-4">🎉 Challenge Completed!</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Fantastic work! You've successfully designed and tested a water filtration system.
              </p>
              
              <div className="flex justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{earnedXP}</div>
                  <div className="text-sm text-muted-foreground">Total XP Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">100%</div>
                  <div className="text-sm text-muted-foreground">Challenge Complete</div>
                </div>
              </div>

              <div className="p-6 bg-success/5 rounded-xl border border-success/20 mb-8">
                <h3 className="font-semibold mb-2">What You Learned:</h3>
                <ul className="text-left space-y-1 text-sm">
                  <li>• How filtration works using different materials</li>
                  <li>• The engineering design process (design, test, improve)</li>
                  <li>• Scientific observation and data recording</li>
                  <li>• Problem-solving with common materials</li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetChallenge} className="btn-secondary">
                  Try Again
                </Button>
                <Link to="/courses">
                  <Button className="btn-hero">
                    Continue Learning
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DailyChallenge;