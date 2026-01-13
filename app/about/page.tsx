import SkillsDisplay from "@/components/SkillsDisplay";
import Achievements from "@/components/Achievements";
import HobbiesDisplay from "@/components/HobbiesDisplay";
import CareerJourney from "@/components/CareerJourney";
import Gallery from "@/components/Gallery";
import ContactCards from "@/components/ContactCards";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-sm mx-auto">
                <div className="aspect-square relative rounded-3xl overflow-hidden bg-white shadow-[6px_6px_0_0_theme('colors.primary-pink')]">
                     <Image
                       src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/photo-profile/photo_2025-10-01_09-22-11%20(2).jpg"
                       alt="Profile Photo"
                       fill
                       className="object-cover"
                       priority
                     />
                </div>
            </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Hi, I&apos;m <br /> <span className="text-primary-blue">Salomo Hendrian Sudjono</span>.
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            A fresh graduate based in Jakarta.
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I’m a <span className="text-primary-purple">Data Science graduate</span> from <span className="text-primary-pink">Binus University</span> with a strong interest in <span className="text-primary-blue">Artificial Intelligence</span> and <span className="text-primary-blue">Data Science</span>. I’m passionate about turning data into meaningful insights and developing AI-powered solutions that to solve problems and simplify complex processes.
              <br></br>
              <br></br>
              I’m currently deepening my knowledge in Deep Learning, Machine Learning, AI Agents, Cloud Computing, and Data Analysis Methods to continuously improve my ability to design data-driven and intelligent solutions that create real impact.
            </p>
          </div>
        </div>
      </div>

      <ContactCards />
      <CareerJourney />

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-light-blue -skew-y-2 -rotate-1 rounded-lg transform scale-105 -z-10" aria-hidden="true"></span>
            <span className="relative">My Skills</span>
          </span>
        </h2>
        <SkillsDisplay />
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-primary-pink -skew-y-2 -rotate-1 rounded-lg transform scale-105 -z-10" aria-hidden="true"></span>
            <span className="relative">My Achievements</span>
          </span>
        </h2>
        <Achievements />
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-accent-yellow -skew-y-2 -rotate-1 rounded-lg transform scale-105 -z-10" aria-hidden="true"></span>
            <span className="relative">My Hobbies</span>
          </span>
        </h2>
        <HobbiesDisplay />
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-text-dark mb-10 text-center">
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-primary-blue -skew-y-2 -rotate-1 rounded-lg transform scale-105 -z-10" aria-hidden="true"></span>
            <span className="relative">Gallery</span>
          </span>
        </h2>
        <Gallery />
      </div>
    </div>
  );
}
