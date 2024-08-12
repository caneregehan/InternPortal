import React from "react";
import { Link } from "react-router-dom";

export default function anasayfa() {
  return (
    <>
      <section className="  flex bg-cover w-screen bg-no-repeat h-screen text-center place-content-center font-mono items-center  bg-[#111]  ">
        <svg
          className=" z-0 blur-3xl absolute opacity-80 right-0"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          height="70%"
          width="50%"
        >
          <g clipPath="url(#clip0_17_60)">
            <g filter="url(#filter0_f_17_60)">
              <path
                d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z"
                fill="#4D07E3"
              ></path>
              <path
                d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z"
                fill="#4C00FF"
              ></path>
              <path
                d="M320 400H400V78.75L332.5 211.5L320 400Z"
                fill="#7fcef3"
              ></path>
              <path
                d="M400 0H128.6L332.5 211.5L400 78.75V0Z"
                fill="#7fcef3"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="719.867"
              id="filter0_f_17_60"
              width="719.867"
              x="-159.933"
              y="-159.933"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              ></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_17_60"
                stdDeviation="79.9667"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>

        <div className="z-40 ltr:sm:text-left rtl:sm:text-right text-white  ">
          <p className="sm:text-4xl leading-snug bg-gradient-to-r to-indigo-100 bg-clip-text from-cyan-400 text-transparent via-cyan-700 border-white  ">
            Hema Endüstri
          </p>
          <p className="bg-gradient-to-r to-indigo-500 bg-clip-text from-cyan-400 text-transparent via-cyan-200 border-white  lg:mt-0 lg:pl-4 mt-3">
            Dijital Dönüşüm Ofisi Portalı
          </p>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed"></p>

          <div className="mt-20 space-x-4">
            <Link
              to="/stajyerler"
              className="bg-white border-white-700 hover:bg-blue-white text-black font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Stajyerler
            </Link>

            <Link
              to="/projeler"
              className=" rounded bg-indigo-400 bg-gradient-to-l from-indigo-500  px-12 py-3 text-sm font-medium text-black"
            >
              Projeler
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
