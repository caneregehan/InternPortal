import {
  IdentificationIcon,
  CloudArrowUpIcon,
  PowerIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Stajyer Kayıt İşlemi",
    description:
      "Sisteme Kayıt olmak için stajyerlerin adı, soyadı, üniversite adı, bölüm adı, ve şifre bilgilerini girmesi gerekmektedir. Bu bilgiler, stajyerin kimlik doğrulaması ve güvenliği için gereklidir. ",
    icon: IdentificationIcon,
  },
  {
    name: "Portal Giriş",
    description:
      "Intern Portal Sistemine stajyer girişi için kullanıcı adı ve şifre ile giriş yapılabilir. Kullanıcı adı, stajyerin adı olacaktır. Şifre ise stajyerin belirlediği güvenlik kurallarına uygun olmalıdır. Güçlü bir şifre oluşturulması, stajyerin hesabının güvenliğini sağlamak adına önemlidir.",
    icon: PowerIcon,
  },
  {
    name: "Dosya Yükleme",
    description:
      "Dosya yükleme işlemi stajyerler başarıyla giriş yaptıktan sonra projelerini .zip formatında yükleyebilirler. Bu sayede, stajyerlerin yaptıkları çalışmaları güvenli bir şekilde depolayabilir ve gerektiğinde erişebilirler. Aynı zamanda, projelerini diğer ekip üyeleriyle paylaşabilir ve geri bildirim alabilirler.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Dosya İndirme",
    description:
      "Dosya indirme işlemi stajyerlerin yükledikleri projeleri .zip formatında indirebilmelerini sağlar. Bu sayede, stajyerlerin yaptıkları çalışmaları güvenli bir şekilde depolayabilir ve gerektiğinde erişebilirler. Aynı zamanda, projelerini diğer ekip üyeleriyle paylaşabilir ve geri bildirim alabilirler.",
    icon: FolderArrowDownIcon,
  },
];

export default function Baslarken() {
  return (
    <div className="bg-dark py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text">
          <img
            className="mx-auto"
            src="./src/assets/2.png"
            alt=""
          />

          <p className="text-center mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            INTERN PORTAL
          </p>
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
            Intern Portal, stajyerlerin işlerini ve
            projelerini kolaylıkla kaydedebilmelerini,
            indirebilmelerini sağlamayı amaçlamaktadır. Bu
            platform sayesinde stajyerler, yaptıkları
            çalışmaları güvenli bir şekilde depolayabilir ve
            gerektiğinde erişebilirler. Aynı zamanda,
            projelerini diğer ekip üyeleriyle paylaşabilir
            ve geri bildirim alabilirler.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
