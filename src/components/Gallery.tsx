"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Using a mix of placeholders that look professional
const photos = [
  { src: "https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/1ac8063e_original.jpg", alt: "Internship at Bank Central Asia", className: "md:col-span-2" },
  { src: "https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/7bec1a06_original.jpg", alt: "Internship at Mizan Amanah Foundation", className: "md:col-span-1" },
  { src: "https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/a42ddceb_original.jpg", alt: "Internship at Telkom Indonesia", className: "md:col-span-1" },
  { src: "https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/gallery/photo_2026-01-12_17-57-45.jpg", alt: "Amartha Level Up Workshop", className: "md:col-span-2" },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <>
      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((i) => (
            <div key={i} className="grid grid-cols-3 gap-4 w-screen pr-4">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-100 cursor-pointer ${photo.className || ''}`}
                >
                  {/* Using standard img to avoid next/image domain config requirement for now */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center" 
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.alt} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" 
                />
              </div>
              <p className="text-white mt-6 text-xl font-medium tracking-wide">
                {selectedPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
