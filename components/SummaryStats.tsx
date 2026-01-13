import React from 'react';

const stats = [
  { value: "7", label: "Projects" },
  { value: "491", label: "Git Contributions in Last Year" },
  { value: "5.3h", label: "Daily Avg. Coding Hours" },
  { value: "3", label: "Companies Contributed To" },
  { value: "1+ Year", label: "Working Experience" },
  { value: "B.Sc.", label: "in Computer Science" }
];

export default function SummaryStats() {
  const StatItem = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col items-center justify-center w-full sm:w-auto sm:min-w-[200px]">
      <span className="text-4xl md:text-6xl font-normal text-gray-700 mb-3 font-light">
        {value}
      </span>
      <span className="text-gray-500 text-sm md:text-base font-light">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-y-6 gap-x-8 md:gap-y-10 md:gap-x-18 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}
