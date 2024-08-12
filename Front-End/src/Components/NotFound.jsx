import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setPath(pathName);
  }, []);

  return (
    <div
      className={`${
        path === "/" ? "d-none" : ""
      } bg-indigo-900 relative overflow-hidden h-screen`}
    >
      <img
        src="./src/assets/404.webp"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <button className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You are all alone here
          </button>
          <Link
            to="/anasayfa"
            className="w-1/2 px-5 py-2 text-xl tracking-wide text-white transition-colors duration-200 bg-black-500 rounded-lg shrink-0 sm:w-auto hover:bg-black-600 dark:hover:bg-gray-500 dark:bg-cyan-600"
          >
            <span>Go Home</span>
          </Link>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
}
