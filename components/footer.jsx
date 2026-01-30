'use client';

import Link from 'next/link';
import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 font-space-grotesk">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Link className="flex items-center text-gray-100 no-underline" href="#">
              <lord-icon
                src="https://cdn.lordicon.com/iuqcjilb.json"
                trigger="hover"
                style={{ width: 100, height: 100 }}
              ></lord-icon>
              <h1 className="font-bold text-2xl text-red-500 ml-2">Global Fire</h1>
            </Link>
          </div>
          <p className="text-lg text-gray-400 text-center md:text-left mb-4 md:mb-0">
            Your Safety, Our Priority.
          </p>
          <div className="flex space-x-4">
            <Link className="text-gray-100 text-2xl no-underline hover:text-red-500" href="#">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link className="text-gray-100 text-2xl no-underline hover:text-red-500" href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-red-500">Services</h4>
            <ul className="list-none p-0 text-gray-400">
              <li>
                <Link href="/services" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-red-500">Company</h4>
            <ul className="list-none p-0 text-gray-400">
              <li>
                <Link href="/about" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#clients" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/admin" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          {/* column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-red-500">Support</h4>
            <ul className="list-none p-0 text-gray-400">
              <li>
                <Link href="#contact" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#documentation" className="block text-gray-100 mb-1 no-underline hover:text-red-500">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        &copy; 2024 Global Fire Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;