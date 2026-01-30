"use client"; // If you're using hooks in this file, otherwise omit it

const Page = () => {
  return (
    <section id="licenses" className=" py-36 px-6 max-w-6xl mx-auto">
      <div className="max-w-lg mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Licenses and Certifications</h2>
        <p className="text-lg text-gray-700 mb-4">
          We hold various licenses and certifications that demonstrate our commitment to quality and safety. Our team is highly trained and certified to provide the best fire protection services.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-5 pt-2 -mx-2">
        <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md text-left mx-2 mb-4">
          <h3 className="text-2xl text-red-500 mb-4">Licenses</h3>
          <ul className="licenses-list list-disc pl-5">
            <li className="py-1">A-Form Certification</li>
            <li className="py-1">B-Form Certification</li>
            <li className="py-1">Fire Audit / Fire Safety Audit</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md text-left mx-2 mb-4">
          <h3 className="text-2xl text-red-500 mb-4">Certifications</h3>
          <ul className="certifications-list list-disc pl-5">
            <li className="py-1">Diploma in Fire Engineering</li>
            <li className="py-1">Post Diploma in Fire Engineering (Mumbai University)</li>
            <li className="py-1">ADIS (Advanced Diploma in Industrial Safety)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;