import Layout from '../layout';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <section id="about" className="py-36 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="max-w-lg mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-red-500 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Global Fire Services, our mission is to deliver top-quality fire protection products and services that
            exceed industry standards. Committed to excellence, we prioritize the highest quality in every aspect of
            our work, ensuring safety and reliability for our customers.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our dedication to superior performance reflects the collective commitment of our entire team.
          </p>
        </div>
        <div className="flex justify-center md:pl-12">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={390}
            height={340}
            className="mr-2"
            priority={true} // Loads this image early
          />
        </div>
      </section>
    </div>
  );
};

export default Page;