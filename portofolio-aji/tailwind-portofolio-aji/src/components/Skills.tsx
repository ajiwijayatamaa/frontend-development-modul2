import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode; // Menggunakan ReactNode agar bisa menerima komponen JSX
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML5", icon: <FaHtml5 />, color: "hover:text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "hover:text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "hover:text-yellow-400" },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "hover:text-blue-600",
    },
    { name: "React", icon: <FaReact />, color: "hover:text-cyan-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-sky-400" },
    { name: "Node JS", icon: <FaNodeJs />, color: "hover:text-green-500" },
  ];

  return (
    <section id="skills" className="bg-black px-6 py-24 text-center text-white">
      <h2 className="mb-12 text-2xl font-semibold tracking-widest text-gray-400 uppercase">
        My Tech Stack
      </h2>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex cursor-default items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 transition-all duration-500 hover:border-current hover:bg-black"
          >
            <span
              className={`text-2xl transition-all duration-300 ${skill.color}`}
            >
              {skill.icon}
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
