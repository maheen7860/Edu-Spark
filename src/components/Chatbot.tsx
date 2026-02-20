import { useState } from 'react';
import { Bot, X, MessageCircle } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="w-[400px] h-[700px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-semibold">EduSpark Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Chatbot iframe */}
          <div className="flex-1">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/vunH4N8qSNbRnXSEiAU0r"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="EduSpark Assistant"
            ></iframe>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
