import React from 'react';

const services = [
  "ABC Type Fire Extinguisher",
  "CO2 Type Fire Extinguisher",
  "Hydrant Lungs",
  "Courtyard Hydrant",
  "Siamese Connection: Two Way, 4 Way",
  "Booster Pump",
  "Main Pump",
  "Hose Reel",
  "Canvas Pipe",
  "Hose Reel Drum",
  "Branch Pipe",
  "Pressure Gauge",
  "C.I. Class Pipe - Dia 150 mm, Dia 100 mm, Dia 80 mm",
  "Ball Valve",
  "Flange",
  "Butterfly Valve",
  "Hose Box (Single/Double Door)"
];

const Page = () => {
  return (
    <div className="mt-20 p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Our Fire Services</h1>
      <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <li key={index}>
            <button className="w-full py-3 px-4 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all">
              {service}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
