"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed z-[60] transition-all duration-500 ease-in-out",
          isScrolled && !isOpen
            ? "top-4 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 w-fit md:w-[85%] lg:w-[75%] xl:w-[70%] max-w-7xl" 
            : "top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-8">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors hover:text-primary-blue",
                      pathname === item.href ? "text-primary-blue" : "text-text-dark"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Link href="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/resume/Salomo%20-%20Resume.pdf?download" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="bg-primary-purple pr-6 pl-5 group relative overflow-hidden before:absolute before:inset-0 before:bg-text-dark before:-translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300"
                    style={{
                      maskImage: `radial-gradient(circle 5px at 3rem 0, transparent 5px, black 5.5px), radial-gradient(circle 5px at 3rem 100%, transparent 5px, black 5.5px)`,
                      maskComposite: 'intersect',
                      WebkitMaskComposite: 'source-in',
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      <Download className="mr-6 w-4 h-4" />
                      Get My Resume
                    </span>
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block">
                <Link href="/contact">
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="pl-6 pr-5 group relative overflow-hidden before:absolute before:inset-0 before:bg-text-dark before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300"
                    style={{
                      maskImage: `radial-gradient(circle 5px at calc(100% - 3rem) 0, transparent 5px, black 5.5px), radial-gradient(circle 5px at calc(100% - 3rem) 100%, transparent 5px, black 5.5px)`,
                      maskComposite: 'intersect',
                      WebkitMaskComposite: 'source-in',
                    }}
                  >
                    <span className="relative z-10 flex items-center">
                      Get in Touch <ArrowRight className="ml-6 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-text-dark transition-all duration-500 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[75]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed right-0 top-0 h-full w-[75%] max-w-sm bg-white z-[80] shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-100">
                <button
                  className="p-2 text-text-dark hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Content */}
              <nav className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "font-medium py-2 text-lg transition-colors",
                      pathname === item.href ? "text-primary-blue" : "text-text-dark hover:text-primary-blue"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 flex flex-col gap-4">
                  <Link href="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/resume/Salomo%20-%20Resume.pdf?download" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="primary" 
                      className="w-full bg-primary-purple"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Download className="mr-2 w-4 h-4" />
                        Download Resume
                      </span>
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="primary" 
                      className="w-full group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get in Touch <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
