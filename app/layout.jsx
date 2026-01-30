"use client"; // This line makes the component a Client Component


import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import "./styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import React from "react";
import dotenv from "dotenv";

dotenv.config();

const Layout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  // Array of service page paths
  const servicePaths = [
    "/services/fire-detection",
    "/services/c02-fire-extinguishers",
    "/services/fire-hydrant",
    "/services/industrial-safety-equipment",
    "/services/suppression-systems",
    "/services/fire-fighting-equipments",
    "/services/hydrant-system-material",
    "/services/detection-system-material",
  ];

  // Check if the current pathname matches any of the service pages
  const isServicesPage = servicePaths.includes(pathname);

  const WhatsAppButton = () => (
    <Link
      href="https://wa.me/7410743444?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center cursor-pointer"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-9 h-9"
        width={36}
        height={36}
        loading="lazy"
      />
    </Link>
  );

  return (
    <>
      <html lang="en">
        <Head>
          <title>Global Fire Services</title>
          <meta
            name="description"
            content="Your trusted partner for fire services"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-gray-100">
          <div>
            <Script
              src="https://cdn.lordicon.com/lordicon.js"
              strategy="afterInteractive"
            />
            <Navbar />
            {/* Conditionally render StairTransition */}
            {!isServicesPage && <StairTransition />}
            <PageTransition>{children}</PageTransition>
            {!isServicesPage && <StairTransition />}
            <Footer />
            <WhatsAppButton />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
