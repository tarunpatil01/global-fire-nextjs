'use client'; // For client-side interactivity

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

// Dynamically import StairTransition to ensure it only renders on the client side
const StairTransition = dynamic(() => import('./StairTransition'), { ssr: false });

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setTimeout(() => {
      router.push(link);
    }, 1400); // Duration of the animation
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <>
      {mounted && <StairTransition />}
      <header className="bg-white shadow-md fixed w-full top-0 left-0 z-20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={(e) => { e.preventDefault(); handleClick('/'); }}>
              {/* Using Image for optimized loading */}
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="mr-2"
                priority={true} // Loads this image early
              />
              <span className="text-2xl font-bold text-red-500">Global Fire</span>
            </Link>
          </div>
          <nav className="hidden md:flex relative">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="/" onClick={(e) => { e.preventDefault(); handleClick('/'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/' ? 'text-red-500' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={(e) => { e.preventDefault(); handleClick('/about'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/about' ? 'text-red-500' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={(e) => { e.preventDefault(); handleClick('/services'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/services' ? 'text-red-500' : ''}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" onClick={(e) => { e.preventDefault(); handleClick('/clients'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/clients' ? 'text-red-500' : ''}`}>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/licenses" onClick={(e) => { e.preventDefault(); handleClick('/licenses'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/licenses' ? 'text-red-500' : ''}`}>
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={(e) => { e.preventDefault(); handleClick('/contact'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/contact' ? 'text-red-500' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-red-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li>
                <Link href="/" onClick={(e) => { e.preventDefault(); handleClick('/'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/' ? 'text-red-500' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={(e) => { e.preventDefault(); handleClick('/about'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/about' ? 'text-red-500' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={(e) => { e.preventDefault(); handleClick('/services'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/services' ? 'text-red-500' : ''}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" onClick={(e) => { e.preventDefault(); handleClick('/clients'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/clients' ? 'text-red-500' : ''}`}>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/licenses" onClick={(e) => { e.preventDefault(); handleClick('/licenses'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/licenses' ? 'text-red-500' : ''}`}>
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={(e) => { e.preventDefault(); handleClick('/contact'); }} className={`text-gray-700 hover:text-red-500 ${activeLink === '/contact' ? 'text-red-500' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;