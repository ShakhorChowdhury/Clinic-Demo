import {
  FaUserMd,
  FaHeartbeat,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";

export default function FloatingCards() {
  return (
    <div className="font-sans w-full flex justify-center pointer-events-none">
      <div className="relative z-20 -mt-16 flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:flex xl:flex-row 2xl:flex 2xl:flex-row gap-6 items-center justify-center">
        {/* Card 1 */}
        <div className="bg-cover bg-blue-200 w-[300px] h-[270px] backdrop-blur-md rounded-2xl px-8 py-6 flex flex-col items-center justify-center min-w-[180px] pointer-events-auto hover:-translate-y-2 transition-transform border border-blue-500/30">
          <FaUserMd className="text-blue-600 text-3xl mb-2" />
          <hr className="w-10 border-blue-200 my-3" />
          <h5 className="font-semibold text-xl mb-1 text-gray-900">
            Expert Doctors
          </h5>
          <p className="text-gray-600 text-md text-center">
            Our team consists of highly qualified professionals.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-pink-200 w-[300px] h-[270px] backdrop-blur-md rounded-2xl px-8 py-6 flex flex-col items-center justify-center min-w-[180px] pointer-events-auto hover:-translate-y-2 transition-transform border border-pink-500/30">
          <FaHeartbeat className="text-pink-500 text-3xl mb-2" />
          <hr className="w-10 border-pink-200 my-3" />
          <h5 className="font-semibold text-xl mb-1 text-gray-900">
            Personalized Care
          </h5>
          <p className="text-gray-600 text-md text-center">
            We provide care tailored to your unique needs.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-purple-200 w-[300px] h-[270px] backdrop-blur-md rounded-2xl px-8 py-6 flex flex-col items-center justify-center min-w-[180px] pointer-events-auto hover:-translate-y-2 transition-transform border border-purple-500/30">
          <FaCalendarCheck className="text-purple-600 text-3xl mb-2" />
          <hr className="w-10 border-purple-200 my-3" />
          <h5 className="font-semibold text-xl mb-1 text-gray-900">
            Easy Booking
          </h5>
          <p className="text-gray-600 text-md text-center">
            Book appointments quickly and easily online.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-green-200 w-[300px] h-[270px] backdrop-blur-md rounded-2xl px-8 py-6 flex flex-col items-center justify-center min-w-[180px] pointer-events-auto hover:-translate-y-2 transition-transform border border-green-500/30">
          <FaClock className="text-green-600 text-3xl mb-2" />
          <hr className="w-10 border-green-200 my-3" />
          <h5 className="font-semibold text-xl mb-1 text-gray-900">
            Always Open
          </h5>
          <p className="text-gray-600 text-md text-center">
            Open 24/7 for your convenience
          </p>
        </div>
      </div>
    </div>
  );
}
