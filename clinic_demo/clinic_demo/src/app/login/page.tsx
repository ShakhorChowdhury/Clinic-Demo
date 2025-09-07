import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="font-sans min-h-screen w-full bg-blue-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row-reverse w-full max-w-3xl overflow-hidden">
        {/* Left: Image and text */}
        <div className="md:w-2/5 w-full flex flex-col items-center justify-center p-8 bg-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
            Welcome Back!
          </h2>
          <p className="text-blue-700 text-center text-base mb-6">
            Log in to access your appointments, health records, and more.
          </p>
          <Image
            src="/login.png"
            alt="Login Doctor"
            width={180}
            height={180}
            className=""
          />
        </div>
        {/* Right: Login form */}
        <div className="md:w-3/5 w-full flex flex-col justify-center p-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center md:text-left">
            Login to Your Account
          </h3>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-blue-800 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="px-5 py-3 rounded-lg border border-blue-300 text-base outline-none bg-blue-50"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-blue-800 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="px-5 py-3 rounded-lg border border-blue-300 text-base outline-none bg-blue-50"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-bold text-lg cursor-pointer hover:bg-blue-700 transition shadow-md mt-2"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-sm text-blue-700 text-center md:text-left">
            Forgot your password?{" "}
            <a href="#" className="underline text-blue-800">
              Reset here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
