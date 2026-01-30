"use client";

import { useState } from 'react';
import Link from 'next/link';

const services = {
  fireDetection: [
    { num: "01", title: "Fire Detection", description: "Fire detection systems to ensure early warning and safety.", href: "/services/fire-detection" },
  ],
  fireExtinguishers: [
    { num: "01", title: "C02 Fire Extinguishers", description: "Reliable CO2 fire extinguishers for various fire types.", href: "/services/c02-fire-extinguishers" },
  ],
  fireHydrant: [
    { num: "01", title: "Fire Hydrant", description: "Robust fire hydrant systems for effective fire fighting.", href: "/services/fire-hydrant" },
  ],
  suppressionSystems: [
    { num: "01", title: "Suppression Systems", description: "Advanced fire suppression systems for various applications.", href: "/services/suppression-systems" },
  ],
  industrialSafety: [
    { num: "01", title: "Industrial Safety Equipment", description: "Comprehensive safety equipment for industrial applications.", href: "/services/industrial-safety-equipment" },
  ],
  installation: [
    { num: "01", title: "Installation Services", description: "Professional installation services for fire safety systems.", href: "/services/installation-services" },
  ],
  detectionSystem: [
    { num: "01", title: "Detection System", description: "Advanced detection systems for early fire warning and safety.", href: "/services/detection-system" },
  ],
  c02FireExtinguishers: [
    { num: "01", title: "C02 Fire Extinguishers", description: "Reliable CO2 fire extinguishers for various fire types.", href: "/services/c02-fire-extinguishers" },
  ],
  industrialSafetyEquipment: [
    { num: "01", title: "Industrial Safety Equipment", description: "Comprehensive safety equipment for industrial applications.", href: "/services/industrial-safety-equipment" },
  ],
  fireAlarmSystem: [
    { num: "01", title: "Fire Alarm System", description: "Integrated fire alarm systems for  complete protection.", href: "/services/fire-detection" },
  ],
  sprinklerSystems: [
    { num: "01", title: "Sprinkler Systems", description: "Efficient sprinkler systems for fire suppression.", href: "/services/suppression-systems" },
  ],
};

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getServices = (category) => {
    return services[category] || [];
  };

  const filteredServices = Object.values(services).flat().filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Services</h2>
        <div className="relative flex items-center justify-center mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search services..."
            className="rounded-l-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="text-lg text-secondary mb-4">
          Global Fire Services offers a comprehensive range of solutions for fire and safety needs.
        </p>
      </div>

      <div className="locations-nav grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="client-item items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={service.href} scroll={false}>
              <button
                className={`text-xl font-bold bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transform hover:scale-105 transition duration-300 w-full ${hoveredIndex === index ? 'shadow-lg' : ''}`}
              >
                {service.title}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;