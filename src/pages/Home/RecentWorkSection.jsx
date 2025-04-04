"use client"; 
import { useState } from "react";
import Image from "next/image";
import { FaEye, FaSearch } from "react-icons/fa"; // Example icon for hover overlay

export default function RecentWorkSection() {
  // List of categories for filtering
  const categories = ["All", "Web", "Design", "Marketing", "HTML"];

  // Example project data
  const projectsData = [
    {
      id: 1,
      category: "Business Development",
      title: "Marketing Strategy",
      image: "/assets/whatwedo.svg",
    },
    {
      id: 3,
      category: "Design",
      title: "Brand Identity",
      image: "/assets/brand1.svg",
    },
    {
      id: 2,
      category: "Web",
      title: "E-commerce Website",
      image: "/assets/aboutus.svg",
    },
    {
      id: 4,
      category: "Marketing",
      title: "SEO Optimization",
      image: "/assets/brand2.svg",
    },
    {
      id: 5,
      category: "HTML",
      title: "Landing Page Redesign",
      image: "/assets/brand1.svg",
    },
    {
      id: 6,
      category: "Business Development",
      title: "New Product Launch",
      image: "/assets/brand2.svg",
    },
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtered projects based on active category
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Label and Title */}
        <p className="text-center text-gray-500 uppercase mb-2">Recent Work</p>
        <h2 className="text-center text-3xl font-bold mb-8">
          Our Latest Case Studies &amp; Projects
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center space-x-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors 
                ${
                  activeFilter === cat
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-50 shadow hover:shadow-lg transition"
            >
              {/* Project Image */}
              <div className="w-full h-64 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="text-white text-2xl">
                  <FaEye />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <p className="text-teal-500 uppercase text-sm mb-1">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
