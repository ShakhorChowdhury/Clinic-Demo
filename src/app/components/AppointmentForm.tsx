import React from "react";
import Image from "next/image";

export default function AppointmentForm() {
  return (
    <div className="font-sans w-full bg-[#eaf3fb] rounded-3xl pt-4 md:pt-20">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Doctor Image Section for large screens */}
        <div className="hidden lg:flex flex-none lg:w-1/2 w-full justify-start bg-transparent p-0 relative">
          <Image
            src="/doctor.png"
            alt="Doctor"
            width={4000}
            height={4000}
            className="w-full  h-full object-cover"
            priority
            style={{

            }}
          />
        </div>
        {/* Doctor Image Section for md and smaller screens */}
        <div className="flex lg:hidden w-full justify-center bg-transparent rounded-2xl p-0 relative">
          <Image
            src="/doctorstanding.png"
            alt="Doctor"
            width={350}
            height={400}
            className="w-auto h-[450px] md:h-[550px] items-end"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
          />
        </div>
        {/* Form Section */}
        <div className="flex-1 flexflex-col justify-center h-full rounded-3xl p-0 md:mx-4 ">
          <div className="bg-opacity-60 rounded-2xl p-10 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl text-black mb-2">
               BOOK AN <span className="text-blue-800 text-2xl md:text-3xl lg:text-4xl font-semibold"><br />APPOINTMENT</span>{" "}
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="David John"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-opacity-80"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(123) 456 - 789"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-gray-700 font-medium">
                  Medical Record Number
                </label>
                <input
                  type="text"
                  placeholder="123456-7890-0987"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  Reason for Visit
                </label>
                <select
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                  required
                >
                  <option value="">Routine Checkup</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Department</label>
                <select
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                  required
                >
                  <option value="">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="px-5 py-3 rounded-lg border border-gray-300 text-base outline-none bg-white bg-opacity-80"
                  required
                />
              </div>
              <div className="md:col-span-2 flex justify-end mt-2">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg cursor-pointer hover:bg-blue-700 transition shadow-md"
                >
                  Submit &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
