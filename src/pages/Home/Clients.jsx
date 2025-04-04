// components/LogoShowcase.jsx
import Image from 'next/image';

export default function Clients() {
  const logos = [
    {
      id: 1,
      name: "Art Academy",
      src: "/assets/brand1.svg",
      alt: "Art Academy logo with colorful letters"
    },
    {
      id: 2,
      name: "INTDECO",
      src: "/assets/brand2.svg",
      alt: "INTDECO logo with orange H symbol"
    },
    {
      id: 3,
      name: "Direct Decor",
      src: "/assets/brand1.svg",
      alt: "Direct Decor logo with red house icon"
    },
    {
      id: 4,
      name: "Designocracy",
      src: "/assets/brand2.svg",
      alt: "Designocracy logo with colorful shape"
    },
    {
      id: 5,
      name: "Cosmic Sports",
      src: "/assets/brand1.svg",
      alt: "Cosmic Sports logo with black circular symbol"
    }
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4">
          {logos.map((logo) => (
            <div key={logo.id} className="w-32 md:w-40 h-16 relative flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
