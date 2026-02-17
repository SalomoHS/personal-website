"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, PhoneCall, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "isalomohendriyan@gmail.com",
      href: "mailto:isalomohendriyan@gmail.com",
      isEmail: true
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Salomo Hendrian Sudjono",
      href: "https://www.linkedin.com/in/salomohendriansudjono"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "SalomoHS",
      href: "https://github.com/SalomoHS"
    },
    {
      icon: <PhoneCall size={20} />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.link/r46btg"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {links.map((link, index) => {
        if (link.isEmail) {
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary-blue hover:bg-gray-50 transition-all duration-300 group relative"
            >
              <Link
                href={link.href}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="p-3 bg-white border border-gray-100 rounded-full text-gray-600 group-hover:text-primary-blue group-hover:border-primary-blue/20 transition-colors shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {link.label}
                  </span>
                  <span className="text-text-dark font-medium group-hover:text-primary-blue transition-colors truncate">
                    {link.value}
                  </span>
                </div>
              </Link>
              <button
                onClick={(e) => handleCopy(e, link.value)}
                className="p-2 text-gray-400 hover:text-primary-blue hover:bg-white rounded-lg transition-colors z-10"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          );
        }

        return (
          <Link
            key={index}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary-blue hover:bg-gray-50 transition-all duration-300 group"
          >
            <div className="p-3 bg-white border border-gray-100 rounded-full text-gray-600 group-hover:text-primary-blue group-hover:border-primary-blue/20 transition-colors shrink-0">
              {link.icon}
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                {link.label}
              </span>
              <span className="text-text-dark font-medium group-hover:text-primary-blue transition-colors truncate">
                {link.value}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
