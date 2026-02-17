import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-pill font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-blue text-white hover:shadow-[6px_6px_0_0_#000]",
    secondary: "bg-primary-pink text-white hover:opacity-90 shadow-lg",
    outline: "border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-white",
    ghost: "text-text-dark hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
