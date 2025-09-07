import {
  FaHandHoldingHeart,
  FaUserShield,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";

export default function MissionStatement() {
  return (
    <section className="font-sans container xl:min-h-[90vh] mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-8 py-20 bg-white px-4 md:px-8 mt-16">
      {/* Text Section */}
      <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left z-10">
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">Our Mission</h2>
        <hr className="border-t border border-gray-300 my-4 w-2/3" />
        <blockquote className="text-xl md:text-3xl lg:text-2xl  text-gray-900 mb-6 leading-snug">
          Our mission is to provide{" "}
          <span className="text-blue-700 ">compassionate</span>, high-quality
          healthcare to every patient, ensuring{" "}
          <span className="text-emerald-600 ">wellness</span> and comfort at
          every step.
        </blockquote>

        {/* Vision Statement */}
        <p className="italic text-lg md:text-xl lg:text-lg text-gray-700 mb-8">
          &quot;To be the leading community healthcare provider recognized for{" "}
          <span className="text-blue-700 font-semibold">innovation</span> and
          patient-centered care.&quot;
        </p>

        {/* Key Values */}
        <div className=" lg:w-[100%] flex flex-wrap justify-center lg:justify-start lg:space-y-2 xl:space-y-0 gap-6 mb-8 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-center w-36 lg:w-44 xl:w-40">
            <FaHandHoldingHeart className="text-2xl text-pink-500 mb-2" />
            <span className=" text-pink-500 font-semibold">
              Compassion & Care
            </span>
          </div>
          <div className="flex flex-col items-center w-36 lg:w-44 xl:w-40">
            <FaUserShield className="text-2xl text-blue-600 mb-2" />
            <span className=" text-blue-600 font-semibold">Patient Safety</span>
          </div>
          <div className="flex flex-col items-center w-36 lg:w-44 xl:w-40">
            <FaLightbulb className="text-2xl text-yellow-500 mb-2" />
            <span className=" text-yellow-500 font-semibold">Innovation</span>
          </div>
          <div className="flex flex-col items-center w-36 lg:w-44 xl:w-42">
            <FaUsers className="text-2xl text-emerald-600 mb-2" />
            <span className=" text-emerald-600 font-semibold">
              Community Wellness
            </span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto border-l-4 border-blue-600 pl-4 italic">
          Every treatment, consultation, and interaction is guided by our
          commitment to your health.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 ">
        <Image
          src="/mission.png"
          alt="Clinic staff illustration"
          width={400}
          height={400}
          className="rounded-tl-3xl rounded-br-3xl shadow-xl object-cover w-full max-w-sm md:max-w-lg lg:max-w-md xl:max-w-lg 2xl:max-w-xl border-double border-blue-300 border-5"
          priority
        />
      </div>
    </section>
  );
}
