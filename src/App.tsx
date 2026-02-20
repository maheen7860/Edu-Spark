import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import LessonDetail from "./pages/LessonDetail";
import DailyChallenge from "./pages/DailyChallenge";
import Leaderboard from "./pages/Leaderboard";
import Teacher from "./pages/Teacher";
import TeacherActivity from "./pages/TeacherActivity";
import TeacherHomework from "./pages/TeacherHomework";
import TeacherChallenges from "./pages/TeacherChallenges";
import TeacherSchedule from "./pages/TeacherSchedule";
import TeacherMessages from "./pages/TeacherMessages";

import LiveDemo from "./pages/LiveDemo";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/lesson/:courseId/:lessonId" element={<LessonDetail />} />
          <Route path="/challenge/daily" element={<DailyChallenge />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/activity" element={<TeacherActivity />} />
          <Route path="/teacher/homework" element={<TeacherHomework />} />
          <Route path="/teacher/challenges" element={<TeacherChallenges />} />
          <Route path="/teacher/schedule" element={<TeacherSchedule />} />
          <Route path="/teacher/messages" element={<TeacherMessages />} />
          <Route path="/live-demo" element={<LiveDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
