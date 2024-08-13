import Image from "next/image";
import screen from "../../../../public/images/screen.jpeg";

export const Presentation = () => {
  return (
    <section className="flex h-screen w-screen bg-gray-800 relative">
      <Image
        src={screen}
        alt="Projeto arquitetônico de uma sala conjugada com cozinha, apresentando um ambiente moderno e aconchegante em tons de madeira e cores suaves."
        fill={true}
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Transformando Espaços
        </h1>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          Desenhando ambientes que refletem estilo e funcionalidade. Explore
          nossos projetos e veja como podemos transformar seu espaço em algo
          único e acolhedor.
        </p>
        <a
          href="#portfolio"
          className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-green-700 rounded-lg"
        >
          Veja nossos projetos
        </a>
      </div>
    </section>
  );
};
