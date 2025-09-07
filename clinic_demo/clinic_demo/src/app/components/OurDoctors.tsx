"use client";

import React, { useState } from "react";
import Image from "next/image";

type Department =
  | "Cardiology"
  | "Pediatrics"
  | "Orthopedics"
  | "Dermatology"
  | "General Medicine"
  | "Neurology";

type Doctor = {
  name: string;
  title: string;
  img: string;
};

const doctorsData: Record<Department, Doctor[]> = {
  Cardiology: [
    { name: "Dr. Alice Heart", title: "Cardiologist", img: "/doctorcard.png" },
    { name: "Dr. John Pulse", title: "Cardiologist", img: "/doctorcard1.png" },
    { name: "Dr. Emma Valve", title: "Cardiologist", img: "/doctorcard2.png" },
    { name: "Dr. Mark Rhythm", title: "Cardiologist", img: "/doctorcard3.png" },
  ],
  Pediatrics: [
    { name: "Dr. Sarah Childs", title: "Pediatrician", img: "/doctor.png" },
    { name: "Dr. Tom Young", title: "Pediatrician", img: "/doctor.png" },
    { name: "Dr. Lily Growth", title: "Pediatrician", img: "/doctor.png" },
    { name: "Dr. Ben Care", title: "Pediatrician", img: "/doctor.png" },
  ],
  Orthopedics: [
    {
      name: "Dr. Olivia Bone",
      title: "Orthopedic Surgeon",
      img: "/doctor.png",
    },
    {
      name: "Dr. Ethan Joint",
      title: "Orthopedic Surgeon",
      img: "/doctor.png",
    },
    { name: "Dr. Mia Muscle", title: "Orthopedic Surgeon", img: "/doctor.png" },
    { name: "Dr. Leo Spine", title: "Orthopedic Surgeon", img: "/doctor.png" },
  ],
  Dermatology: [
    { name: "Dr. Grace Skin", title: "Dermatologist", img: "/doctor.png" },
    { name: "Dr. Jack Hair", title: "Dermatologist", img: "/doctor.png" },
    { name: "Dr. Chloe Nail", title: "Dermatologist", img: "/doctor.png" },
    { name: "Dr. Max Glow", title: "Dermatologist", img: "/doctor.png" },
  ],
  "General Medicine": [
    { name: "Dr. Ava Health", title: "General Physician", img: "/doctor.png" },
    { name: "Dr. Noah Care", title: "General Physician", img: "/doctor.png" },
    {
      name: "Dr. Mia Wellness",
      title: "General Physician",
      img: "/doctor.png",
    },
    { name: "Dr. Lucas Cure", title: "General Physician", img: "/doctor.png" },
  ],
  Neurology: [
    { name: "Dr. Ella Brain", title: "Neurologist", img: "/doctor.png" },
    { name: "Dr. Henry Nerve", title: "Neurologist", img: "/doctor.png" },
    { name: "Dr. Zoe Mind", title: "Neurologist", img: "/doctor.png" },
    { name: "Dr. Sam Neuro", title: "Neurologist", img: "/doctor.png" },
  ],
};

const departments: Department[] = Object.keys(doctorsData) as Department[];

const OurDoctors = () => {
  const [activeDept, setActiveDept] = useState<Department>(departments[0]);

  return (
    <section className="font-sans relative py-20 px-4 md:px-8 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden mt-16">
      <div className="container mx-auto flex flex-col items-center">
        {/* Heading & Intro */}
        <h2 className="text-xl md:text-3xl font-regular tracking-wide text-gray-800 mb-2 text-center z-10">
          OUR DOCTORS
        </h2>
        <p className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4 text-center z-10">
          Meet our expert medical team
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-10 text-center z-10 max-w-2xl">
          Our doctors are leaders in their fields, dedicated to providing
          compassionate and personalized care for every patient.
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`px-5 py-2 rounded-full font-medium border transition-colors duration-200 text-blue-900 bg-white/80 border-blue-500/20 hover:bg-blue-100 hover:text-blue-700 ${
                activeDept === dept ? "bg-blue-600 text-black" : ""
              }`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>
        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl xl:max-w-[1200px] 2xl:max-w-7xl">
          {doctorsData[activeDept].map((doc: Doctor) => (
            <div key={doc.name} className="flex flex-col items-center">
              <div className="w-full h-[340px] bg-white/80 border border-blue-500/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex items-end justify-center group">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  width={400}
                  height={340}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "bottom" }}
                />
              </div>
              <div className="mt-4 text-center w-full transition-transform duration-200 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {doc.name}
                </h3>
                <p className="text-gray-600 text-lg">{doc.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
