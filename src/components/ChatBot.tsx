'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    X,
    Minimize2,
    Maximize2,
    SendHorizontal,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const ChatBot = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: Math.random(),
            text: '<p>🌟 I am Shree, an intelligent AI assistant created by Hashaam Sir 👨\u200d💻. My purpose is to help you by providing information based on the documents I have access to.</p>',
            sender: 'ai',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isMinimized]);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getAIResponse = (userMessage: string): Promise<string> => {
        const authHeader =
            'Basic ' +
            Buffer.from(
                `${process.env.NEXT_PUBLIC_WEBHOOK_USER}:${process.env.NEXT_PUBLIC_WEBHOOK_PASS}`
            ).toString('base64');

        return fetch(
            'https://n8n-j0ri.onrender.com/webhook/bf026618-cf64-4c6e-89c6-4d6b1f7d01e1',
            {
                method: 'POST',
                headers: {
                    Authorization: authHeader,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                return response.json();
            })
            .then(response => {
                console.log('2nd then :: ', response);
                return response[0]?.output;
            });
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        getAIResponse(newUserMessage.text)
            .then(aiText => {
                const aiResponse: Message = {
                    id: Date.now() + 1,
                    text: aiText,
                    sender: 'ai',
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, aiResponse]);
            })
            .catch(error => {
                console.error('AI Fetch Error:', error);
                const errorMessage: Message = {
                    id: Date.now() + 1,
                    text: 'Failed to get AI response.',
                    sender: 'ai',
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, errorMessage]);
            })
            .finally(() => {
                setIsTyping(false);
            });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chat Window */}
            <div
                className={`fixed bottom-20  right-6 z-50 w-96 max-w-[calc(100vw-3rem)] transition-all duration-200 transform ${isOpen
                    ? 'scale-100 opacity-100 pointer-events-auto'
                    : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                role="dialog"
                aria-labelledby="chatbot-title"
            >
                <motion.div
                    className="border border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden"
                    animate={{
                        height: isMinimized ? 70 : 550
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    {/* Header - Fixed height with perfect vertical centering */}
                    <div className="bg-gradient-to-br from-green-400/5 to-green-600/5 backdrop-blur-xl border-b border-gray-700/50 h-[70px] flex items-center px-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                        <img src="/avatar-2.png" alt="no" />
                                    </div>
                                </div>
                                <div>
                                    <h3
                                        id="chatbot-title"
                                        className="text-white font-semibold text-sm"
                                    >
                                        Shree AI (Beta)
                                    </h3>
                                    <p className="text-red-400 text-xs font-medium flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full "></span>
                                        Offline
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-150"
                                    aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
                                >
                                    {isMinimized ? (
                                        <Maximize2 className="w-4 h-4" />
                                    ) : (
                                        <Minimize2 className="w-4 h-4" />
                                    )}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-150"
                                    aria-label="Close chat"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <motion.div
                        className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3 h-[400px] bg-gradient-to-br from-black/20 to-black/20 backdrop-blur-md"
                        animate={{
                            opacity: isMinimized ? 0 : 1,
                            height: isMinimized ? 0 : 400
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        style={{
                            overflow: isMinimized ? 'hidden' : 'auto'
                        }}
                    >
                        {!isMinimized && (
                            <>
                                {messages.map(message => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                                    >
                                        <div
                                            className={`max-w-[75%] px-4 py-3 relative shadow-md ${message.sender === 'user'
                                                ? 'bg-green-800/30 text-white rounded-tr-none rounded-tl-2xl rounded-bl-2xl rounded-br-2xl'
                                                : 'bg-gray-600/30 text-white rounded-tr-2xl rounded-tl-none rounded-br-2xl rounded-bl-md'
                                                } backdrop-blur-sm`}
                                        >
                                            <div
                                                className="text-sm leading-relaxed space-y-2 
                  [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-2 
                  [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-1
                  [&_p]:text-gray-200 [&_p]:mb-2
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                  [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
                  [&_li]:text-gray-200
                  [&_strong]:font-semibold
                  [&_em]:italic"
                                                dangerouslySetInnerHTML={{ __html: message.text }}
                                            />
                                            <p
                                                className={`text-xs text-right mt-2 ${message.sender === 'user'
                                                    ? 'text-green-100'
                                                    : 'text-gray-300'
                                                    }`}
                                            >
                                                {formatTime(message.timestamp)}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Typing indicator */}
                                {isTyping && (
                                    <div className="flex justify-start mb-3">
                                        <div className="bg-gray-600/30 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 shadow-md">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: '0.1s' }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: '0.2s' }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </>
                        )}
                    </motion.div>

                    {/* Input Area - Fixed height with perfect vertical centering */}
                    <motion.div
                        className="bg-gradient-to-br from-green-400/5 to-green-600/5 backdrop-blur-xl border-t border-gray-700/50 h-[80px] flex items-center px-4"
                        animate={{
                            opacity: isMinimized ? 0 : 1,
                            height: isMinimized ? 0 : 80
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        style={{
                            overflow: isMinimized ? 'hidden' : 'visible'
                        }}
                    >
                        {!isMinimized && (
                            <div className="flex items-center space-x-3 w-full">
                                <div className="flex-1 relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="w-full bg-black/50 backdrop-blur-sm border border-gray-600/50 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 focus:bg-black/60 transition-all duration-150 placeholder-gray-400 text-white"
                                        aria-label="Chat input"
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={inputValue.trim() === ''}
                                    className="w-11 h-11 bg-green-500 rounded-sm flex items-center justify-center text-white hover:bg-green-600 hover:scale-105 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md border border-green-400/50"
                                    aria-label="Send message"
                                >
                                    <SendHorizontal className="w-6 h-6 " />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default ChatBot;