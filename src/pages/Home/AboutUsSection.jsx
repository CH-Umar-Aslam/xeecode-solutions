// components/AboutUsSection.jsx
import Image from 'next/image';

export default function AboutUsSection() {
  const businessValues = [
    {
      id: 1,
      title: "Boost Your Business",
      description: "When it comes to sustainability and corporate responsibility, we take the internal role of business."
    },
    {
      id: 2,
      title: "Filtering Business Data",
      description: "The industry has recognized us for our consistent endeavors to provide analytical transformational solutions."
    },
    {
      id: 3,
      title: "Boost Your Business",
      description: "When it comes to sustainability and corporate responsibility, we take the internal role of business."
    },
    {
      id: 4,
      title: "Filtering Business Data",
      description: "The industry has recognized us for our consistent endeavors to provide analytical transformational solutions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm uppercase tracking-wider text-[#22bab3] font-medium">
            ABOUT US
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-80 md:h-96 lg:h-[400px]">
              <Image 
                src="/assets/aboutus.svg" 
                alt="Team of creative professionals working together" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3A54] mb-6">
              We are a dynamic team of creative people of innovation & marketing
            </h2>
            
            <p className="text-[#555555] mb-8">
              As a process transformation company, we rethink and rebuild processes for the digital age by combining the visual and logical of design thinking with the scale and accuracy of data analytics. We rethink the process and work together to streamline, build it, and deliver it.
            </p>
            
            {/* Business values grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessValues.map((value) => (
                <div key={value.id} className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-[#0A3A54] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#555555]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
