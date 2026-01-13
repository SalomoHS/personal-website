import React from 'react';
import Button from './Button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
      {/* Item 1 */}
      <div className="flex flex-col items-start h-full">
        {/* Achievement Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-100">
          <Image 
            src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/Screenshot%202026-01-13%20142344.png" 
            alt="Kota Berbicara"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <span className="text-primary-blue font-bold mb-2">2025</span>
        
        <h3 className="text-2xl font-normal text-text-dark mb-4">Finalist of AI Innovation Challenge COMPFEST 17</h3>
        <p className="text-gray-600 leading-relaxed text-l mb-8 flex-grow">
          Selected as a finalist in the AI Innovation Challenge COMPFEST 17 for developing &quot;Kota Berbicara&quot;, an AI-based solution addressing urban communication and accessibility challenges.
        </p>
        
        <a href="https://github.com/SalomoHS/Compfest-Podcast-Generator" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 group">
                View Project
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
        </a>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-start h-full">
        {/* Achievement Image */}
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6">
          <Image 
            src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/pngtree-bca-bank-logo-png-image_8801637.png" 
            alt="News Scraping System"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <span className="text-primary-pink font-bold mb-2">2025</span>

        <h3 className="text-2xl font-normal text-text-dark mb-4">News Scraping System Successfully Replicated by ITBCA</h3>
        <p className="text-gray-600 leading-relaxed text-l mb-8 flex-grow">
          Assist the credit analysis process by performed sentiment labeling on 700+ news articles per day. The system was adopted and replicated by ITBCA as a base architecture for extended development.
        </p>
        
        <a href="https://github.com/SalomoHS/News-Scraping" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="sm" className="gap-2 group">
                View Project
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
        </a>
      </div>
    </div>
  );
};

export default Achievements;
