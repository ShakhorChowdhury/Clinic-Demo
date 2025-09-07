import Image from "next/image";

const departments = [
  {
    name: "Cardiology",
    desc: "Comprehensive heart care and diagnostics.",
    icon: "/cardiology.png",
  },
  {
    name: "Pediatrics",
    desc: "Specialized care for infants, children, and adolescents.",
    icon: "/pediatrics.png",
  },
  {
    name: "Orthopedics",
    desc: "Bone, joint, and muscle treatments.",
    icon: "/orthopedics.png",
  },
  {
    name: "Dermatology",
    desc: "Skin, hair, and nail care.",
    icon: "/dermatology.png",
  },
  {
    name: "General Medicine",
    desc: "Primary care and internal medicine.",
    icon: "/medicine.png",
  },
  {
    name: "Neurology",
    desc: "Comprehensive healthcare for children from birth through adolescence.",
    icon: "/neurology.png",
  },
];

const Services = () => {
  return (
    <section className="font-sans relative py-20 px-4 md:px-8 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-regular tracking-wide text-gray-800 mb-2 text-center z-10">
        OUR DEPARTMENTS
      </h2>
      {/* Intro text */}
      <p className="text-3xl md:text-4xl font-semibold pt text-blue-900 mb-10 text-center z-10">
        Explore our specialized departments
      </p>
      {/* Department cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 w-full max-w-6xl xl:max-w-[1200px] 2xl:max-w-7xl mt-8">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white/80 border border-blue-200 rounded-2xl shadow-lg flex flex-col items-start text-left hover:scale-105 transition-transform duration-200 h-[240px] p-8 relative overflow-hidden"
          >
            <div className="flex flex-col items-start justify-center h-full w-full">
              <div className="bg-white rounded-full shadow flex items-center justify-center w-16 h-16 mb-2">
                <Image
                  src={dept.icon}
                  alt={dept.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-1 mt-2">
                {dept.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{dept.desc}</p>
              <span className="text-xs text-blue-700 font-medium mt-1">
                30 doctors available
              </span>
            </div>
            {/* Custom bottom right shape and arrow button with gap and matching roundness */}
            <div className="absolute bottom-4 right-4 flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
