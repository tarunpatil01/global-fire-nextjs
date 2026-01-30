"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Page = () => {
  const [clients, setClients] = useState([]);
  const [groupedClients, setGroupedClients] = useState({});
  const [currentLocation, setCurrentLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost/global-fire-nextjs/app/admin/adminpage/client.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched clients:", data);
        if (Array.isArray(data)) {
          setClients(data);
          groupClientsByLocation(data);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
        setErrorMessage("Failed to fetch clients. Please try again later.");
      }
    };

    const groupClientsByLocation = (clients) => {
      const grouped = clients.reduce((acc, client) => {
        const location = client.location.toLowerCase(); // Use lowercase for consistency
        if (!acc[location]) {
          acc[location] = [];
        }
        acc[location].push(client);
        return acc;
      }, {});
      setGroupedClients(grouped);
    };

    fetchClients();
  }, []);

  const handleClick = (location) => {
    setCurrentLocation(location);
  };

  return (
    <section id="clients" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Clients</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Global Fire Services, our mission is to deliver top-quality fire protection products and services that
          exceed industry standards. Committed to excellence, we prioritize the highest quality in every aspect of
          our work, ensuring safety and reliability for our customers.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our dedication to superior performance reflects the collective commitment of our entire team.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-4">
          We are proud to serve a diverse range of clients across various industries. Our commitment to excellence and customer satisfaction has earned us the trust of numerous businesses and organizations.
        </p>
      </div>

      <div className="locations-nav grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {["vashi", "nerul", "belapur", "koparkhairane", "sanpada", "seawood"].map((location) => (
          <div
            key={location}
            className={`client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300 ${currentLocation === location ? 'active' : ''}`}>
            <Image width={400} height={300} src={`/images/clients/${location}.jpg`} alt={location} className="w-full h-32 object-cover mb-4 rounded-md" />
            <button
              className="text-xl font-bold bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transform hover:scale-105 transition duration-300"
              onClick={() => handleClick(location)}
            >
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </button>
          </div>
        ))}
      </div>

      {/* Show clients only for the selected location */}
      {currentLocation && groupedClients[currentLocation] && (
        <div className="client-list mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Clients in {currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1)}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groupedClients[currentLocation].map((client, index) => (
              <div
                key={index}
                className="client-item bg-white border border-gray-300 p-5 text-center rounded-md shadow-md hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300"
              >
                <h4 className="text-xl font-bold">{client.name}</h4> {/* Display only the client's name */}
              </div>
            ))}
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 text-red-500">{errorMessage}</div>
      )}
    </section>
  );
};

export default Page;