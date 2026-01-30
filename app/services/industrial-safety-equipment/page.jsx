import Image from 'next/image';
import safetyImage1 from './Screenshot_28-9-2024_143655_.jpeg';
import safetyImage2 from './Screenshot_28-9-2024_14375_.jpeg';

const IndustrialSafetyEquipment = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Industrial Safety Equipment</h2>
        <p className="text-lg text-secondary mb-4">
          Industrial safety equipment is crucial for ensuring the safety and well-being of workers in various industrial environments. This equipment includes protective gear, safety devices, and more.
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src={safetyImage1}
            alt="Industrial Safety Equipment"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={safetyImage2}
            alt="Industrial Safety Equipment"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrialSafetyEquipment;