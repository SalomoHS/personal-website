'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import angkasaGif from '@/assets/angkasa-idle.gif';
import angkasaExplainFirst from '@/assets/angkasa-explain-first.gif';
import angkasaExplainSecond from '@/assets/angkasa-explain-second.gif';

const Typewriter = ({ text, isStreaming, onUpdate, onTyping }: { text: string; isStreaming: boolean; onUpdate?: () => void; onTyping?: (isTyping: boolean) => void }) => {
  const [displayedText, setDisplayedText] = useState(isStreaming ? '' : text);

  useEffect(() => {
    if (onTyping) {
      onTyping(displayedText.length < text.length);
    }
  }, [displayedText, text, onTyping]);

  useEffect(() => {
    if (!isStreaming && displayedText.length === text.length) return;

    if (displayedText.length < text.length) {
      const distance = text.length - displayedText.length;
      const delay = distance > 20 ? 5 : 20;
      
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, isStreaming]);

  useEffect(() => {
    onUpdate?.();
  }, [displayedText, onUpdate]);

  return (
    <>
      <ReactMarkdown
        components={{
          p: ({children}) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
          ul: ({children}) => <ul className="list-disc ml-4 mb-2 last:mb-0 space-y-1">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal ml-4 mb-2 last:mb-0 space-y-1">{children}</ol>,
          li: ({children}) => <li className="mb-1 last:mb-0">{children}</li>,
          strong: ({children}) => <span className="font-bold">{children}</span>,
          a: ({href, children}) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-blue-600 hover:text-blue-800"
            >
              {children}
            </a>
          ),
        }}
      >
        {displayedText}
      </ReactMarkdown>
      {(isStreaming || displayedText.length < text.length) && (
        <span className="inline-block w-2 h-4 ml-1 bg-black animate-pulse align-middle" />
      )}
    </>
  );
};

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentGif, setCurrentGif] = useState(angkasaGif);
  const [hasShownHomeWelcome, setHasShownHomeWelcome] = useState(false);
  const [hasShownAboutWelcome, setHasShownAboutWelcome] = useState(false);
  const [hasShownWorksWelcome, setHasShownWorksWelcome] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "So, what can I help you with ?", sender: 'bot' }
  ]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newSessionId = window.crypto?.randomUUID ? window.crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
      setSessionId(newSessionId);
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isTyping) {
      setCurrentGif(Math.random() < 0.5 ? angkasaExplainFirst : angkasaExplainSecond);
    } else {
      setCurrentGif(angkasaGif);
    }
  }, [isTyping]);

  useEffect(() => {
    let message = '';
    let duration = 7000;

    if (pathname === '/about') {
      if (!hasShownAboutWelcome) {
        message = 'These section will help you get to know more about him.';
        duration = 5000;
        setHasShownAboutWelcome(true);
      } else {
        setShowWelcome(false);
        return;
      }
    } else if (pathname === '/works') {
      if (!hasShownWorksWelcome) {
        message = 'These are few projects he has built and contributed to.\n\nFeel free to ask me about the details 😁.';
        duration = 5000;
        setHasShownWorksWelcome(true);
      } else {
        setShowWelcome(false);
        return;
      }
    } else if (pathname === '/') {
      if (!hasShownHomeWelcome) {
        message = "Hi there!👋\nI'm **Angkasa**,\nSalomo personal website assistant.\nIt's a pleasure to have you here!🎉\n\nFeel free to ask me about Salomo.";
        duration = 10000;
        setHasShownHomeWelcome(true);
      } else {
        setShowWelcome(false);
        return;
      }
    } else {
      setShowWelcome(false);
      return;
    }

    setWelcomeMessage(message);
    setShowWelcome(true);
    
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (showWelcome && welcomeMessage) {
      setDisplayedMessage('');
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedMessage(welcomeMessage.slice(0, i + 1));
        i++;
        if (i >= welcomeMessage.length) {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [showWelcome, welcomeMessage]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showWelcome) setShowWelcome(false);
  };

  const handleReset = () => {
    setMessages([
      { id: 1, text: "So, what can I help you with ?", sender: 'bot' }
    ]);
  };

  const sendMessage = async (text: string) => {
    const newUserMessage = { id: Date.now(), text: text, sender: 'user' };
    const botMsgId = Date.now() + 1;
    
    setMessages(prev => [...prev, newUserMessage, { 
      id: botMsgId, 
      text: '', 
      sender: 'bot' 
    }]);
    setIsResponseLoading(true);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const history = messages.map(msg => ({
        role: msg.sender === 'bot' ? 'ai' : 'human',
        content: msg.text
      }));
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          query: text,
          chat_history: history,
          session_id: sessionId
        }),
        signal: controller.signal
      });

      if (!res.ok) throw new Error('Failed to fetch response');
      if (!res.body) throw new Error('Response body is null');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botMessage += chunk;

        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: botMessage } : msg
        ));
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(msg => 
        msg.id === botMsgId ? { ...msg, text: "Sorry, something went wrong. Please try again." } : msg
      ));
    } finally {
      clearTimeout(timeoutId);
      setIsResponseLoading(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue('');
  };

  const exampleQuestions = [
    "Who is Salomo ?",
    "Reveal Salomo projects",
    "What is Salomo interest ?"
  ];

  return (
    <div className="fixed bottom-0 right-6 z-50 flex flex-row items-end">
      <div className="grid grid-cols-1 items-end justify-items-end">
      {/* Welcome Message */}
      <AnimatePresence>
        {((showWelcome || isHovered) && !isOpen) && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`mb-32 mr-4 bg-white p-4 rounded-2xl border border-black relative z-50 col-start-1 row-start-1 ${
              isHovered ? 'w-fit' : 'w-[300px] max-w-[calc(100vw-2rem)]'
            }`}
          >
            <p className={`text-sm text-gray-600 text-left whitespace-pre-line ${isHovered ? '' : 'min-h-[3rem]'}`}>
              {isHovered ? "So, what can I help you with ?" : displayedMessage.split('**').map((part, i) =>
                i % 2 === 1 ? <span key={i} className="font-bold">{part}</span> : part
              )}
            </p>
            {/* Tail */}
            <div className="absolute -right-2 bottom-6 w-4 h-4 bg-white border-t border-r border-black transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="fixed inset-0 z-[60] flex h-full w-full flex-col bg-white sm:relative sm:z-auto sm:mb-24 sm:mr-2 sm:h-auto sm:w-[420px] sm:rounded-[2rem] sm:border-4 sm:border-black sm:drop-shadow-xl sm:overflow-visible col-start-1 row-start-1"
          >
            {/* Comic Bubble Tail */}
            <svg 
              className="hidden sm:block absolute -bottom-8 right-8 w-12 h-8 z-10 pointer-events-none" 
              viewBox="0 0 48 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* White fill: Hides border and fills tail */}
              <path 
                d="M12 0 L44 0 L44 32 L12 4 Z" 
                fill="white" 
              />
              
              {/* Black outline shape */}
              <path 
                d="M12 0 L12 4 L44 32 L44 0 L40 0 L40 23.2 L13.5 0 Z" 
                fill="black" 
              />
            </svg>

            {/* Header */}
            <div className="bg-white p-4 flex justify-between items-center border-b-2 border-gray-100 sm:rounded-t-[1.8rem]">
              <div>
                <h3 className="font-bold text-black">Talk with Angkasa</h3>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleReset}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors text-red-500"
                  title="Reset Chat"
                >
                  <RefreshCw size={18} />
                </button>
                <button 
                  onClick={toggleChat}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors text-black"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 sm:flex-none overflow-y-auto p-4 bg-white flex flex-col gap-3 sm:h-32 min-[950px]:sm:h-64 modern-scrollbar"
            >
              {messages.map((msg, index) => (
                <div 
                  key={msg.id} 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm border-2 ${
                    msg.sender === 'user' 
                      ? 'bg-black text-white border-black self-end rounded-br-none' 
                      : 'bg-white text-black border-black self-start rounded-bl-none'
                  }`}
                >
                  {msg.sender === 'bot' && !msg.text ? (
                     <div className="flex space-x-1 h-5 items-center px-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                  ) : (
                    msg.sender === 'bot' && index === messages.length - 1 ? (
                      <Typewriter text={msg.text} isStreaming={isResponseLoading} onUpdate={scrollToBottom} onTyping={setIsTyping} />
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({children}) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                          ul: ({children}) => <ul className="list-disc ml-4 mb-2 last:mb-0 space-y-1">{children}</ul>,
                          ol: ({children}) => <ol className="list-decimal ml-4 mb-2 last:mb-0 space-y-1">{children}</ol>,
                          li: ({children}) => <li className="mb-1 last:mb-0">{children}</li>,
                          strong: ({children}) => <span className="font-bold">{children}</span>,
                          a: ({href, children}) => (
                            <a 
                              href={href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`underline ${msg.sender === 'user' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                            >
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )
                  )}
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-xs font-bold text-gray-400 mb-1 uppercase">Example Questions</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((q, index) => (
                      <button
                        key={index}
                        onClick={() => sendMessage(q)}
                        disabled={isResponseLoading}
                        className="text-left text-sm px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-black hover:bg-gray-50 text-gray-700 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t-2 border-gray-100 flex gap-2 sm:rounded-b-[1.8rem]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isResponseLoading ? "Angkasa is thinking..." : "Drop your question here..."}
                disabled={isResponseLoading}
                className="flex-1 px-4 py-2 bg-gray-50 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-black transition-all text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isResponseLoading}
                className="p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* Character */}
      <motion.button
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-32 h-[230px] cursor-pointer focus:outline-none mr-6"
      >
        <Image 
          src={currentGif} 
          alt="Angkasa" 
          fill 
          className="object-cover drop-shadow-lg"
          unoptimized
        />

      </motion.button>
    </div>
  );
}
