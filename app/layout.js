import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from 'next/font/google';
import Footer from "@/components/Footer";


export const metadata = {
  title: "Anydox",
  description: "",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-cover bg-center bg-no-repeat bg-black`}     
      >
        <Header />  
        {children}
        <Footer />
      </body>
    </html>
  );
}
