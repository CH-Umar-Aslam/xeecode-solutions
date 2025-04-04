"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  FaCogs,
  FaCloud,
  FaBrain,
  FaAndroid,
  FaSearch,
  FaDesktop,
  FaBullhorn,
  FaChartLine,
  FaChevronDown,
} from "react-icons/fa"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const services = [
    {
      icon: FaCogs,
      title: "Salesforce",
      description: "CRM solutions that connect with your business needs.",
    },
    {
      icon: FaCloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure for modern businesses.",
    },
    {
      icon: FaBrain,
      title: "Machine Learning",
      description:
        "Cutting-edge machine learning solutions for data-driven decisions.",
    },
    {
      icon: FaDesktop,
      title: "UI/UX Design",
      description:
        "Creating seamless user experiences and intuitive interfaces.",
    },
    {
      icon: FaDesktop,
      title: "Web Development",
      description:
        "Custom web applications to scale your business and engage users.",
    },
    {
      icon: FaAndroid,
      title: "Android Development",
      description:
        "High-performance Android apps designed to meet business needs.",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
      description:
        "Reach your audience with strategic and effective digital campaigns.",
    },
    {
      icon: FaSearch,
      title: "SEO",
      description:
        "Enhance your online visibility and attract more organic traffic.",
    },
    {
      icon: FaChartLine,
      title: "Business Analysis",
      description: "Data-driven insights to optimize your business strategies.",
    },
  ];

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    setIsMenuOpen(false);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const dropdownRef = useRef(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white  sm:px-8 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className=" flex items-center justify-between mx-auto p-4">
        {/* Desktop Menu */}
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero-section");
          }}
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center md:w-36 w-28  font-Mon font-thin text-3xl whitespace-nowrap text-primary">
           <img src="/assets/LOGO.svg" />
          </span>
        </Link>
        <div className="hidden lg:flex items-center justify-center flex-grow space-x-8">
          <Link
            ref={dropdownRef}
            href="#"
            onMouseEnter={(e) => {
              e.preventDefault();
              setToggleDropdown(true);
            }}
            className="block py-2 px-3 font-semibold text-secondary rounded hover:text-textSecondary hover:bg-primary text-left"
          >
            Services
          </Link>
          <div
            ref={dropdownRef}
            className={`
                        absolute 
                        top-4
                        min-w-[800px] 
                        mt-2
                        p-4
                        bg-secondary 
                        text-textSecondary
                        rounded-lg 
                        shadow-xl
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                          toggleDropdown
                            ? "translate-y-12 opacity-100 visible"
                            : "translate-y-0 opacity-0 invisible"
                        }
                          `}
          >
            <div className="px-6 py-4 grid grid-cols-3 gap-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaCogs className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Salesforce
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        CRM solutions that connect with your business needs.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group  transition duration-200 ease-in-out"
                  >
                    <FaCloud className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Cloud Computing
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Scalable cloud infrastructure for modern businesses.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaBrain className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Machine Learning
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Cutting-edge machine learning solutions for data-driven
                        decisions.
                      </span>
                    </div>
                  </a>
                </li>

                {/* <li>
                        <a
                          href="#"
                          className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                        >
                          <FaChartLine className="mr-3 text-2xl" />
                          <div>
                            <div className="heading font-semibold group-hover:text-secondary ">
                              Automation & Web Scraping
                            </div>
                            <span className="description text-sm text-gray-300 group-hover:text-secondary">
                              Automate repetitive tasks and extract  valuable
                              data from the web seamlessly.
                            </span>
                          </div>
                        </a>
                      </li> */}
              </ul>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaDesktop className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        UI/UX Design
                      </div>
                      <span className="description text-sm text-gray-300">
                        Creating seamless user experiences and intuitive
                        interfaces.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaDesktop className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Web Development
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Custom web applications to scale your business and
                        engage users.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaAndroid className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Android Development
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        High-performance Android apps designed to meet business
                        needs.
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaBullhorn className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Digital Marketing
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Reach your audience with strategic and effective digital
                        campaigns.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaSearch className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        SEO
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Enhance your online visibility and attract more organic
                        traffic.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                  >
                    <FaChartLine className="mr-3 text-2xl" />
                    <div>
                      <div className="heading font-semibold group-hover:text-secondary ">
                        Business Analysis
                      </div>
                      <span className="description text-sm text-gray-300 group-hover:text-secondary">
                        Data-driven insights to optimize your business
                        strategies.
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("testimonials");
            }}
            href="#"
            className="block py-2 px-3 font-semibold text-gray-800 rounded hover:bg-primary hover:text-textSecondary"
          >
            Our Work
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("testimonials");
            }}
            href="#"
            className="block py-2 px-3 font-semibold text-gray-800 rounded hover:bg-primary hover:text-textSecondary"
          >
            Blogs
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
            href="#"
            className="block py-2 px-3 font-semibold text-gray-800 rounded hover:bg-primary hover:text-textSecondary"
          >
            About
          </Link>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("footer");
            }}
            href="#"
            className="block py-2 px-3 font-semibold text-gray-800 rounded hover:bg-primary hover:text-textSecondary"
          >
            Career
          </Link>

          {/* Book Now Button on the right */}
        </div>
        <div>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            href="#"
          >
            <button
              type="button"
              className="hidden lg:block bg-primary hover:secondary text-textSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Contact Us
            </button>
          </Link>

          {/* Hamburger button for mobile */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div />
      {/* Mobile Menu */}
      <div
        className={`fixed w-screen inset-0 z-10 bg-primary transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col items-start  space-y-2">
          <div className="flex justify-between w-full border-b p-4 border-gray-50">
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero-section");
              }}
              href="#"
              className="text-2xl font-Mon font-thin text-textSecondary "
            >
              Xeecode Solutions
            </Link>
        
            <button onClick={toggleMenu} className="text-gray-100 rounded p-2">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative w-full ">
            <div
              className="flex "
              onClick={(e) => {
                e.preventDefault();
                setToggleDropdown(!toggleDropdown);
              }}
            >
              <p className="flex items-center gap-3 py-2 px-3 font-medium text-white rounded hover:secondary w-full ">
                Services  <FaChevronDown className="mr-20 w-5 h-5 text-gray-100 group-hover:text-secondary" />
              </p>
              
             
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`
          fixed 
          inset-x-0 
          top-28
          mx-2
          rounded-lg 
          bg-secondary 
          shadow-xl 
          transition-all 
          duration-300 
          ease-in-out 
          overflow-y-auto 
          max-h-[80vh]
          ${
            toggleDropdown
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-4 opacity-0 invisible"
          }
        `}
            >
              <div className="p-4 py-8">
                <ul className="relative">
                    <button   className="absolute right-0 -top-5 text-primary font-medium">
                    <svg onClick={()=>setToggleDropdown(false)}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
                    </button>
                   
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center  p-3 rounded-lg hover:bg-primary group transition duration-200 ease-in-out"
                      >
                        <service.icon className="mr-3 text-textSecondary text-xl flex-shrink-0" />
                        <div className="flex-1 group">
                          <div className="heading font-semibold text-primary group-hover:text-secondary">
                          {  service.title }
                          </div>
                          <span className="description text-sm  text-gray-300 group-hover:text-secondary block">
                            {service.description}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("services");
            }}
            href="#"
            className="block py-2 px-3 font-medium text-textSecondary rounded hover:secondary w-full text-left"
          >
            Our Work
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("testimonials");
            }}
            href="#"
            className="block py-2 px-3 font-medium text-textSecondary rounded hover:secondary w-full text-left"
          >
            Blogs
          </Link>

          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("footer");
            }}
            href="#"
            className="block py-2 px-3 font-medium text-textSecondary rounded hover:secondary w-full text-left"
          >
            About
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              scrollTo("footer");
            }}
            href="#"
            className="block py-2 px-3 font-medium text-textSecondary rounded hover:secondary w-full text-left"
          >
            Career
          </Link>
          <Link
            className="w-full"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            <button
              type="button"
              className="border-2  border-textSecondary  font-semibold   hover:secondary focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 w-full text-center text-textSecondary"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
