import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Kayitol() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [uniDepartment, setUniDepartment] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [github, setGithub] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Şifreler Uyuşmuyor", {
        theme: "colored",
      });
      return;
    }

    const payload = {
      name: name,
      username: username,
      password: password,
      department: department,
      uni_department: uniDepartment,
      github: github,
      token: token,
    };

    try {
      const response = await axios.get(
        `http://localhost:5000/users/${username}`
      );

      if (response.status === 200) {
        toast.warn(
          "Kullanıcı adı bulunmaktadır. Şifrenizi hatırlamıyorsanız derin bir nefes alın.",
          { theme: "colored", draggable: true }
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        try {
          await axios.post(
            "http://localhost:5000/users",
            payload
          );
          toast.success("Kullanıcı başarıyla oluşturuldu", {
            theme: "colored",
            draggable: true,
          });
          navigate("/");
        } catch (postError) {
          toast.error("Kullanıcı oluşturulamadı", {
            theme: "colored",
            draggable: true,
          });
        }
      } else {
        toast.error("Bir hata oluştu", {
          theme: "colored",
          draggable: true,
        });
      }
    }
  };
  const noSpaces = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  return (
    <>
      <section
        onSubmit={(e) => handleSubmit(e)}
        className="bg-gray-50 dark:bg-gray-900 "
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="./src/assets/2.png"
              alt="logo"
            />
            Digital Team{" "}
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Kayıt Ekranı
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ad Soyad"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kullanıcı Adı
                    </label>
                    <input
                      pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                      onKeyDown={noSpaces}
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Kullanıcı Adınız"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Şifre
                    </label>
                    <input
                      pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                      title="En az 8 karakter, büyük harf, küçük harf, sayı ve özel karakter içermelidir."
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="••••••••"
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Şifre Tekrar
                    </label>
                    <input
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                      title="En az 8 karakter, büyük harf, küçük harf, sayı ve özel karakter içermelidir."
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="uni-department"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bölüm Adı
                    </label>
                    <input
                      type="text"
                      value={uniDepartment}
                      onChange={(e) =>
                        setUniDepartment(e.target.value)
                      }
                      name="uni-department"
                      id="uni-department"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bölüm Adı"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="department"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Üniversite Adı
                    </label>
                    <input
                      type="text"
                      value={department}
                      onChange={(e) =>
                        setDepartment(e.target.value)
                      }
                      name="department"
                      id="department"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Üniversite Adı"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Github Linkiniz
                  </label>
                  <input
                    pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                    title="Geçerli bir github linki giriniz."
                    type="text"
                    value={github}
                    onChange={(e) =>
                      setGithub(e.target.value)
                    }
                    name="github"
                    id="github"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Github Linkiniz"
                    required
                  />
                </div>
                {errorMessage && <p>{errorMessage}</p>}
                <button
                  type="submit"
                  className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                >
                  Kayıt Ol
                </button>
                <button
                  type="button"
                  className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
                >
                  <a
                    href="/"
                    className="flex justify-center  font-medium  text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Vazgeç
                  </a>
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Hesabınız var mı ?
                  <a
                    href="/anasayfa"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Giriş Yap
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
