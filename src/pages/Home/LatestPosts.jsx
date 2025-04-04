"use client";

import Image from "next/image";

export default function BlogSection() {
  // Featured post data
  const featuredPost = {
    id: 1,
    day: "17",
    month: "Aug",
    category: "Lifestyle",
    author: "Admin",
    comments: 0,
    image: "/assets/latestsposts.svg", // Replace with your actual image path
    title: "The Next Big Challenge for Content Marketer",
    excerpt:
      "As a process transformation company, we rethink and rebuild processes for the digital age by combining the speed and insight needed to thrive.",
  };

  // Side posts data (each now includes a thumbnail image)
  const sidePosts = [
    {
      id: 2,
      day: "17",
      month: "Aug",
      category: "Lifestyle",
      author: "Admin",
      comments: 0,
      image: "/assets/brand1.svg", // Replace with your actual image path
      title:
        "The 7 Most Beautiful Boutique Hotels in Singapore Worth Traveling",
    },
    {
      id: 3,
      day: "17",
      month: "Aug",
      category: "Design",
      author: "Admin",
      comments: 0,
      image: "/assets/brand1.svg",
      title: "How to Master the Art of Minimalist Design in 2023",
    },
    {
      id: 4,
      day: "17",
      month: "Aug",
      category: "Marketing",
      author: "Admin",
      comments: 0,
      image: "/assets/brand1.svg",
      title: "5 Strategies for Growth Marketing in Competitive Niches",
    },
    {
      id: 5,
      day: "17",
      month: "Aug",
      category: "Business",
      author: "Admin",
      comments: 0,
      image: "/assets/brand1.svg",
      title: "How to Successfully Launch a Startup in a Crowded Market",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <p className="text-center text-teal-500 font-semibold uppercase mb-2">
          Latest News
        </p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Recent blog post
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Featured Post */}
          <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       50vw"
              />
            </div>

            {/* Date Badge for Featured Post */}
            <div className="absolute top-4 left-4 bg-white p-2 rounded text-center shadow-md">
              <p className="text-xl font-bold text-teal-600 leading-tight">
                {featuredPost.day}
              </p>
              <p className="text-sm font-semibold uppercase">
                {featuredPost.month}
              </p>
            </div>

            {/* Featured Post Content */}
            <div className="p-6 bg-white">
              <p className="text-sm text-gray-500 mb-2">
                {featuredPost.category} &nbsp;•&nbsp; {featuredPost.author}{" "}
                &nbsp;•&nbsp; {featuredPost.comments} Comment
                {featuredPost.comments !== 1 ? "s" : ""}
              </p>
              <h3 className="text-xl font-semibold mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
              <button className="inline-block px-6 py-2 bg-teal-500 text-white font-semibold rounded-full shadow hover:bg-teal-600 transition">
                Read More
              </button>
            </div>
          </div>

          {/* Right: Side Posts */}
          <div className="space-y-6">
            {sidePosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
              >
                {/* Thumbnail Image with Date Badge Overlay */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 -left-1 bg-white p-1 rounded text-start shadow-md">
                    <p className="text-sm font-bold text-teal-600">{post.day}</p>
                    <p className="text-xs font-semibold uppercase">
                      {post.month}
                    </p>
                  </div>
                </div>

                {/* Post Info */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">
                    {post.category} &nbsp;•&nbsp; {post.author} &nbsp;•&nbsp;{" "}
                    {post.comments} Comment
                    {post.comments !== 1 ? "s" : ""}
                  </p>
                  <h4 className="text-sm md:text-base font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h4>
                  <button className="text-teal-500 text-xs font-semibold hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
