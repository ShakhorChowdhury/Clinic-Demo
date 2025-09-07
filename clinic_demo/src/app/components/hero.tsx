import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto flex justify-center min-h-[90vh]">
      <div className=" text-white xl:pt-20 mx-auto w-full flex flex-col items-center lg:items-start px-6 py-16 rounded-lg  gap-8">
        <div className="lg:w-1/2 backdrop-blur-xs md:pt-12 lg:pt-0 lg:backdrop-blur-xs rounded-xl shadow-lg p-4 flex flex-col items-center text-center lg:text-start lg:flex-none lg:items-start">
          <h4 className="flex gap-2 items-center text-[#111827] py-4 px-1 text-xs md:text-xl tracking-wide">
            <span>
              <Image src="/love.png" height={20} width={20} alt="" />
            </span>
            Best healthcare for our valuable patients
          </h4>
          <hr className="my-3 mx-3 border-[#000] opacity-15 w-2/3" />
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl mx-1 xl:text-7xl font-bold mb-2 text-[#111827]">
            Healthcare you can count on.
          </h1>
          <p className="text-md md:text-lg lg:text-lg xl:text-xl mx-2 font-regular text-[#000] mb-4 max-w-lg py-5 lg:leading-8">
            From scheduling to prescriptions, clinic brings everything you need
            into one seamless experience.
            <br />
            Visit us today and experience healthcare redefined.
          </p>
          <div className="flex gap-4 mx-1 pb-4">
            <a
              href="#book"
              className="px-6 py-3 text-sm bg-[#4F46E5] text-white rounded-md shadow hover:bg-[#4338CA] transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-6 py-3 border text-sm border-[#14B8A6] text-[#000] hover:text-black hover:bg-[#CCFBF1] rounded-md transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
