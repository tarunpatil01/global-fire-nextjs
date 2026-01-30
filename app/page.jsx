"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from "../components/slider";
import Image from "next/image";
import ReactDOM from "react-dom";
import dotenv from "dotenv";

dotenv.config();

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");
  const nodeRef = useRef(null); // Create a ref to access the node

  useEffect(() => {
    setMounted(true);
    // Add any other initialization logic here
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const handleClick = (locationId) => {
    setCurrentLocation(locationId);
    // Add any other click handling logic here
  };

  return (
    <div ref={nodeRef} id="root" className="container w-full">
      <Slider />
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to Global Fire Services
          </h1>
          <p className="text-lg text-secondary mb-4">
            Your safety is our priority. We provide top-notch fire protection
            services that keep your business and home secure. From installation
            to maintenance, we have the expertise to handle all your fire safety
            needs.
          </p>
          <p className="text-lg text-secondary mb-4">
            With years of experience in the industry, we guarantee quality
            service and peace of mind. Trust us to protect what matters most to
            you.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              href="/services"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transform hover:scale-105 transition-transform"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transform hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <Image
            src="/images/homepage.avif"
            alt="Fire safety professional inspecting equipment"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </section>

      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row mb-4 gap-12">
          <div className="relative ">
            <h2 className="text-4xl font-bold text-primary mb-8">
              Our Services
            </h2>

            <p className="text-lg text-secondary mb-4">
              Global Fire Services offers a comprehensive range of solutions for
              fire and safety needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our fire fighting equipment includes advanced fire detection
              systems, fire extinguishers, hydrants, and suppression systems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We provide essential safety gear such as industrial safety
              equipment, first aid kits, and fire blankets. Our expertise
              extends to fire training, engineering, and full-service
              installation and maintenance of all fire systems.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transform hover:scale-105 transition-transform"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-secondary-700 mb-4">
              Global Fire Services offers a comprehensive range of solutions for
              fire and safety needs.
            </p>
            <p className="text-lg text-secondary-700 mb-4">
              Our fire fighting equipment includes advanced fire detection
              systems, fire extinguishers, hydrants, and suppression systems.
            </p>
            <p className="text-lg text-secondary-700 mb-4">
              We provide essential safety gear such as industrial safety
              equipment, first aid kits, and fire blankets. Our expertise
              extends to fire training, engineering, and full-service
              installation and maintenance of all fire systems.
            </p>
          </div>
        </div>
      </section>

      <section id="clients" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Our Clients</h2>
          <p className="text-lg text-secondary mb-4">
            We are proud to serve a diverse range of clients across various
            industries. Our commitment to excellence and customer satisfaction
            has earned us the trust of numerous businesses and organizations.
          </p>
        </div>

        <div className="locations-nav grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {[
            "vashi",
            "nerul",
            "belapur",
            "koparkhairane",
            "sanpada",
            "seawood",
          ].map((location) => (
            <div
              key={location}
              className={`client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300 ${
                currentLocation === location ? "active" : ""
              }`}
            >
              <Image
                width={400}
                height={300}
                src={`/images/clients/${location}.jpg`}
                alt={location}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <button
                className="text-xl font-bold bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transform hover:scale-105 transition duration-300"
                onClick={() => handleClick(location)}
              >
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </button>
            </div>
          ))}
        </div>

        {currentLocation === "vashi" && (
          <div className="client-list mt-8" id="vashi">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Vashi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Cyberone Premises</h4>
                <p className="text-gray-600">
                  Co-op Society Ltd, Plot 4 & 6, Sector 30A
                </p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Real Tech Park CHS</h4>
                <p className="text-gray-600">Plot 39/2, Sector 30A</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Gokul Dairy </h4>
                <p className="text-gray-600">Sector 18</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Silicon Tower</h4>
                <p className="text-gray-600">Sector 8</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Kiusum Tower</h4>
                <p className="text-gray-600">Sector 17</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Hotel Yogi Executive</h4>
                <p className="text-gray-600">Sector 24</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Hotel Kings Inn, Plot 004</h4>
                <p className="text-gray-600">Sector 19A</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">R.N. Patil Hospital</h4>
                <p className="text-gray-600">Sector 10</p>
              </div>
            </div>
          </div>
        )}

        {currentLocation === "nerul" && (
          <div className="client-list mt-8" id="nerul">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Nerul
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Wadhwa CHS</h4>
                <p className="text-gray-600">Plot 24-29, Sector 4</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">NRI CHS</h4>
                <p className="text-gray-600">Phase II, Sector 54-58</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Milloni CHS</h4>
                <p className="text-gray-600">Sector 27</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Hawre Mall</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Amruta Vidyalaya</h4>
                <p className="text-gray-600">Plot 4, Sector 25</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Shri Vardhav Vinayak Gas</h4>
                <p className="text-gray-600">Plot 02, Sector 25</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Punit Park 2</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Green Valley CHS</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Sterling College</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Jimmy 2</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Alak CHS</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Bhimashankar CHS</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Maitri Tower</h4>
                <p className="text-gray-600">Sector 25</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Ashirwad Hospital</h4>
                <p className="text-gray-600">Plot 716, Sector 1</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Palm Beech Society</h4>
                <p className="text-gray-600">Sector 42</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Woodland CHS</h4>
                <p className="text-gray-600">Sector 6</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Akashganga CHS</h4>
                <p className="text-gray-600">Sector 21</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Lenyadri CHS</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Seawood Hospital</h4>
                <p className="text-gray-600">Sector 48</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Suyesh Hospital</h4>
                <p className="text-gray-600">Sector 40</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Shreyas Parimal CHS</h4>
                <p className="text-gray-600">Sector 25</p>
              </div>
            </div>
          </div>
        )}

        {currentLocation === "belapur CBD" && (
          <div className="client-list mt-8" id="cbd">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Belapur CBD
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Angad 2</h4>
                <p className="text-gray-600">Sector 8A</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Punit Tower</h4>
                <p className="text-gray-600">Sector 11</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Shankutla Tower</h4>
                <p className="text-gray-600">Sector 1A</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Swarna Anand</h4>
                <p className="text-gray-600">Sector 8</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Mermaid Tower</h4>
                <p className="text-gray-600">Sector 11</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Kukreja Plaza CHS</h4>
                <p className="text-gray-600">Sector 11</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Maruti Tower</h4>
                <p className="text-gray-600">Sector 11</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Park Hotel</h4>
                <p className="text-gray-600">Sector 10</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Sai Vihar</h4>
                <p className="text-gray-600">Sector 15</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Cosmopolitan Tower</h4>
                <p className="text-gray-600">Sector 19</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Arenja Tower 2</h4>
                <p className="text-gray-600">Sector 15</p>
              </div>
            </div>
          </div>
        )}

        {currentLocation === "koparkhairane" && (
          <div className="client-list mt-8" id="koparkhairane">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Koparkhairane
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">FAM CHS</h4>
                <p className="text-gray-600">Plot 2, Sector 2</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">
                  New Bombay City High School
                </h4>
                <p className="text-gray-600">Plot 8, Sector 9</p>
              </div>
            </div>
          </div>
        )}

        {currentLocation === "sanpada" && (
          <div className="client-list mt-8" id="sanpada">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Sanpada
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Millennium Hospital</h4>
                <p className="text-gray-600">Plot 1, Sector 10</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Western College</h4>
                <p className="text-gray-600">Sector 10</p>
              </div>
            </div>
          </div>
        )}

        {currentLocation === "seawood" && (
          <div className="client-list mt-8" id="seawood">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clients in Seawood
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Shativaibhav CHS</h4>
                <p className="text-gray-600">Sector 40</p>
              </div>
              <div className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
                <h4 className="text-xl font-bold">Suyesh Hospital</h4>
                <p className="text-gray-600">Sector 40</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section
        id="certifications"
        className="flex flex-col md:flex-col lg:flex-row py-24 px-6 max-w-6xl mx-auto gap-5"
      >
        <div className="max-w-lg mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Licenses and Certifications
          </h2>
          <p className="text-lg text-secondary mb-4">
            We hold various licenses and certifications that demonstrate our
            commitment to quality and safety. Our team is highly trained and
            certified to provide the best fire protection services.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-2/3 bg-white p-5 rounded-lg shadow-md text-left mx-2 mb-4">
            <h3 className="text-2xl text-red-500 mb-4">Licenses</h3>
            <ul className="licenses-list list-disc pl-5">
              <li className="py-1">A-Form Certification</li>
              <li className="py-1">B-Form Certification</li>
              <li className="py-1">Fire Audit / Fire Safety Audit</li>
            </ul>
          </div>

          <div className="w-full md:w-2/3 bg-white p-5 rounded-lg shadow-md text-left mx-2 mb-4">
            <h3 className="text-2xl text-red-500 mb-4">Certifications</h3>
            <ul className="certifications-list list-disc pl-5">
              <li className="py-1">Diploma in Fire Engineering</li>
              <li className="py-1">
                Post Diploma in Fire Engineering (Mumbai University)
              </li>
              <li className="py-1">
                ADIS (Advanced Diploma in Industrial Safety)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col md:flex-row justify-center gap-x-10 py-20 p-6 max-w-6xl mx-auto"
      >
        <div className="max-w-6xl w-full md:w-1/2 lg:w-1/3 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Contact Us</h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transform hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0 bg-[#f5f5f5] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Address:</h3>
          <p className="text-lg text-gray-700 mb-2">
            Office No. 303, Guru Atman Society, Plot no. 23,
          </p>
          <p className="text-lg text-gray-700 mb-2">Sector-17, Ulwe,</p>
          <p className="text-lg text-gray-700 mb-2">
            Navi Mumbai Panvel-410206
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Email:{" "}
            <Link
              href="mailto:global25fireservices@gmail.com"
              className="text-red-500 hover:underline"
            >
              global25fireservices@gmail.com
            </Link>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Phone:{" "}
            <Link
              href="tel:+919987918077"
              className="text-red-500 hover:underline"
            >
              +91 99879 18077
            </Link>
          </p>
        </div>
      </section>

      <section
        id="follow-us"
        className="py-24 px-6 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-2xl font-bold text-red-500 mb-4">Follow Us</h3>
        <div className="flex  justify-center md:space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="social-icon facebook mb-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/mpigogwa.json"
              trigger="hover"
              stroke="light"
              style={{ width: 80, height: 80 }}
              className="md:w-32 md:h-32"
            ></lord-icon>
          </Link>
          <Link
            href="https://wa.me/7410743444?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            aria-label="WhatsApp"
            className="social-icon whatsapp mb-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/pvwuzuvc.json"
              trigger="hover"
              stroke="light"
              style={{ width: 80, height: 80 }}
              className="md:w-24 md:h-24"
            ></lord-icon>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="social-icon instagram mb-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/nnfbxwtf.json"
              trigger="hover"
              style={{ width: 80, height: 80 }}
              className="md:w-24 md:h-24"
            />
          </Link>
          <Link
            href="https://mail.google.com"
            target="_blank"
            aria-label="Gmail"
            className="social-icon gmail mb-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/nqisoomz.json"
              trigger="hover"
              stroke="light"
              style={{ width: 80, height: 80 }}
              className="md:w-24 md:h-24"
            ></lord-icon>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
