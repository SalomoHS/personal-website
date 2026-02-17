import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Link from "next/link";
import { DecorativeShapes } from "@/components/DecorativeElements";
import SummaryStats from "@/components/SummaryStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default async function Home() {


  return (
    <div className="flex flex-col gap-5 pb-20">
      <section className="relative md:pt-18 md:pb-28 overflow-hidden">
        <DecorativeShapes />
        <Hero />
      </section>

      <section className="bg-white border-b border-gray-100">
        <TestimonialCarousel />
      </section>

      <section className="container mx-auto px-4 md:px-6 pt-5 pb-16 border-b border-gray-100">
        <SummaryStats />
      </section>
      
      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-primary-blue/5 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 relative z-10">
            Ready to start a project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto relative z-10">
            Let&apos;s collaborate and bring the ideas to life. <br />
            I&apos;m currently available for full-time opportunities.
          </p>
          <Link href="/contact" className="relative z-10">
            <Button variant="primary" size="lg">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
