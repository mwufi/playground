import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = { role: 'user', content: inputMessage };
    setMessages([...messages, newUserMessage]);
    setInputMessage('');

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newUserMessage] }),
      });
      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="rounded-full p-4">
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="flex">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-grow"
              />
              <Button onClick={handleSendMessage} className="ml-2">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;