import Image from 'next/image';
import image1 from './Screenshot_28-9-2024_143225_.jpeg';
import image2 from './Screenshot_28-9-2024_143148_.jpeg';

const C02FireExtinguishers = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">C02 Fire Extinguishers</h2>
        <p className="text-lg text-secondary mb-4">
          Carbon dioxide trolley Carbon dioxide gives fast, safe and effective protection for fires involving electrical equipment and flammable liquids. CO2 is recognized for its non-damaging, highly effective performance in today&apos;s office environments and cleanliness. They are generally suited for indoor use, making them ideal for.
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src={image1}
            alt="C02 Fire Extinguishers"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full max-w-md"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={image2}
            alt="C02 Fire Extinguishers"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default C02FireExtinguishers;