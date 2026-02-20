import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft,
  Send,
  Search,
  MessageCircle,
  Phone,
  Video,
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  Filter,
  Users,
  User
} from 'lucide-react';

const TeacherMessages = () => {
  const { toast } = useToast();
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const contacts = [
    {
      id: 1,
      name: 'Mr. Rajesh Sharma',
      relationship: 'Parent of Priya Sharma',
      type: 'parent',
      avatar: 'RS',
      lastMessage: 'Thank you for the update on Priya\'s progress',
      lastMessageTime: '2 hours ago',
      unread: 0,
      priority: 'normal',
      status: 'online'
    },
    {
      id: 2,
      name: 'Dr. Anita Patel',
      relationship: 'Parent of Dev Patel',
      type: 'parent',
      avatar: 'AP',
      lastMessage: 'Could we schedule a meeting to discuss Dev\'s performance?',
      lastMessageTime: '5 hours ago',
      unread: 2,
      priority: 'high',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Principal Kumar',
      relationship: 'School Administration',
      type: 'staff',
      avatar: 'PK',
      lastMessage: 'Please submit the quarterly report by Friday',
      lastMessageTime: '1 day ago',
      unread: 1,
      priority: 'medium',
      status: 'online'
    },
    {
      id: 4,
      name: 'Mrs. Kavya Singh',
      relationship: 'Parent of Arjun Singh',
      type: 'parent',
      avatar: 'KS',
      lastMessage: 'Arjun mentioned the new science project. Sounds exciting!',
      lastMessageTime: '2 days ago',
      unread: 0,
      priority: 'normal',
      status: 'offline'
    },
    {
      id: 5,
      name: 'Math Department Head',
      relationship: 'Colleague',
      type: 'staff',
      avatar: 'MD',
      lastMessage: 'New curriculum materials have arrived',
      lastMessageTime: '3 days ago',
      unread: 0,
      priority: 'normal',
      status: 'online'
    }
  ];

  const messageTemplates = [
    {
      id: 1,
      title: 'Progress Update',
      content: 'I wanted to update you on your child\'s recent progress in class...'
    },
    {
      id: 2,
      title: 'Assignment Reminder',
      content: 'This is a friendly reminder about the upcoming assignment due date...'
    },
    {
      id: 3,
      title: 'Meeting Request',
      content: 'I would like to schedule a meeting to discuss your child\'s academic progress...'
    },
    {
      id: 4,
      title: 'Congratulations',
      content: 'I\'m pleased to inform you about your child\'s recent achievement...'
    }
  ];

  const quickActions = [
    { icon: Phone, label: 'Schedule Call', action: 'call' },
    { icon: Video, label: 'Video Meeting', action: 'video' },
    { icon: Mail, label: 'Send Email', action: 'email' },
    { icon: MessageCircle, label: 'Quick Message', action: 'message' }
  ];

  const conversations = {
    1: [
      {
        id: 1,
        sender: 'teacher',
        message: 'Hello Mr. Sharma, I wanted to update you on Priya\'s excellent progress in Mathematics.',
        time: '10:30 AM',
        delivered: true
      },
      {
        id: 2,
        sender: 'parent',
        message: 'Thank you for the update! We\'re very proud of her achievements.',
        time: '2:15 PM',
        delivered: true
      },
      {
        id: 3,
        sender: 'teacher',
        message: 'She\'s been particularly strong in problem-solving. Keep encouraging her!',
        time: '2:45 PM',
        delivered: true
      }
    ]
  };

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedContact) return;
    
    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${selectedContact.name}`,
    });
    
    setMessageText('');
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.relationship.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || contact.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      default: return 'border-l-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'online' ? 'bg-green-500' : 'bg-gray-400';
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
                Parent Communication
              </h1>
              <p className="text-muted-foreground">
                Stay connected with parents and colleagues
              </p>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-hero">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  New Message
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Compose New Message</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select Recipient</option>
                    {contacts.map(contact => (
                      <option key={contact.id} value={contact.id}>
                        {contact.name} ({contact.relationship})
                      </option>
                    ))}
                  </select>
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Message content" rows={4} />
                  <Button className="w-full">Send Message</Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Card className="p-4 h-fit">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search contacts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    className="p-2 border rounded-md text-sm"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="parent">Parents</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors border-l-4 ${
                        getPriorityColor(contact.priority)
                      } ${
                        selectedContact?.id === contact.id 
                          ? 'bg-primary/10 border-primary' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{contact.avatar}</AvatarFallback>
                          </Avatar>
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(contact.status)} absolute -bottom-0.5 -right-0.5 border-2 border-background`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-sm truncate">{contact.name}</h4>
                            <div className="flex items-center space-x-1">
                              {contact.unread > 0 && (
                                <Badge variant="destructive" className="text-xs px-1 min-w-[20px] h-5">
                                  {contact.unread}
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs">
                                {contact.type}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1 truncate">
                            {contact.relationship}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {contact.lastMessage}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {contact.lastMessageTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              {selectedContact ? (
                <Card className="p-6 h-fit">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{selectedContact.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{selectedContact.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedContact.relationship}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(selectedContact.status)}`} />
                          <span className="text-xs text-muted-foreground">{selectedContact.status}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {quickActions.map((action) => {
                        const Icon = action.icon;
                        return (
                          <Button key={action.action} variant="outline" size="sm">
                            <Icon className="w-4 h-4" />
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 mb-4 max-h-64 overflow-y-auto bg-muted/20">
                    {conversations[selectedContact.id]?.map((msg) => (
                      <div key={msg.id} className={`mb-3 ${msg.sender === 'teacher' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-3 rounded-lg max-w-xs ${
                          msg.sender === 'teacher' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-background border'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'teacher' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    )) || (
                      <p className="text-center text-muted-foreground">Start a conversation...</p>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="flex-1"
                      rows={3}
                    />
                    <Button onClick={handleSendMessage} className="self-end">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Quick Templates</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {messageTemplates.map((template) => (
                        <Button
                          key={template.id}
                          variant="outline"
                          size="sm"
                          className="text-left justify-start"
                          onClick={() => setMessageText(template.content)}
                        >
                          {template.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-12 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a contact to start messaging</p>
                </Card>
              )}
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Communication Statistics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">47</div>
                  <div className="text-sm text-muted-foreground">Messages This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">12</div>
                  <div className="text-sm text-muted-foreground">Parent Meetings Scheduled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">95%</div>
                  <div className="text-sm text-muted-foreground">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">3</div>
                  <div className="text-sm text-muted-foreground">Pending Responses</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMessages;