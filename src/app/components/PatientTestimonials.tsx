"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  text: string;
  img: string;
  department: string;
}

const testimonials: Testimonial[] = [
  {
    name: "David John",
    text: "The doctors and staff were incredibly caring and professional. My experience was smooth and reassuring.",
    img: "/man.jpg",
    department: "Cardiology",
  },
  {
    name: "Emily Carter",
    text: "I felt listened to and supported throughout my treatment. Highly recommend this clinic!",
    img: "/Woman.jpg",
    department: "Dermatology",
  },
  {
    name: "Michael Lee",
    text: "Booking was easy and the care was top-notch. The pediatric team is wonderful with kids.",
    img: "/patient3.png",
    department: "Pediatrics",
  },
  {
    name: "Sophia Patel",
    text: "The orthopedic department helped me recover quickly. The doctors are very knowledgeable.",
    img: "/patient4.png",
    department: "Orthopedics",
  },
  {
    name: "James Smith",
    text: "I appreciate the personalized care and attention to detail. The neurology team is excellent.",
    img: "/patient5.png",
    department: "Neurology",
  },
  {
    name: "Olivia Brown",
    text: "General medicine team provided great advice and follow-up. I feel healthier than ever!",
    img: "/patient6.png",
    department: "General Medicine",
  },
];

type Slide = Testimonial[];

const slides: Slide[] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  slides.push(testimonials.slice(i, i + 2));
}

const PatientTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="font-sans py-20 px-4 md:px-8 flex flex-col items-center justify-center bg-white mt-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full xl:px-18 2xl:px-44 flex flex-row items-center mb-2 pb-6">
          <div className="flex flex-col items-start flex-1">
            <h2 className="text-xl md:text-3xl font-regular tracking-wide text-gray-800 text-left z-10">
              PATIENT TESTIMONIALS
            </h2>
            <p className="text-3xl md:text-4xl font-semibold text-blue-900 mt-2 mb-4 text-left z-10 max-w-2xl w-full">
              Hear from our patients
            </p>
          </div>
          <div className="flex flex-row items-center justify-center ml-4 gap-4">
            <button
              className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-blue-700 transition text-2xl"
              onClick={prevSlide}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-blue-700 transition text-2xl"
              onClick={nextSlide}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
        {/* Carousel */}
        <div className="relative w-full max-w-4xl">
          <div className="flex flex-row gap-10 items-stretch justify-center">
            {slides[current].map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center w-full max-w-lg"
              >
                <div className="bg-white/80 border border-blue-500/20 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center text-center p-12 w-full h-[280px] md:h-[280px] lg:h-[280px] xl:h-[280px] 2xl:h-[280px]">
                  <p className="text-gray-700 text-sm md:text-lg italic w-full">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 mb-2 w-full">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-blue-800 text-center">
                    {t.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-blue-600" : "bg-blue-200"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
