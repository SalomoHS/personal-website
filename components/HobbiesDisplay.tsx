import Image from 'next/image';
import { Globe, Heart, Star, Video, Music, Book } from 'lucide-react';

export default function HobbiesDisplay() {
  return (
    <div className="flex flex-col gap-4 md:gap-4 py-10 max-w-7xl mx-auto">
      {/* Row 1: MUSIC */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <iframe
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src="https://www.youtube.com/embed/X85nTVeVUJ4?rel=0&modestbranding=1&disablekb=1" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
        <div className="text-center px-4">
            <h3 className="text-2xl md:text-lg font-bold tracking-[0.25em] text-gray-400 uppercase">Videography</h3>
        </div>

        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <iframe
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src="https://www.youtube.com/embed/FuSGHPJiQLk?rel=0&modestbranding=1&disablekb=1" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
        <div className="hidden md:block text-gray-300 ml-4">
            <Video size={64} strokeWidth={1} />
        </div>
      </div>

      {/* Row 2: Music */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="hidden md:block text-gray-300 mr-4">
            <Music size={64} strokeWidth={1} />
        </div>

        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <iframe
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src="https://www.youtube.com/embed/F5LELp5Kmpg?rel=0&modestbranding=1&disablekb=1" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
        <div className="text-center px-4">
            <h3 className="text-2xl md:text-lg font-bold tracking-[0.25em] text-gray-400 uppercase">Music</h3>
        </div>

        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <iframe
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            src="https://www.youtube.com/embed/NDka7AK0Vdg?rel=0&modestbranding=1&disablekb=1&start=54" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Row 3: LEARNING */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <Image 
            src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/photo_2026-01-12_17-57-45.jpg" 
            alt="Learning Hobby 1" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        <div className="text-center px-4">
            <h3 className="text-2xl md:text-lg font-bold tracking-[0.25em] text-gray-400 uppercase">Learning</h3>
        </div>

        <div className="relative w-full md:w-[400px] h-[200px] md:h-[200px] rounded-3xl overflow-hidden group">
          <Image 
            src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/aws-ug.png" 
            alt="Learning Hobby 2" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        <div className="hidden md:block text-gray-300 ml-4">
            <Book size={64} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
