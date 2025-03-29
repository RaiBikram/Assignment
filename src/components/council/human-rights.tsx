
import Image from 'next/image';

const HumanRightsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start p-10 bg-gradient-to-r from-white to-blue-100">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900">
          Human Rights, <br /> Peace and Security <br />
          <span className="text-blue-500">Council</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Arcu tincidunt dui turpis in id.
          A sit cras purus quam scelerisque. Duis at vivamus morbi tristique. 
          Viverra imperdiet nisl tincidunt sed ultrices augue aliquet in.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-wrap justify-center gap-4 mt-6 md:mt-0 relative">
        <div className="relative w-40 h-40 md:w-52 md:h-52">
          <Image src="/humans-rights.png" alt="Humans Rights" layout="fill" className="rounded-lg shadow-lg" />
        </div>
        <div className="relative w-32 h-32 md:w-40 md:h-40 -mt-10 ml-10">
          <Image src="/peace-day.png" alt="Peace Day" layout="fill" className="rounded-lg shadow-lg" />
        </div>
        <div className="relative w-36 h-24 md:w-44 md:h-28 -mt-10">
          <Image src="/world-map.png" alt="World Map" layout="fill" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HumanRightsSection;
