import Image from 'next/image';
import fireHydrantImage from './Screenshot_28-9-2024_143625_.jpeg';

const FireHydrant = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Fire Hydrant</h2>
        <p className="text-lg text-secondary mb-4">
          Fire hydrants are essential for providing a reliable source of water for firefighting purposes. They are strategically placed to ensure quick access in case of a fire emergency.
        </p>
        <div className="flex justify-center">
          <Image
            src={fireHydrantImage}
            alt="Fire Hydrant"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FireHydrant;