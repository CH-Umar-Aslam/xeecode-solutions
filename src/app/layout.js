
import FooterSection from "@/pages/Home/FooterSections";
import "./globals.css";
import Navbar from "@/components/Navbar";





export const metadata = {
  title: "Xeecode Solutions",
  description: "Xeecode solutions is an information technology company having expertise in Cloud , ML ,Web , Seo , Digital Marketing , UI/UX and Sales Force  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
             <Navbar/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
