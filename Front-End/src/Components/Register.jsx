import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/1.ico";
import axios from "axios";
import { useAuth } from "../Pages/AuthProvider";
import { toast } from "react-toastify";

export default function Register() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      password: password,
      role: role,
    };

    const res = await axios.post(
      "https://hemacore.hattat.com.tr/internportalservice/auth/login",
      payload
    );
    console.log(res);
    if (res.data && res.data.status) {
      login(res.data.data.token, res.data.data.user);
      navigate("/anasayfa");
      toast.success("Giriş Başarılı", { theme: "dark" });
    } else {
      toast.warning(res.data.message, { theme: "dark" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-screen h-screen object-cover ml-20"
            src={loginImg}
          />
        </div>

        <div className="bg-dark flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            onSubmit={handleLogin}
          >
            <h2 className="text-4xl dark:text-gray-400 font-bold text-center">
              GİRİŞ
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Kullanıcı Adı</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Şifre</label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label className="pb-3">Kullanıcı Tipi</label>
              <select
                required
                id="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Rol Seçin</option>
                <option value="admin">Admin</option>
                <option value="intern">Stajyer</option>
              </select>
            </div>
            <Link to={"/kayitol"}>
              <div className="flex pt-6 justify-end text-sm text-green-600 cursor-pointer hover:underline">
                Kayıt Ol
              </div>
            </Link>
            <button
              type="submit"
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            >
              GİRİŞ
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
