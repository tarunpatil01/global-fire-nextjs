import Image from 'next/image';
import suppressionImage from './Screenshot_28-9-2024_143640_.jpeg';

const SuppressionSystems = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Suppression Systems</h2>
        <p className="text-lg text-secondary mb-4">
          Suppression systems are designed to extinguish or prevent the spread of fire in a building or area. They are essential for protecting lives and property.
        </p>
        <div className="flex justify-center">
          <Image
            src={suppressionImage}
            alt="Suppression Systems"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SuppressionSystems;