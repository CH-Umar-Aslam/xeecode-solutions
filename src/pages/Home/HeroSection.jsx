// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="py-24 bg-white">
      <Head>
        <title>How To Start Your Business</title>
        <meta name="description" content="SharePoint solutions for business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8">
            <div className="mb-2">
              <span className="text-sm uppercase tracking-wider text-[#22bab3] font-medium">
                BUSINESS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3A54] mb-6">
              How To Start<br /> Your Business
            </h1>
            <p className="text-[#555555] mb-8 max-w-lg">
              Creating bespoke SharePoint solutions for your business to manage content, collaboration and employee engagement to boost your company performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#22bab3] text-white rounded-md hover:bg-opacity-90 transition-all">
                Explore More
              </button>
              <button className="px-6 py-3 bg-white border border-[#16BBB2] text-[#555555] rounded-md hover:bg-gray-50 transition-all">
                Get in touch
              </button>
            </div>
          </div>

          {/* Right content - Illustration */}
          <div className="w-full md:w-1/2">
            <div className="relative h-80 md:h-96 lg:h-[400px]">
              <Image 
                src="/assets/herosection.svg" 
                alt="Business growth illustration" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}