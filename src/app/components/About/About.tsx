import {
  LightBulbIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import photoBianca from "../../../../public/images/foto.png";

const features = [
  {
    name: "Projetos Personalizados",
    description:
      "Cada projeto é único e desenvolvido de acordo com as necessidades e sonhos de cada cliente, garantindo ambientes harmoniosos e funcionais.",
    icon: LightBulbIcon,
  },
  {
    name: "Qualificação Profissional",
    description:
      "Bianca Medeiros está sempre em busca de aprimoramento através de cursos e eventos para oferecer o melhor serviço.",
    icon: BriefcaseIcon,
  },
  {
    name: "Inspiração Internacional",
    description:
      "Frequentemente viajando e visitando grandes centros de design, Bianca traz o que há de mais moderno e sofisticado para seus projetos.",
    icon: GlobeAltIcon,
  },
];

export const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-500">
                Design de Interiores
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transforme seu espaço
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Formada em Design de Interiores pela Universidade Luterana do
                Brasil (ULBRA) em 2021, Bianca Medeiros se destaca pela atenção
                ao detalhe e pela criação de ambientes que priorizam a saúde e o
                bem-estar.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <div className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-green-600"
                      />
                      {feature.name}
                    </div>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image
            alt="Projetista bianca sentada em um balanço"
            src={photoBianca}
            width={2432}
            height={180}
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};
