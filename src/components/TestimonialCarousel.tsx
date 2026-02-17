"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Christian Evan Budiawan",
    role: "Supervisor Corporate Support & Data Analytics",
    company: "Bank Central Asia",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFLgIQS6VODiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730805047940?e=1772668800&v=beta&t=alFDm2eO-Gq_JG9Jz5rNEFqjUxfAeB_qjot8s2soeoo",
    text: "Salomo consistently impressed me with his strong technical abilities, particularly in Python, and his resilience when tackling complex data challenges. He made significant contributions to machine learning and AI projects, often working through intricate data cleaning and transaction mapping tasks that required both analytical skill and persistence.",
    link: "https://www.linkedin.com/in/christianevanbudiawan/",
  },
  {
    id: 2,
    name: "Anonymous",
    role: "Web Scraping Client",
    company: "Fastwork",
    image: "",
    text: "Saya udah dua kali order ke freelancer ini dan dua-duanya hasilnya memuaskan banget! Kerjanya rapi, cepat, dan komunikasinya juga oke.",
    link: "https://fastwork.id/user/ctacia_idn",
  },
  {
    id: 3,
    name: "Anonymous",
    role: "Web Scraping Client",
    company: "Fastwork",
    image: "",
    text: "pelayanan baik, solving problem dan enak diajak diskusi. sukses terus.",
    link: "https://fastwork.id/user/ctacia_idn",
  },
  {
    id: 4,
    name: "Anonymous",
    role: "Web Scraping Client",
    company: "Fastwork",
    image: "",
    text: "freelancer yang sangat bagus pelayanan, support dan willing help nya TOP. auto berlanggannan nih. recommended untuk kaka order disini. tetep pertahankan kualitas dan pelayanan nya ya ka. next project kita gas lagi.",
    link: "https://fastwork.id/user/ctacia_idn",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return; // Pause auto-slide when paused

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleProfileClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation(); // Prevent card click
    window.open(link, "_blank");
  };

  const handleCardClick = (link: string) => {
    window.open(link, "_blank");
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Voices from Partners and Clients
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary-blue hover:shadow-md transition-all duration-300 hidden md:block"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary-blue hover:shadow-md transition-all duration-300 hidden md:block"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          className="relative h-96 md:h-80 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-shadow duration-300 max-w-2xl w-full"
            >
              <p className="text-gray-600 text-lg italic mb-6 line-clamp-5">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div 
                className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleCardClick(testimonials[currentIndex].link)}
              >
                <div 
                  className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-blue/20 hover:border-primary-blue transition-colors flex items-center justify-center bg-gray-100"
                >
                  {testimonials[currentIndex].image ? (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary-blue w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
