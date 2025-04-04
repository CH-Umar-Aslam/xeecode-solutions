"use client";

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function OurTeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "John Wick",
      role: "Product Designer",
      image: "/assets/bari.png",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "UX Developer",
      image: "/assets/bari.png",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Sam Smith",
      role: "Frontend Engineer",
      image: "/assets/bari.png",
      socialLinks: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    // ... (other members)
  ];

  return (
    <section className="py-16 w-full bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary text-3xl font-bold mb-2">Our Team</h2>
        <h3 className="text-center text-xl text-gray-600 mb-10">
          Meet Our Talented Team Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              <div
                className="relative rounded-xl overflow-hidden transition-transform duration-300 transform bg-white shadow-lg flex flex-col items-center p-6 group-hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-gray-100">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Image of ${member.name}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <h4 className="text-xl font-semibold text-center">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-center mb-4">{member.role}</p>

                <div
                  className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-sm"
                >
                  <div className="flex space-x-4">
                    {member.socialLinks.facebook && (
                      <a
                        href={member.socialLinks.facebook}
                        className="bg-white p-3 rounded-full transition-colors hover:bg-blue-600 hover:text-white"
                        aria-label={`${member.name}'s Facebook`}
                      >
                        <FaFacebook size={20} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="bg-white p-3 rounded-full transition-colors hover:bg-blue-700 hover:text-white"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        className="bg-white p-3 rounded-full transition-colors hover:bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white"
                        aria-label={`${member.name}'s Instagram`}
                      >
                        <FaInstagram size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
