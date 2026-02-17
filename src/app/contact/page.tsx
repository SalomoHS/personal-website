import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? <br />
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="w-full max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-pink via-accent-yellow to-primary-blue" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="w-full">
            <h3 className="text-xl font-bold text-text-dark mb-6">Send a Message</h3>
            <ContactForm />
          </div>
          
          <div className="w-full relative">
             <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gray-100"></div>
             
             <h3 className="text-xl font-bold text-text-dark mb-6">Connect with me</h3>
             <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
