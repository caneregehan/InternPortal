import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import "./modal.css";
Modal.setAppElement("#root");

function Project() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(
      localStorage.getItem("user")
    );
    const username = userData?.username || "";
    setUsername(username);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileName = selectedFile.name;
      const pattern = new RegExp(`^${username}-.+\\.zip$`); // Dosya adını kontrol eden regex patterni

      if (!pattern.test(fileName)) {
        toast.warning(
          "Dosya adı `kullanıcıadı-projeadi.zip` formatında olmalıdır.",
          { theme: "dark" }
        );
        setFile(null);
        return;
      }

      if (
        selectedFile.type !== "application/zip" &&
        selectedFile.type !== "application/x-zip-compressed"
      ) {
        toast.warning(
          "Sadece .zip dosyaları yüklenebilir.",
          {
            theme: "dark",
          }
        );
        setFile(null);
      } else {
        setMessage("");
        setFile(selectedFile);
      }
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      toast.warning(".zip dosyası seçiniz.", {
        theme: "dark",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(
        "https://hemacore.hattat.com.tr/internportalservice/api/upload",
        formData
      )
      .then((response) => {
        toast.success("Dosya Aktarımı Başarılı.", {
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.error("Dosya Aktarımı Başarısız.");
        console.error("File upload error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark">
      <div className="w-full max-w-md p-5 space-y-2 bg-dark rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-sky-400">
          <img
            className="p-6"
            src="./src/assets/2.png"
            alt="Logo"
          />
          Proje Yükleme Ekranı
        </h2>

        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <br />
            <br />
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-white"
            >
              Yükleme Yapan Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              value={username}
              readOnly
              className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="fileInput"
              className="block mb-2 text-sm font-medium text-white"
            >
              Dosya Seç
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Yükle
          </button>
        </form>
        {message && (
          <div
            className={`p-4 text-center rounded-lg ${
              message === "File upload successful."
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Bilgilendirme Modalı"
        className="modal"
        overlayClassName="overlay"
      >
        <img
          className="mx-auto pb-6"
          src="./src/assets/1.ico"
          alt=""
        />
        <h2 className="text-center pb-4 text-2xl text-black">
          Yükleme Yaparken Dikkat Edilmesi Gerekenler
        </h2>
        <p className="pb-5 text-black">
          Projelerinizi yüklerken &nbsp;
          <b className="text-blue-400">
            <u>"kullanıcıadınız-projeadi.zip"</u>
          </b>
          &nbsp; şeklinde dosya adı vermeniz gerekmektedir.
        </p>
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => setIsModalOpen(false)}
        >
          Kapat
        </button>
      </Modal>
    </div>
  );
}

export default Project;
