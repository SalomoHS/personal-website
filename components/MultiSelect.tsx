"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  label?: string;
}

export default function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  label,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  const removeOption = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    onChange(selected.filter((item) => item !== option));
  };

  return (
    <div className="relative w-full md:w-48" ref={containerRef}>
      {label && <label className="block text-xs font-semibold text-text-dark mb-1">{label}</label>}
      <div
        className="w-full min-h-[36px] px-3 py-1.5 bg-white border border-gray-200 rounded-xl cursor-pointer flex items-center justify-between hover:border-primary-blue transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1">
          {selected.length === 0 ? (
            <span className="text-gray-500 text-xs">{placeholder}</span>
          ) : (
            selected.map((item) => (
              <span
                key={item}
                className="bg-primary-blue/10 text-primary-blue text-xs font-medium px-2 py-0.5 rounded-md flex items-center gap-1"
              >
                {item}
                <X
                  size={12}
                  className="cursor-pointer hover:text-red-500"
                  onClick={(e) => removeOption(e, item)}
                />
              </span>
            ))
          )}
        </div>
        <ChevronDown size={14} className={cn("text-gray-400 transition-transform", isOpen && "rotate-180")} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg max-h-60 overflow-y-auto"
          >
            {options.length === 0 ? (
               <div className="px-4 py-3 text-xs text-gray-500 text-center">No tags available</div>
            ) : (
              options.map((option) => (
                  <div
                  key={option}
                  className={cn(
                      "px-4 py-2 text-xs cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors",
                      selected.includes(option) ? "text-primary-blue font-medium bg-primary-blue/5" : "text-text-dark"
                  )}
                  onClick={() => toggleOption(option)}
                  >
                  {option}
                  {selected.includes(option) && <Check size={14} />}
                  </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
