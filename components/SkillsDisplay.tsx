const skills = [
  { category: "Soft Skills", items: ["Teamwork", "Adaptive", "Communication", "Crtitical Thinking", "Problem Solving"] },
  { category: "Hard Skills", items: ["Python Programming", "Prompt Engineering", "AI Agent", "REST API"] },
  { category: "Languages", items: ["Bahasa Indonesia", "English"] },
  { category: "Tools", items: ["Python", "SQL", "Git", "n8n"] },
  { category: "Frameworks", items: ["Pandas", "Matplotlib", "Langchain", "Strands Agent", "FastAPI", "Pytorch", "Scikit-learn", "TensorFlow"] },
];

export default function SkillsDisplay() {
  return (
    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
      {skills.map((skillGroup) => (
        <div 
          key={skillGroup.category} 
          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)] bg-white p-6 rounded-2xl border-l-2 border-t-2 shadow-[6px_6px_0_0_theme('colors.primary-pink')]"
        >
          <h3 className="text-xl font-bold text-text-dark mb-4 border-b border-gray-100 pb-2 flex items-center">
            {skillGroup.category}
          </h3>
          <ul className="grid grid-rows-[repeat(5,min-content)] grid-flow-col gap-x-8 gap-y-2">
            {skillGroup.items.map((item) => (
              <li key={item} className="flex items-center text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-pink mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
