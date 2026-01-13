"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

export interface Project {
  title: string;
  description: string;
  tags: string | string[];
  category: string;
  link: string;
  github?: string;
  image?: string;
  created_at: string;
  associated_to?: string;
}

interface PortfolioContextType {
  projects: Project[];
  categories: string[];
  loading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .schema("portfolio")
          .from('categories')
          .select('category');

        if (categoriesError) {
          console.error('Error fetching categories:', categoriesError);
          // We don't block everything if categories fail, but maybe we should log it
        } else if (categoriesData) {
          const uniqueCategories = Array.from(new Set(categoriesData.map((c: { category: string }) => c.category)));
          setCategories(["All", ...uniqueCategories]);
        }

        // Fetch projects
        const { data, error } = await supabase
          .schema("portfolio")
          .from('projects')
          .select('*, categories(category)');
        
        if (error) {
          console.error('Error fetching projects:', error);
          setError(error.message);
        } else {
          console.log('Fetched projects (Global Context):', data);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const formattedProjects = (data || []).map((project: Record<string, any>) => {
            const rawCategory = project.categories;
            const categoryData = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;

            // Handle if category is an array (one-to-many) or object (many-to-one)
            // And try to find a name-like property
            const categoryName = categoryData 
              ? (categoryData.category || categoryData.name || categoryData.title || categoryData.label || project.category)
              : project.category;

            return {
              ...project,
              category: categoryName,
              tags: Array.isArray(project.tags) ? project.tags.join(',') : project.tags,
            } as Project;
          });
          setProjects(formattedProjects);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ projects, categories, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
