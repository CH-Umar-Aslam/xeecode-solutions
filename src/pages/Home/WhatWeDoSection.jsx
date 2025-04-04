import Image from 'next/image';
import { FiTrendingUp, FiGlobe, FiPenTool, FiFileText } from 'react-icons/fi';

export default function WhatWeDoSection() {
  const services = [
    {
      id: 1,
      title: "SEO",
      description: "We help financial institutions, from banking and insurance to wealth.",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Web Development",
      description: "Our firm has helped clients engaged in more than 100 different.",
      icon: <FiGlobe className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Graphic Designing",
      description: "We create visually appealing designs tailored to your brand.",
      icon: <FiPenTool className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Content Writing",
      description: "We provide high-quality content that engages and converts.",
      icon: <FiFileText className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-[#f0fafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-[#22bab3] font-medium">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3A54] mt-2">
            We provide a wide range of<br />business services
          </h2>
        </div>
        
        {/* Services layout */}
        <div className="flex flex-col md:flex-row justify-center items-start relative">
          {/* Left column */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
            {services.slice(0, 2).map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col items-center mb-12"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-[#22bab3]">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0A3A54] mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555555] text-center max-w-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center illustration */}
          <div className="w-64 h-64 md:w-80 mx-auto md:h-80 bg-[#d7f3f1] rounded-full flex items-center justify-center z-0 mb-8 md:mb-0">
            <div className="relative w-48 h-48  md:w-64 md:h-64">
              <Image
                src="/assets/whatwedo.svg"
                alt="Business meeting illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:ml-8">
            {services.slice(2).map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col items-center mb-12"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-[#22bab3]">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0A3A54] mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555555] text-center max-w-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* View all services button */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 border border-[#16BBB2] text-[#0A3A54] rounded-md hover:bg-[#16BBB2] hover:text-white transition-all">
            View All Our Services
          </button>
        </div>
      </div>
    </section>
  );
}