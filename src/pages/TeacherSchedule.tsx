import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Plus,
  Calendar,
  Clock,
  Users,
  MapPin,
  Bell,
  Edit,
  Trash2,
  Video,
  BookOpen,
  Calculator,
  Atom,
  Laptop,
  Code
} from 'lucide-react';

const TeacherSchedule = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState('2024-01-22');
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'class',
    subject: '',
    time: '',
    duration: 60,
    location: '',
    notes: ''
  });

  const scheduleEvents = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      type: 'class',
      subject: 'Mathematics',
      icon: Calculator,
      time: '09:00',
      duration: 60,
      location: 'Classroom A',
      students: 25,
      date: '2024-01-22',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting',
      type: 'meeting',
      time: '11:00',
      duration: 30,
      location: 'Conference Room',
      attendees: 'Mr. & Mrs. Sharma',
      date: '2024-01-22',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Chemistry Lab Session',
      type: 'class',
      subject: 'Science',
      icon: Atom,
      time: '14:00',
      duration: 90,
      location: 'Science Lab',
      students: 20,
      date: '2024-01-22',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Staff Development Workshop',
      type: 'workshop',
      time: '16:00',
      duration: 120,
      location: 'Online',
      topic: 'Digital Teaching Methods',
      date: '2024-01-22',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const weeklyOverview = [
    { day: 'Monday', classes: 4, meetings: 1, total: 5 },
    { day: 'Tuesday', classes: 3, meetings: 2, total: 5 },
    { day: 'Wednesday', classes: 5, meetings: 0, total: 5 },
    { day: 'Thursday', classes: 4, meetings: 1, total: 5 },
    { day: 'Friday', classes: 3, meetings: 2, total: 5 }
  ];

  const upcomingDeadlines = [
    { task: 'Grade Math Tests', due: '2024-01-23', priority: 'high' },
    { task: 'Submit Lesson Plans', due: '2024-01-24', priority: 'medium' },
    { task: 'Parent Newsletters', due: '2024-01-25', priority: 'low' },
    { task: 'Science Fair Prep', due: '2024-01-26', priority: 'high' }
  ];

  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.time) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Event Scheduled",
      description: `"${newEvent.title}" has been added to your schedule`,
    });
    
    setNewEvent({
      title: '',
      type: 'class',
      subject: '',
      time: '',
      duration: 60,
      location: '',
      notes: ''
    });
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'class': return BookOpen;
      case 'meeting': return Users;
      case 'workshop': return Video;
      default: return Calendar;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'class': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'meeting': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'workshop': return 'bg-purple-500/10 text-purple-700 border-purple-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-500/10 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-500/10 text-green-700 border-green-200';
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
                Class Schedule
              </h1>
              <p className="text-muted-foreground">
                Manage your teaching schedule and appointments
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-auto"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule Event
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule New Event</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Event Title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    />
                    <select
                      className="w-full p-2 border rounded-md"
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                    >
                      <option value="class">Class</option>
                      <option value="meeting">Meeting</option>
                      <option value="workshop">Workshop</option>
                    </select>
                    {newEvent.type === 'class' && (
                      <select
                        className="w-full p-2 border rounded-md"
                        value={newEvent.subject}
                        onChange={(e) => setNewEvent({...newEvent, subject: e.target.value})}
                      >
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Coding">Coding</option>
                      </select>
                    )}
                    <Input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    />
                    <Input
                      type="number"
                      placeholder="Duration (minutes)"
                      value={newEvent.duration}
                      onChange={(e) => setNewEvent({...newEvent, duration: parseInt(e.target.value)})}
                    />
                    <Input
                      placeholder="Location"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    />
                    <Button onClick={handleCreateEvent} className="w-full">
                      Schedule Event
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4">Today's Schedule</h2>
                <div className="space-y-4">
                  {scheduleEvents
                    .filter(event => event.date === selectedDate)
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((event) => {
                      const TypeIcon = getEventTypeIcon(event.type);
                      const SubjectIcon = event.icon;
                      
                      return (
                        <Card key={event.id} className="p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${event.color}`}>
                                {SubjectIcon ? (
                                  <SubjectIcon className="w-6 h-6 text-white" />
                                ) : (
                                  <TypeIcon className="w-6 h-6 text-white" />
                                )}
                              </div>
                              
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                                <div className="flex items-center space-x-4 mb-3">
                                  <Badge className={getEventTypeColor(event.type)}>
                                    {event.type}
                                  </Badge>
                                  {event.subject && (
                                    <Badge variant="secondary">{event.subject}</Badge>
                                  )}
                                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>{event.time} ({event.duration} min)</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.location}</span>
                                  </div>
                                  {event.students && (
                                    <div className="flex items-center space-x-1">
                                      <Users className="w-4 h-4" />
                                      <span>{event.students} students</span>
                                    </div>
                                  )}
                                  {event.attendees && (
                                    <div className="flex items-center space-x-1">
                                      <Users className="w-4 h-4" />
                                      <span>{event.attendees}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Bell className="w-4 h-4 mr-1" />
                                Remind
                              </Button>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-4">Weekly Overview</h2>
                <Card className="p-6">
                  <div className="grid grid-cols-5 gap-4">
                    {weeklyOverview.map((day) => (
                      <div key={day.day} className="text-center">
                        <h3 className="font-semibold mb-2">{day.day}</h3>
                        <div className="space-y-1 text-sm">
                          <div className="text-blue-600">{day.classes} Classes</div>
                          <div className="text-green-600">{day.meetings} Meetings</div>
                          <div className="font-semibold">{day.total} Total</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Upcoming Deadlines</h3>
                <div className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{deadline.task}</div>
                        <div className="text-xs text-muted-foreground">Due: {deadline.due}</div>
                      </div>
                      <Badge className={getPriorityColor(deadline.priority)}>
                        {deadline.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Full Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-2" />
                    Set Reminders
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Contact Parents
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lesson Planner
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Schedule Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Classes This Week</span>
                    <span className="font-semibold">19</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Meetings Scheduled</span>
                    <span className="font-semibold">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Free Hours</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Utilization</span>
                    <span className="font-semibold">78%</span>
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

export default TeacherSchedule;