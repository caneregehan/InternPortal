import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/2.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/AuthProvider";
import { toast } from "react-toastify";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Çıkış Başarılı", { theme: "dark" });
  };

  return (
    <div>
      <nav className=" fixed w-full backdrop-blur-md bg-transparent bg-red-800 ">
        <div className=" mx-6 ">
          <div className="flex items-center  h-24 ">
            <div className="flex">
              <button
                onClick={handleLogout}
                className=" text-white hover:bg-indigo-700/50 hover:text-white absolute px-3 py-2 top-3 right-12 h-16 w-16 rounded-2xl text-md font-bold"
              >
                Çıkış
              </button>
              <Link
                to="/"
                className=" text-right text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-md font-bold"
              ></Link>
              <div className="flex-shrink-0">
                <Link to="/anasayfa">
                  <img
                    className="h-12 w-16"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="hidden md:flex">
                <div className="ml-10 flex items-baseline space-x-5  ">
                  <Link
                    to="/anasayfa"
                    className=" hover:bg-white-700/50 hover:bg-indigo-700/50 text-white hover:text-white px-3 py-2 rounded-2xl text-md "
                  >
                    Anasayfa
                  </Link>
                  <Link
                    to="/dijitalteam"
                    className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-md font-bold"
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    to="/stajyerler"
                    className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-md font-bold"
                  >
                    Stajyerler
                  </Link>
                  <Link
                    to="/projeler"
                    className="text-white hover:bg-indigo-700/50 hover:text-white px-3 py-2 rounded-2xl text-md font-bold"
                  >
                    Proje Dökümanları
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-color-red.200"
              >
                <Link
                  to="/anasayfa"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Anasayfa
                </Link>

                <Link
                  to="/projeler"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projeler
                </Link>

                <Link
                  to="/dijitalteam"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dijital Team
                </Link>

                <Link
                  to="/stajyerler"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Stajyerler
                </Link>
                {[isAuthenticated] ? (
                  <button
                    onClick={handleLogout}
                    className=" text-white hover:bg-indigo-700/50 hover:text-white absolute px-3 py-2 top-3 right-12 h-16 w-16 rounded-2xl text-md font-bold"
                  >
                    Çıkış
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Giriş
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default Navbar;
