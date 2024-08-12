import React, { useEffect, useState } from "react";
import axios from "axios";

function Document() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/files")
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center bg-dark">
      <div className="w-full max-w-3xl p-8 bg-dark rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Stajyer Projeleri
        </h2>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Dosya ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white mb-4">
            Yüklenen Dosyalar:
          </h3>
          <ul className="space-y-4">
            {filteredFiles.map((file, index) => (
              <li
                key={index}
                className="flex items-center p-4 bg-dark rounded-lg shadow-sm"
              >
                <svg
                  className="w-6 h-6 text-white mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7l6 6-6 6M21 7l-6 6 6 6"
                  ></path>
                </svg>

                <a
                  href={`http://localhost:5000/public/uploads/${file}`}
                  className="text-blue-600 hover:underline"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Document;
