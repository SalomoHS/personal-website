'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { usePortfolio, Project } from "@/context/PortfolioContext";

interface CareerItem {
  company: string;
  year: string;
  position: string;
  logo: string;
  contribution: string[];
}

const careerHistory: CareerItem[] = [
  {
    company: "Telkom Indonesia",
    year: "2019",
    position: "Data Management Intern",
    logo: "https://tse1.mm.bing.net/th/id/OIP.FkhHvWe9PZeTdmTFXMnICwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    contribution: [
      "Managed Pandaan city customer data such as input new customer, remove churned customer, and make changes customer subscription in system.",
      "Collaborated with the team to evaluate SMK Telkom works.",
    ]
  },
  {
    company: "Mizan Amanah Foundation",
    year: "2023",
    position: "Data Analyst Intern",
    logo: "https://aplikasi-online.net/wp-content/uploads/2022/07/logo-mizan-amanah.png",
    contribution: [
      "Analyzed donor data to identify donor behavior and preferences.",
      "Created visualizations to present findings to stakeholders.",
    ]
  },
  {
    company: "Bank Central Asia",
    year: "2024-2025",
    position: "Data Scientist Intern",
    logo: "https://png.pngtree.com/png-clipart/20221224/original/pngtree-bca-bank-logo-png-image_8801637.png",
    contribution: [
      "Designed and implemented an end-to-end news sentiment system using Python to collect and clean business news from GNews, including data scraping, data cleaning, news sentiment classifcation, news summarization, extracting subject using Named Entity Recognition.",
      "Developed a real-time transcription and translation system tailored for online meetings between participants in different regions using Amazon Web Services (AWS).",
    ]
  }
];

const COMPANY_MAPPING: Record<string, string> = {
  "Bank Central Asia": "BCA",
  "Mizan Amanah Foundation": "MIZAN-AMANAH",
  "Telkom Indonesia": "TELKOM"
};

export default function CareerJourney() {
  const { projects, loading: globalLoading } = usePortfolio();
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!selectedJob) {
      setRelatedProjects([]);
      return;
    }

    const associatedCode = COMPANY_MAPPING[selectedJob.company];
    
    if (!associatedCode) {
      setRelatedProjects([]);
      return;
    }

    // Filter from global projects
    const related = projects.filter(p => p.associated_to === associatedCode);
    setRelatedProjects(related);

  }, [selectedJob, projects]);

  // Sort by year (oldest to newest)
  const sortedHistory = [...careerHistory].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <div className="w-full py-10">
        <h2 className="text-3xl font-bold text-text-dark mb-12 text-center">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-mint-green -skew-y-2 -rotate-1 rounded-lg transform scale-105 -z-10" aria-hidden="true"></span>
            <span className="relative">Career Journey</span>
          </span>
        </h2>
        
        {/* Container for horizontal scrolling on smaller screens */}
        <div className="overflow-x-auto pb-8">
            <div className="min-w-[768px] px-4">
                <div className="relative flex justify-between items-start max-w-4xl mx-auto mt-8">
                    {/* Horizontal Line */}
                    <div className="absolute top-[3.75rem] left-0 w-full h-1 bg-gray-200 -translate-y-1/2 -z-10" />
                    
                    {/* Career Points */}
                    {sortedHistory.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative flex flex-col items-center group cursor-pointer"
                            onClick={() => setSelectedJob(item)}
                        >
                            {/* Year Bubble (Top) */}
                            <div className="mb-4 px-3 py-1 bg-primary-blue text-white text-sm font-bold rounded-full shadow-md transform transition-transform group-hover:scale-110 whitespace-nowrap">
                                {item.year}
                            </div>
                            
                            {/* Connector Dot */}
                            <div className="w-6 h-6 rounded-full bg-white border-4 border-primary-pink z-10 box-content shadow-sm group-hover:bg-primary-pink transition-colors duration-300 flex-shrink-0" />
                            
                            {/* Details (Bottom) */}
                            <div className="mt-4 text-center w-40">
                                <h3 className="font-bold text-text-dark text-lg leading-tight">{item.company}</h3>
                                <p className="text-gray-600 text-sm mt-1">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
            {selectedJob && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
                    onClick={() => setSelectedJob(null)}
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto modern-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-500" />
                        </button>

                        <div className="mb-6">
                            <span className="inline-block py-1 bg-primary-blue/10 text-primary-blue text-sm font-bold rounded-full mb-4">
                                {selectedJob.year}
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                                    {selectedJob.logo ? (
                                        <img src={selectedJob.logo} alt={`${selectedJob.company} Logo`} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-xs text-gray-400 font-medium">Logo</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text-dark">{selectedJob.company}</h3>
                                    <p className="text-lg text-primary-pink font-medium">{selectedJob.position}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                                {selectedJob.contribution.map((point, i) => (
                                    <li key={i}>{point}</li>
                                )) }
                            </ul>
                        </div>

                        {/* Related Projects Section */}
                        {globalLoading ? (
                            <div className="py-8 text-center">
                                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary-blue"></div>
                                <p className="mt-2 text-sm text-gray-500">Loading related projects...</p>
                            </div>
                        ) : (
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-4">Related Projects</h4>
                                {relatedProjects.length > 0 ? (
                                    <div className="flex overflow-x-auto py-4 px-1 gap-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent -mx-1">
                                        {relatedProjects.map((project, index) => (
                                            <div key={index} className="min-w-[320px] w-[320px] transform hover:scale-[1.02] transition-transform duration-300">
                                                <ProjectCard {...project} variant="mini" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-sm italic">No related projects</p>
                                )}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
