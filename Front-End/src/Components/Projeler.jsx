import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Baslarken from "../Components/Baslarken";
import Kurulum from "../Components/Kurulum";
import Document from "../Components/Document";
import Help from "../Components/Help";
import imgTest from "../assets/2.png";
function Projeler() {
  const [activeComponent, setActiveComponent] =
    useState("/logo");

  const renderComponent = () => {
    switch (activeComponent) {
      case "/logo":
        return (
          <img
            className="px-80 object-right-topt p- w-1/2 rounded"
            src={imgTest}
            alt="logo"
          />
        );
      case "/baslarken":
        return <Baslarken />;
      case "/kurulum":
        return <Kurulum />;
      case "/document":
        return <Document />;
      case "/help":
        return <Help />;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-32">
        <div className="grid fixed">
          <details className="group transition-all duration-150 overflow-hidden w-56">
            <summary
              className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700"
              onClick={() =>
                setActiveComponent("/baslarken")
              }
            >
              <span className="ml-3 text-sm text-white">
                Başlarken
              </span>
            </summary>
          </details>

          <details className="group transition-all duration-150 overflow-hidden w-56">
            <summary
              className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700"
              onClick={() => setActiveComponent("/kurulum")}
            >
              <span className="ml-3 text-sm text-white">
                Dosya İşlemleri
              </span>
            </summary>
          </details>

          <details className="group transition-all duration-150 overflow-hidden w-56">
            <summary
              className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700"
              onClick={() =>
                setActiveComponent("/document")
              }
            >
              <span className="ml-3 text-sm text-white">
                Dosyalar
              </span>
            </summary>
          </details>

          <details className="group transition-all duration-150 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <span className="ml-3 text-sm text-white">
                Yardım ve Destek
              </span>
              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <nav className="flex flex-col">
              <Link
                to="#"
                className="flex items-center rounded-lg px-8 py-2 text-gray-500 hover:bg-black"
                onClick={() => setActiveComponent("/help")}
              >
                <span className="text-sm font-medium">
                  Yardım için erişebileceğiniz kişiler
                </span>
              </Link>
            </nav>
          </details>

          <details className="group transition-all duration-150 h-10 overflow-hidden w-56">
            <summary className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-slate-600 hover:text-gray-700">
              <Link
                to="/proje_ekle"
                className="ml-3 text-sm text-white"
              >
                Proje Ekle
              </Link>
            </summary>
          </details>
        </div>

        <div className="markdown-body pb-32 pl-72 col-span-full">
          {renderComponent()}
        </div>
      </div>
    </>
  );
}

export default Projeler;
