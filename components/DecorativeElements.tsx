import {
  Code,
  Terminal,
  Database,
  GitBranch,
  Braces,
  Hash,
  Command,
  Bug
} from "lucide-react";

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
  );
}

export function DecorativeShapes() {
  const icons = [
    // Top Left Quadrant
    { Icon: Braces, top: "10%", left: "2%", size: 48, color: "text-primary-pink", opacity: "opacity-20", rotate: "rotate-9", animate: "animate-pulse", delay: "0.4s" },
    { Icon: Terminal, top: "18%", left: "12%", size: 32, color: "text-primary-purple", opacity: "opacity-15", rotate: "-rotate-6", animate: "", delay: "0.2s" },
    { Icon: Database, top: "28%", left: "3%", size: 36, color: "text-mint-green", opacity: "opacity-20", rotate: "rotate-90", animate: "", delay: "0.9s" },
    { Icon: GitBranch, top: "32%", left: "18%", size: 56, color: "text-accent-yellow", opacity: "opacity-15", rotate: "-rotate-12", animate: "animate-pulse", delay: "2.5s" },
    { Icon: Braces, top: "8%", left: "29%", size: 44, color: "text-primary-pink", opacity: "opacity-10", rotate: "rotate-20", animate: "", delay: "0.9s" },
    { Icon: Hash, top: "38%", left: "28%", size: 28, color: "text-light-blue", opacity: "opacity-25", rotate: "rotate-12", animate: "animate-pulse", delay: "0.5s" },
    { Icon: Command, top: "22%", left: "45%", size: 36, color: "text-primary-blue", opacity: "opacity-15", rotate: "-rotate-45", animate: "", delay: "0.7s" },
    { Icon: Bug, top: "42%", left: "8%", size: 52, color: "text-primary-pink", opacity: "opacity-10", rotate: "rotate-7", animate: "animate-pulse", delay: "3.1s" },

    
    { Icon: Code, top: "2%", left: "10%", size: 26, color: "text-primary-yellow", opacity: "opacity-20", rotate: "rotate-5", animate: "animate-pulse", delay: "0.4s" },
    { Icon: Bug, top: "9%", left: "20%", size: 45, color: "text-primary-blue", opacity: "opacity-20", rotate: "rotate-8", animate: "animate-pulse", delay: "0.4s" },
    { Icon: Code, top: "26%", left: "30%", size: 34, color: "text-primary-purple", opacity: "opacity-20", rotate: "rotate-1", animate: "animate-pulse", delay: "0.4s" },
    { Icon: Command, top: "6%", left: "40%", size: 33, color: "text-primary-pink", opacity: "opacity-20", rotate: "rotate-54", animate: "animate-pulse", delay: "0.4s" },
    { Icon: GitBranch, top: "2%", left: "63%", size: 53, color: "text-primary-blue", opacity: "opacity-20", rotate: "rotate-32", animate: "animate-pulse", delay: "0.4s" },
    
    // Top Right Quadrant
    { Icon: Terminal, top: "5%", left: "85%", size: 42, color: "text-primary-purple", opacity: "opacity-20", rotate: "rotate-45", animate: "animate-pulse", delay: "1.2s" },
    { Icon: Code, top: "15%", left: "68%", size: 38, color: "text-primary-pink", opacity: "opacity-15", rotate: "-rotate-12", animate: "", delay: "0.5s" },
    { Icon: Database, top: "15%", left: "92%", size: 30, color: "text-mint-green", opacity: "opacity-25", rotate: "rotate-12", animate: "animate-pulse", delay: "2.1s" },
    { Icon: Braces, top: "25%", left: "82%", size: 30, color: "text-primary-pink", opacity: "opacity-35", rotate: "rotate-12", animate: "animate-pulse", delay: "2.1s" },
    { Icon: GitBranch, top: "35%", left: "75%", size: 48, color: "text-accent-yellow", opacity: "opacity-15", rotate: "rotate-6", animate: "", delay: "1.5s" },
    { Icon: Hash, top: "32%", left: "92%", size: 48, color: "text-primary-purple", opacity: "opacity-15", rotate: "rotate-6", animate: "", delay: "1.5s" },
    { Icon: Braces, top: "12%", left: "58%", size: 34, color: "text-light-blue", opacity: "opacity-20", rotate: "-rotate-90", animate: "animate-pulse", delay: "0.8s" },
    { Icon: Hash, top: "45%", left: "88%", size: 28, color: "text-light-blue", opacity: "opacity-15", rotate: "rotate-12", animate: "", delay: "1.8s" },
    { Icon: Command, top: "28%", left: "62%", size: 40, color: "text-primary-blue", opacity: "opacity-10", rotate: "-rotate-12", animate: "animate-pulse", delay: "2.7s" },
    { Icon: Bug, top: "8%", left: "75%", size: 36, color: "text-primary-pink", opacity: "opacity-20", rotate: "rotate-90", animate: "", delay: "0.3s" },
    { Icon: Code, top: "45%", left: "85%", size: 48, color: "text-primary-blue", opacity: "opacity-20", rotate: "rotate-6", animate: "animate-pulse", delay: "1.5s" },
    
    // Bottom Left Quadrant
    { Icon: Code, top: "65%", left: "5%", size: 45, color: "text-primary-pink", opacity: "opacity-15", rotate: "-rotate-45", animate: "", delay: "1.1s" },
    { Icon: Terminal, top: "78%", left: "15%", size: 32, color: "text-primary-purple", opacity: "opacity-25", rotate: "rotate-12", animate: "animate-pulse", delay: "2.2s" },
    { Icon: GitBranch, top: "58%", left: "20%", size: 50, color: "text-accent-yellow", opacity: "opacity-20", rotate: "rotate-90", animate: "animate-pulse", delay: "1.9s" },
    { Icon: Braces, top: "92%", left: "35%", size: 40, color: "text-primary-blue", opacity: "opacity-15", rotate: "rotate-6", animate: "", delay: "2.8s" },
    { Icon: Hash, top: "72%", left: "42%", size: 26, color: "text-light-blue", opacity: "opacity-15", rotate: "-rotate-6", animate: "animate-pulse", delay: "1.4s" },
    { Icon: Command, top: "55%", left: "12%", size: 34, color: "text-primary-blue", opacity: "opacity-20", rotate: "rotate-45", animate: "", delay: "0.9s" },
    { Icon: Bug, top: "82%", left: "28%", size: 48, color: "text-primary-pink", opacity: "opacity-15", rotate: "-rotate-12", animate: "", delay: "3.5s" },
    { Icon: Braces, top: "92%", left: "8%", size: 48, color: "text-primary-purple", opacity: "opacity-15", rotate: "-rotate-12", animate: "", delay: "3.5s" },
    { Icon: GitBranch, top: "90%", left: "20%", size: 48, color: "text-primary-pink", opacity: "opacity-15", rotate: "-rotate-12", animate: "animate-pulse", delay: "3.5s" },

    // Bottom Right Quadrant
    { Icon: Terminal, top: "62%", left: "82%", size: 36, color: "text-primary-purple", opacity: "opacity-15", rotate: "rotate-12", animate: "", delay: "1.6s" },
    { Icon: Code, top: "75%", left: "65%", size: 42, color: "text-primary-pink", opacity: "opacity-25", rotate: "-rotate-90", animate: "animate-pulse", delay: "2.4s" },
    { Icon: Database, top: "58%", left: "95%", size: 30, color: "text-mint-green", opacity: "opacity-20", rotate: "rotate-6", animate: "", delay: "0.7s" },
    { Icon: GitBranch, top: "85%", left: "75%", size: 54, color: "text-accent-yellow", opacity: "opacity-15", rotate: "-rotate-45", animate: "animate-pulse", delay: "3.2s" },
    { Icon: Braces, top: "68%", left: "55%", size: 38, color: "text-primary-lime", opacity: "opacity-15", rotate: "rotate-12", animate: "", delay: "1.3s" },
    { Icon: Hash, top: "95%", left: "88%", size: 24, color: "text-light-blue", opacity: "opacity-20", rotate: "-rotate-12", animate: "animate-pulse", delay: "2.9s" },
    { Icon: Command, top: "88%", left: "58%", size: 40, color: "text-primary-blue", opacity: "opacity-25", rotate: "rotate-90", animate: "", delay: "1.7s" },
    { Icon: Bug, top: "72%", left: "92%", size: 46, color: "text-primary-pink", opacity: "opacity-15", rotate: "rotate-45", animate: "animate-pulse", delay: "0.4s" },
    { Icon: Braces, top: "82%", left: "85%", size: 46, color: "text-primary-pink", opacity: "opacity-15", rotate: "rotate-45", animate: "animate-pulse", delay: "0.4s" },

    // Center/Random Fillers
    { Icon: Code, top: "45%", left: "52%", size: 28, color: "text-primary-pink", opacity: "opacity-15", rotate: "rotate-12", animate: "", delay: "2.0s" },
    { Icon: Database, top: "52%", left: "48%", size: 24, color: "text-mint-green", opacity: "opacity-15", rotate: "-rotate-12", animate: "animate-pulse", delay: "1.0s" },
    { Icon: GitBranch, top: "15%", left: "35%", size: 30, color: "text-accent-yellow", opacity: "opacity-15", rotate: "-rotate-6", animate: "animate-pulse", delay: "1.5s" },
    { Icon: Code, top: "85%", left: "45%", size: 32, color: "text-accent-yellow", opacity: "opacity-25", rotate: "rotate-82", animate: "", delay: "2.5s" },
    { Icon: Hash, top: "25%", left: "82%", size: 26, color: "text-light-blue", opacity: "opacity-15", rotate: "-rotate-12", animate: "animate-pulse", delay: "0.8s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.opacity} ${item.rotate}`}
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
          }}
        >
          <item.Icon
            className={`${item.color} ${item.animate} w-full h-full`}
            style={{
              animationDelay: item.delay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
