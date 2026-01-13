"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactMethods = [
  {
    title: "Email",
    value: "isalomohendriyan@gmail.com",
    link: "mailto:isalomohendriyan@gmail.com",
    borderColor: "hover:border-primary-blue",
    shadowColor: "hover:shadow-[0_0_10px_oklch(54.6%_.245_262.881_/_0.6)]",
    textColor: "group-hover:text-primary-blue",
    iconColor: "hover:text-primary-blue"
  },
  {
    title: "LinkedIn",
    value: "Salomo Hendrian Sudjono",
    link: "https://www.linkedin.com/in/salomohendriansudjono",
    borderColor: "hover:border-primary-blue",
    shadowColor: "hover:shadow-[0_0_10px_oklch(54.6%_.245_262.881_/_0.6)]",
    textColor: "group-hover:text-primary-blue",
    iconColor: "hover:text-primary-blue"
  },
  {
    title: "GitHub",
    value: "SalomoHS",
    link: "https://github.com/SalomoHS",
    borderColor: "hover:border-primary-blue",
    shadowColor: "hover:shadow-[0_0_10px_oklch(54.6%_.245_262.881_/_0.6)]",
    textColor: "group-hover:text-primary-blue",
    iconColor: "hover:text-primary-blue"
  },
  {
    title: "WhatsApp",
    value: "Chat on WhatsApp",
    link: "https://wa.link/r46btg",
    borderColor: "hover:border-primary-blue",
    shadowColor: "hover:shadow-[0_0_10px_oklch(54.6%_.245_262.881_/_0.6)]",
    textColor: "group-hover:text-primary-blue",
    iconColor: "hover:text-primary-blue"
  }
];

export default function ContactCards() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 bg-primary-blue rounded-3xl p-8">
      {/* Decorative Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
        <svg className="w-full h-full text-white" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
           {/* Bottom Right Cluster */}
           <circle cx="740" cy="340" r="24" stroke="currentColor" strokeWidth="4" />
           <rect x="660" y="330" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="4" transform="rotate(-15 680 350)" />
           <path d="M730 250 L754 290 H706 Z" stroke="currentColor" strokeWidth="4" transform="rotate(15 730 270)" />
           <path d="M680 200 L710 230 M710 200 L680 230" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
           <circle cx="760" cy="180" r="12" stroke="currentColor" strokeWidth="4" />
           
           {/* Top Left Cluster */}
           <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="4" />
           <path d="M40 120 L70 150 M70 120 L40 150" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
           <rect x="100" y="40" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="4" transform="rotate(30 115 55)" />
           <path d="M150 80 L174 120 H126 Z" stroke="currentColor" strokeWidth="4" transform="rotate(-10 150 100)" />
           <circle cx="20" cy="180" r="10" stroke="currentColor" strokeWidth="4" />

           {/* Top Right Cluster */}
           <path d="M700 50 Q 730 20 760 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
           <circle cx="650" cy="80" r="15" stroke="currentColor" strokeWidth="4" />
           <rect x="580" y="40" width="25" height="25" rx="4" stroke="currentColor" strokeWidth="4" transform="rotate(45 592 52)" />
           <path d="M620 120 L650 150 M650 120 L620 150" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

           {/* Bottom Left Cluster */}
           <path d="M50 350 L74 390 H26 Z" stroke="currentColor" strokeWidth="4" transform="rotate(-10 50 370)" />
           <path d="M120 320 Q 150 350 180 320" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
           <rect x="180" y="360" width="35" height="35" rx="6" stroke="currentColor" strokeWidth="4" transform="rotate(20 197 377)" />
           <circle cx="100" cy="250" r="18" stroke="currentColor" strokeWidth="4" />
           
           {/* Center/Scattered Fillers */}
           <circle cx="400" cy="200" r="12" stroke="currentColor" strokeWidth="4" opacity="0.5" />
           <path d="M350 100 L365 115 M365 100 L350 115" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
           <rect x="450" y="280" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="4" transform="rotate(45 460 290)" opacity="0.6" />
           <path d="M280 150 Q 300 130 320 150" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
           <path d="M520 250 L544 290 H496 Z" stroke="currentColor" strokeWidth="4" transform="rotate(180 520 270)" opacity="0.5" />
           <circle cx="300" cy="320" r="8" stroke="currentColor" strokeWidth="4" opacity="0.4" />
           <rect x="500" y="100" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="4" transform="rotate(15 507 107)" opacity="0.4" />
           <path d="M250 50 L270 70 M270 50 L250 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
           <circle cx="550" cy="350" r="20" stroke="currentColor" strokeWidth="4" opacity="0.3" />
        </svg>
      </div>
      {contactMethods.map((method) => (
        <div 
          key={method.title} 
          className={`relative z-10 w-full bg-white rounded-2xl border border-gray-200 ${method.borderColor} ${method.shadowColor} hover:scale-105 transition-all duration-300 group flex flex-col h-full`}
        >
          {/* Main Link Overlay */}
          <Link 
            href={method.link}
            target="_blank"
            className="absolute inset-0 z-0 rounded-2xl"
            aria-label={`Visit ${method.title}`}
          />

          {/* Content */}
          <div className="relative z-10 pointer-events-none p-6 flex flex-col justify-center items-center h-full w-full">
            <h3 className={`text-gray-500 text-xl font-bold mb-2 ${method.textColor} transition-colors`}>
              {method.title}
            </h3>
            
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <p className={`text-text-dark text-center break-words ${method.title === "Email" ? "text-xs" : "text-sm"}`}>
                {method.value}
              </p>
              
              {method.title === "Email" && (
                <motion.button
                  layout
                  onClick={(e) => handleCopy(e, method.value)}
                  className={`pointer-events-auto flex items-center justify-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 text-gray-500 ${method.iconColor} transition-colors text-xs font-medium border border-gray-100 overflow-hidden`}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={14} />
                        <span>Copied!</span>
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2"
                      >
                        <Copy size={14} />
                        <span>Copy to clipboard</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
