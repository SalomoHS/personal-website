import Button from "./Button";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Profile Photo */}
        <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white mb-6 shadow-[6px_6px_0_0_theme('colors.primary-pink')] overflow-hidden relative">
                {/* Replace with actual Image component when photo is available */}
                <Image
                  src="https://gvjedbipogczjshlbjnz.supabase.co/storage/v1/object/public/Portfolio/photo-profile/photo_2025-10-01_09-22-11%20(2).jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-3 tracking-tight">
            Salomo Hendrian Sudjono
        </h1>
        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-pink font-bold mb-6">
            Data Science Graduate
        </p>

        {/* Personal Details */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-pill bg-gray-100 text-gray-700 font-medium text-sm border border-gray-200">
            He/Him
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-pill bg-primary-blue/10 text-primary-blue font-semibold text-sm border border-primary-blue/20">
            Binus University • Data Science • GPA 3.76/4
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-pill bg-primary-pink/10 text-primary-pink font-semibold text-sm border border-primary-pink/20">
            Jakarta, Indonesia
            </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/works">
            <Button variant="primary" size="lg">
                View My Works
            </Button>
            </Link>
            <Link href="/about">
            <Button variant="outline" size="lg">
                More About Me
            </Button>
            </Link>
        </div>
    </div>
  );
}
