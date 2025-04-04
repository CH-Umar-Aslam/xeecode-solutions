"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Robert Smith",
      role: "CEO at Example Inc.",
      avatar: "/assets/user.svg", // Replace with your actual image path
      rating: 5,
      comment:
        "Absolutely fantastic! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, nisi.",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Marketing Director",
      avatar: "/assets/user.svg", // Replace with your actual image path
      rating: 5,
      comment:
        "I was blown away by the quality of service. Highly recommended!",
    },
    {
      id: 3,
      name: "Sam Wilson",
      role: "Business Owner",
      avatar: "/assets/user.svg", // Replace with your actual image path
      rating: 4,
      comment:
        "Great experience overall. Will definitely use their services again!",
    },
  ];

  // Current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to shift testimonial to the previous
  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Helper to shift testimonial to the next
  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Current testimonial data
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-teal-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <p className="text-center text-teal-600 uppercase mb-2 text-sm font-semibold tracking-wider">
          Testimonials
        </p>
        <h2 className="text-center text-3xl font-bold md:mb-12 mb-14">
          We provide wide range of business services
        </h2>

        {/* Content Row: Illustration + Testimonial Card */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Illustration */}
          <div className="flex-1 md:block hidden max-w-sm mx-auto mb-6 lg:mb-0">
            {/* Replace src with your actual illustration */}
            <Image
              src="/assets/testimonials.svg"
              alt="Business Illustration"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          {/* Testimonial Card + Navigation */}
          <div className="flex-1 max-w-xl mx-auto relative">
            {/* Prev Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-teal-500 hover:text-white transition"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-teal-500 hover:text-white transition"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

            {/* Testimonial Card */}
            <div className=" flex mt-12  flex-col bg-secondary justify-start rounded-lg shadow p-6 text-center transition-all">
              {/* Avatar */}
              <div className="absolute  -top-9 left-[35%]  md:left-[42%] w-24 h-24  mx-auto ">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl text-white font-semibold mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-gray-200 text-sm mb-3">
                {currentTestimonial.role}
              </p>

              {/* Rating (Stars) */}
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-white">{currentTestimonial.comment}</p>
            </div>
          </div>
        </div>

        {/* "Book a Call" Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
