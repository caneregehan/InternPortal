export default function Kurulum() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-x font-semibold tracking-wider text-teal-700 uppercase rounded-full bg-teal-accent-400">
            Digital Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                  fill="#fff8"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          Dosya Yükleme İşlemleri
        </h2>
        <p className="text-base text-gray-500 md:text-lg">
          Dosyalarınızı yüklerken aşağıdaki adımları takip
          ediniz.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width="24" height="24" fill="white" />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11V17"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.75 8V7H12.25V8H11.75Z"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Kullanıcı Kayıt Ekranı
            </h6>
            <p className="mb-3 text-sm text-gray-500">
              Kayıt ekranındaki bilgilerinizi eksiksiz ve
              doğru bir biçimde doldurunuz
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_15_82)">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                  />
                  <g filter="url(#filter0_d_15_82)">
                    <path
                      d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                      fill="#000000"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_15_82"
                    x="2.55444"
                    y="3.5"
                    width="18.8911"
                    height="19"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_15_82"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_15_82"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_15_82">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Portal Giriş
            </h6>
            <p className="mb-3 text-sm text-gray-500">
              Kullanıcı adınız ve şifrenizle giriş yaptıktan
              sonra dosyalarınızı yükleyebilir ve
              indirebilirsiniz.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15L12 3M12 3L8 7M12 3L16 7"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Proje Ekleme Ekranı
            </h6>
            <p className="mb-3 text-sm text-gray-500">
              Dosylarınızı yüklerken istenen (.zip) formatta
              yükleyebilirsiniz. Proje dosyalarınızı
              yüklerken içerisine paket dosyalarınızı
              yüklemeyiniz ve projelerinizin README.md
              dosyalarınızı eklemeyi unutmayınız.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  d="M4 9V6.47214C4 6.16165 4.07229 5.85542 4.21115 5.57771L5 4H10L11 6H21C21.5523 6 22 6.44772 22 7V9V18C22 19.1046 21.1046 20 20 20H18"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2362 9H2.30925C1.64988 9 1.17099 9.62698 1.34449 10.2631L3.59806 18.5262C3.83537 19.3964 4.62569 20 5.52759 20H19.6908C20.3501 20 20.829 19.373 20.6555 18.7369L18.201 9.73688C18.0823 9.30182 17.6872 9 17.2362 9Z"
                  stroke="#000000"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Dosyalar Ekranı
            </h6>
            <p className="mb-3 text-sm text-gray-500">
              Yüklenen tüm dosyalara erişebilir ve indirme
              işlemlerini yapabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
