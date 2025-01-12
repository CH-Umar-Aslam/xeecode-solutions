/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playball: "Playball",
        Poppins: "Poppins",
      },
      colors: {
        primary: "#22bab3",         // teal or aqua for headings
        secondary: "#0A3A54",       // Dark Blue For subheadings 
        textPrimary: "#555555",     // teal or aqua for headings
        textSecondary: "#FFFFFF",
        border: "#16BBB2",          // Soft Gray for borders or dividers
        link: "#1E88E5",            // Soft Blue for links and interactive elements
      },
  
      screens: {
        'xs': '360px',        // Small phones (iPhone SE, etc.)
        'sm': '480px',        // Phones (small screens)
        'md': '768px',        // Tablets (portrait mode)
        'lg': '1024px',       // Tablets (landscape) / Small laptops
        'xl': '1280px',       // Laptops / Desktops
        '2xl': '1536px',      // Large desktops
        '3xl': '1920px',      // 4K screens
      },
    },
  },
  plugins: [],
};