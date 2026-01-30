import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array of images
  // Array of images
  const slides = [
    "/images/s5.jpg",
    "/images/s1.webp",
    "/images/s2.jpg",
    "/images/s3.jpeg",
    "/images/s7.png",
    "/images/s8.jpg",
    "/images/s9.webp",
    "/images/s10.jpeg",
    "/images/s12.jpeg",
    "/images/s11.jpg",
    "/images/s13.jpg",
    "/images/s14.jpg",
    "/images/s15.png",
    "/images/s16.jpg"
  ];

  // Change slide every 4000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / 3));
    }, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(slides.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(slides.length / 3)) % Math.ceil(slides.length / 3));
  };

  return (
    <div className="relative w-full overflow-hidden md:overflow-visible">
      <div className="absolute top-16 left-0 w-full h-8  z-10 overflow-hidden md:overflow-visible"></div>
      <div className="absolute bottom-0 left-0 w-full h-8  z-10 overflow-hidden md:overflow-visible"></div>
      <div className="w-full flex transition-transform duration-500 " 
      style={{ transform: `translateX(-${currentIndex * 180 / Math.ceil(slides.length / 10)}%)` }}>
        {slides.map((image, index) => (
          
          <Image width={400} height={300}  key={index} src={image} loading="lazy" alt={`Slide ${index + 1}`} 
          className="w-full h-5/4 object-fit" />
        ))}
      </div>
      

      <button onClick={prevSlide} className="absolute left-4 top-1/2 pb-4 mt-2 px-4 text-2xl transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 z-10">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute right-1 xl:-mr-28 top-1/2 pb-4 mt-2 px-4 text-2xl transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 z-10">
        &gt;
      </button>
    </div>
  );
};

export default Slider