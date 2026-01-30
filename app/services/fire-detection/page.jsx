import Image from 'next/image';
import fireDetectionImage from './Screenshot_28-9-2024_14613_.jpeg';

const FireDetection = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Fire Detection</h2>
        <p className="text-lg text-secondary mb-4">
          Detection System, Sprinkler, Smoke Detector, Sounder, Fire Alarm. A system of sensors and associated interconnected equipment which detects the presence of fire and provides a warning signal.
        </p>
        <div className="flex justify-center">
          <Image
            src={fireDetectionImage}
            alt="Fire Detection System"
            width={600}
            height={400}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FireDetection;