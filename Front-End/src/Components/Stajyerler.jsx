import React, { useEffect, useState } from "react";
import image1 from "../assets/2.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Pages/AuthProvider";
import axios from "axios";

function Stajyerler() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = axios
      .get(
        "https://hemacore.hattat.com.tr/internportalservice/users",
        config
      )
      .then((res) => {
        if (res.data && res.data.status) {
          setUsers(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) =>
        console.error("Error fetching users:", error)
      );
  }, []);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-transparent p-24">
      <div className="mx-auto">
        <h2 className="mt-6 text-5xl font-extrabold dark:text-white text-left tracking-wide">
          Stajyerler
        </h2>
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16"></div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="py-5"
        >
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={handleInput}
            />
            <button
              href="/stajyerler"
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-3 gap-8">
          {filteredUsers.map((person) => (
            <div
              key={person.id}
              className="text-center text-white border border-indigo-400 rounded-xl p-5"
            >
              <img
                className="mx-auto mb-7 w-30 h-24 rounded-md"
                src={image1}
                alt={person.name}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{person.name}</p>
                <br />
              </h3>
              <p>{person.uni_department}</p>
              <p>{person.department}</p>
              <ul className="flex justify-center mt-8 space-x-8">
                <li>
                  <Link
                    target="_blank"
                    to={person.github}
                    className="text-gray-900 dark:hover:text-blue-500 dark:text-blue-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      required
                    >
                      <path
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projeler"
                    className="text-gray-900 dark:hover:text-blue-500 dark:text-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stajyerler;
