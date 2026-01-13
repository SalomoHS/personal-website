'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string | string[];
  image?: string;
  link: string;
  category?: string;
  created_at?: string;
  variant?: 'default' | 'mini';
}

export default function ProjectCard({ title, description, tags, image, link, category, created_at, variant = 'default' }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const tagsArray = Array.isArray(tags) ? tags : tags.split(",");
  const date = created_at ? new Date(created_at) : null;
  const year = date && !isNaN(date.getTime()) ? date.getFullYear() : null;
  
  const isMini = variant === 'mini';

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={`group bg-white ${isMini ? "rounded-xl flex-row h-28 shadow-[4px_4px_0_0_theme('colors.primary-purple')]" : "rounded-3xl flex-col h-full shadow-[6px_6px_0_0_theme('colors.primary-purple')]"} overflow-hidden flex transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
      >
        <div className={`relative ${isMini ? 'h-full w-28 shrink-0' : 'h-56 w-full'} bg-gray-100 overflow-hidden`}>
          {/* Category Badge */}
          {category && (
            <div className={`absolute top-0 left-0 z-10 bg-white ${isMini ? 'pl-1 pt-1 pr-1 pb-1 rounded-br-lg' : 'pl-2 pt-2 pr-2 pb-2 rounded-br-2xl'}`}>
              <div className={`bg-light-blue ${isMini ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'} rounded-full font-semibold text-primary-blue`}>
                {category}
              </div>
            </div>
          )}
          {/* Placeholder for image if not provided or while loading */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
             {image ? (
               <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
             ) : (
               <span className={`${isMini ? 'text-2xl' : 'text-4xl'} opacity-20 font-bold`}>Project</span>
             )}
          </div>
        </div>
        <div className={`${isMini ? 'p-3 border-t border-r rounded-tr-2xl' : 'p-6 border-l rounded-bl-3xl'} flex flex-col border-gray flex-grow min-w-0`}>
          <h3 className={`${isMini ? 'text-sm' : 'text-xl'} font-bold text-text-dark ${isMini ? 'mb-1' : 'mb-2'} line-clamp-1`}>
            {title}
          </h3>
          <p className={`text-gray-600 ${isMini ? 'mb-2 text-xs line-clamp-2' : 'mb-6 line-clamp-2'}`}>
            {description}
          </p>
          {!isMini && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tagsArray.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-pill bg-white border border-light-blue text-primary-blue text-xs font-semibold">
                  {tag.trim()}
                </span>
              ))}
              {tagsArray.length > 3 && (
                <span className="px-3 py-1 rounded-pill bg-white border border-gray-200 text-gray-500 text-xs font-semibold">
                  +{tagsArray.length - 3} more skills
                </span>
              )}
            </div>
          )}
          <div className="flex justify-between items-center mt-auto w-full">
            <div>
               {year && <span className={`text-gray-400 pl-1 ${isMini ? 'text-xs' : 'text-sm'} font-medium`}>{year}</span>}
            </div>
            <div className={`inline-flex items-center text-primary-blue font-semibold group-hover:text-primary-purple transition-colors ${isMini ? 'text-xs' : ''}`}>
              {isMini ? 'View' : 'View Details'}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative no-scrollbar"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-col">
                        {/* Image Section */}
                        <div className="relative h-64 w-full bg-gray-100">
                            {image ? (
                                <Image src={image} alt={title} fill className="object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
                                    <span className="text-5xl opacity-20 font-bold">Project</span>
                                </div>
                            )}
                            {category && (
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-primary-blue shadow-sm">
                                    {category}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-3xl font-bold text-text-dark">{title}</h2>
                                {year && <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">{year}</span>}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {tagsArray.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-light-blue/30 text-primary-blue text-sm font-medium">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-gray max-w-none mb-8 text-gray-600">
                                <p>{description}</p>
                            </div>

                            <div className="flex justify-end pt-4 border-t border-gray-100">
                                <Link 
                                    href={link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        maskImage: `radial-gradient(circle 5px at calc(100% - 3rem) 0, transparent 5px, black 5.5px), radial-gradient(circle 5px at calc(100% - 3rem) 100%, transparent 5px, black 5.5px)`,
                                        maskComposite: 'intersect',
                                        WebkitMaskComposite: 'source-in',
                                    }}
                                    className="group relative inline-flex items-center justify-center pl-6 pr-5 py-2 bg-primary-pink text-text-dark text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 drop-shadow-lg before:absolute before:inset-0 before:bg-text-dark before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300 hover:text-white"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Visit Project <ArrowUpRight size={16} className="ml-6 transition-transform group-hover:rotate-45" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
