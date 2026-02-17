"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { usePortfolio, Project } from "@/context/PortfolioContext";

export default function ProjectsPage() {
  const { projects, categories, loading } = usePortfolio();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Derive availableTags from projects
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((p: Project) => {
       const pTags = typeof p.tags === 'string' ? p.tags.split(',') : (Array.isArray(p.tags) ? p.tags : []);
       pTags.forEach((t: string) => {
           if(t.trim()) tagsSet.add(t.trim());
       });
    });
    return Array.from(tagsSet).sort();
  }, [projects]);

  const filteredProjects = projects
    .filter(p => {
        // Category Filter
        if (activeCategory !== "All" && p.category !== activeCategory) return false;
        
        // Tags Filter
        if (selectedTags.length > 0) {
            const pTags = typeof p.tags === 'string' ? p.tags.split(',').map(t => t.trim()) : (Array.isArray(p.tags) ? p.tags : []);
            const hasTag = selectedTags.some(tag => pTags.includes(tag));
            if (!hasTag) return false;
        }
        return true;
    })
    .sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">My Works</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A selection of projects I&apos;ve worked on.
        </p>
      </div>

      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        tags={availableTags}
        selectedTags={selectedTags}
        onSelectTags={setSelectedTags}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      {loading ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title || index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-10 text-gray-500"
              >
                No projects found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
