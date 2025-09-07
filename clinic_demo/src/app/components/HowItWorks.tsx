import Image from "next/image";

const steps = [
  {
    title: "Book Your Appointment",
    desc: "Schedule online, call us, or walk in. Choose the time and service that suits you.",
    img: "/booking.png",
  },
  {
    title: "Check In & Consultation",
    desc: "Arrive at the clinic and complete a quick check-in. Meet your doctor or specialist to discuss your health concerns.",
    img: "/check-in.png",
  },
  {
    title: "Examination & Tests (if needed)",
    desc: "Your doctor may recommend a physical exam, lab tests, or imaging. Most tests can be done on-site for convenience.",
    img: "/blood-test.png",
  },
  {
    title: "Personalized Treatment Plan",
    desc: "Get clear explanations of your results and treatment options. Receive a tailored care plan based on your needs.",
    img: "/prescription.png",
  },
  {
    title: "Follow-Up & Ongoing Care",
    desc: "Schedule follow-ups to track your progress. Access ongoing support, prescriptions, or referrals if necessary.",
    img: "/check-up.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="font-sans py-20 px-4 md:px-8 flex flex-col items-center bg-white mt-16">
      <h2 className="text-2xl md:text-3xl font mb-4 text-center">
        How It Works
      </h2>
      <p className="text-3xl md:text-4xl font-semibold pt text-blue-900 mb-10 text-center z-10 max-w-6xl">
        Follow these simple steps to access world-class healthcare at our
        clinic.
      </p>
      {/* Tree structure */}
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto mt-16 gap-20">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 z-0 transform -translate-x-1/2 hidden lg:block" />
        {/* Steps as tree nodes */}
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`
              relative z-10 flex items-center w-full
              ${idx % 2 === 0 ? "justify-start" : "justify-end"}
            `}
          >
            {/* Step content and image */}
            {idx % 2 === 0 ? (
              <>
                {/* Step content left, image right */}
                <div
                  className={`
                    flex items-center gap-8 max-w-lg w-full
                    ml-0 mr-auto text-left flex-row
                  `}
                >
                  <span className="text-5xl md:text-6xl font-extrabold text-blue-500/40 drop-shadow-lg select-none">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[330px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex flex-1 justify-center pl-8">
                  {step.img && (
                    <div className="bg-gray-200 rounded-full flex items-center justify-center w-20 h-20">
                      <Image
                        src={step.img}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="object-contain opacity-40"
                      />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Image left, step content right */}
                <div className="hidden md:flex flex-1 justify-center pr-8">
                  {step.img && (
                    <div className="bg-gray-200 rounded-full flex items-center justify-center w-20 h-20">
                      <Image
                        src={step.img}
                        alt={step.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`
                    flex items-center gap-8 max-w-lg w-full
                    mr-0 ml-auto text-right flex-row-reverse
                  `}
                >
                  <span className="text-5xl md:text-6xl font-extrabold text-blue-500/40 drop-shadow-lg select-none">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[330px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </>
            )}
            {/* Connector dot */}
            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-20 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
          </div>
        ))}
      </div>
    </section>
  );
}
