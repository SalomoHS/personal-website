import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import MultiSelect from "./MultiSelect";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  tags: string[];
  selectedTags: string[];
  onSelectTags: (tags: string[]) => void;
  sortOrder: 'newest' | 'oldest';
  onSortChange: (order: 'newest' | 'oldest') => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  tags,
  selectedTags,
  onSelectTags,
  sortOrder,
  onSortChange,
}: ProjectFilterProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visibleCategories = categories.slice(0, 4);
  const hiddenCategories = categories.slice(4);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 mb-12">
      {/* Categories */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
        {visibleCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-1.5 text-sm rounded-pill font-semibold transition-all duration-200",
              activeCategory === category
                ? "bg-primary-blue text-white shadow-md"
                : "bg-white text-text-dark border border-gray-200 hover:bg-gray-50"
            )}
          >
            {category}
          </button>
        ))}
        
        {hiddenCategories.length > 0 && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                "px-4 py-1.5 text-sm rounded-pill font-semibold transition-all duration-200 flex items-center gap-1",
                hiddenCategories.includes(activeCategory)
                  ? "bg-primary-blue text-white shadow-md"
                  : "bg-white text-text-dark border border-gray-200 hover:bg-gray-50"
              )}
            >
              ...
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 z-50 w-48 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden py-1"
                >
                  {hiddenCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onSelectCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between",
                        activeCategory === category 
                          ? "text-primary-blue font-medium bg-primary-blue/5" 
                          : "text-text-dark"
                      )}
                    >
                      {category}
                      {activeCategory === category && <Check size={14} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto justify-center lg:justify-end items-center">
        {/* Sort By Year */}
        <div className="relative w-full md:w-48" ref={sortRef}>
            <label className="block text-xs font-semibold text-text-dark mb-1">Sort by Year</label>
            <div 
              className="w-full min-h-[36px] px-3 py-1.5 bg-white border border-gray-200 rounded-xl cursor-pointer flex items-center justify-between hover:border-primary-blue transition-colors"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
                <span className="text-text-dark text-xs font-medium">
                  {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                </span>
                <ChevronDown size={14} className={cn("text-gray-400 transition-transform", isSortOpen && "rotate-180")} />
            </div>
            
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden"
                >
                  <div 
                    className={cn(
                      "px-4 py-2 text-xs cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors",
                      sortOrder === 'newest' ? "text-primary-blue font-medium bg-primary-blue/5" : "text-text-dark"
                    )}
                    onClick={() => {
                      onSortChange('newest');
                      setIsSortOpen(false);
                    }}
                  >
                    Newest First
                    {sortOrder === 'newest' && <Check size={14} />}
                  </div>
                  <div 
                    className={cn(
                      "px-4 py-2 text-xs cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors",
                      sortOrder === 'oldest' ? "text-primary-blue font-medium bg-primary-blue/5" : "text-text-dark"
                    )}
                    onClick={() => {
                      onSortChange('oldest');
                      setIsSortOpen(false);
                    }}
                  >
                    Oldest First
                    {sortOrder === 'oldest' && <Check size={14} />}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Tags Filter */}
        <MultiSelect
            label="Filter by Tags"
            options={tags}
            selected={selectedTags}
            onChange={onSelectTags}
            placeholder="Select tags..."
        />
      </div>
    </div>
  );
}
