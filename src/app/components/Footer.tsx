import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-blue-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        {/* Clinic Info */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-2 text-white">Clinic Demo</h3>
          <p>123 Wellness Avenue</p>
          <p>Health City, 45678</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@clinicdemo.com</p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Resources Links */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-2 text-white">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        {/* Social & Legal */}
        <div className="flex-1 min-w-0 flex flex-col gap-4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-2 text-white">Connect</h4>
          <div className="flex gap-4 mb-2">
            <a
              href="#"
              className="text-blue-100 hover:text-blue-300 transition text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-blue-300 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-blue-300 transition text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-blue-300 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Separation Line */}
      <hr className="border-t border-blue-800 my-8 mx-auto w-full lg:w-3/4 lg:my-10" />
      {/* Copyright Centered */}
      <div className="w-full flex justify-center">
        <div className="text-xs text-blue-200 text-center">
          &copy; {new Date().getFullYear()} Clinic Demo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
