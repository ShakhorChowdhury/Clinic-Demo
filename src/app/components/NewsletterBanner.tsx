import React from "react";

const NewsletterBanner = () => {
  return (
    <section className="font-sans w-full py-16 md:py-24 flex items-center justify-center bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-blue-100 shadow-lg rounded-2xl p-12 md:p-16 max-w-4xl mx-auto">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Be Our <br /> Subscribers
            </h2>
            <p className="text-base text-gray-500 mt-2">
              to get the latest news about health
              <br /> from our experts
            </p>
          </div>
          <form className="flex-1 flex flex-col gap-2 items-start justify-center w-full  lg:max-w-lg">
            <label
              htmlFor="newsletter-email"
              className="text-sm text-gray-700 mb-2 ml-2"
            >
              Your Email
            </label>
            <div className="relative w-full">
              <input
                id="newsletter-email"
                type="email"
                placeholder="example@email.com"
                className="pl-4 lg:pl-6 pr-36 py-4 rounded-full border border-gray-300 outline-none text-xs lg:text-base w-full bg-white shadow-sm"
                required
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 lg:right-2 -translate-y-1/2 px-8 py-2 lg:rounded-full bg-transparent text-black/60  text-base flex items-center gap-2 lg:shadow hover:bg-blue-700 transition"
              >
                Submit
                <span className="inline-block ml-1">
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
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
