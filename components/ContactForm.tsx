"use client";
import Button from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, X } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalStatus, setModalStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.eu1.make.com/na7mwy89vdc6pgvsutdot18hw281nzy2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setModalStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setModalStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-text-dark mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
            placeholder="Subject"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all resize-none"
            placeholder="Your message"
          />
        </div>
        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <AnimatePresence>
        {modalStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setModalStatus(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 shadow-xl max-w-sm w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalStatus(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center space-y-4">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${modalStatus === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {modalStatus === 'success' ? <Check size={24} /> : <AlertCircle size={24} />}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {modalStatus === 'success' ? 'Message Sent!' : 'Error'}
                </h3>
                
                <p className="text-gray-600">
                  {modalStatus === 'success' ? 'message has been sent' : 'message failed to sent'}
                </p>

                <button
                  onClick={() => setModalStatus(null)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all ${modalStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
