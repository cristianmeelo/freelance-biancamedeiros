import Image from "next/image";
import screen from "../../../../public/images/screen.jpeg";

export const Presentation = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-screen py-12 bg-base_white text-base_dark"
      aria-labelledby="presentation-heading"
    >
      {/* Image Section */}
      <div
        className="flex flex-1 items-center justify-center lg:justify-center p-4 lg:p-8"
        role="figure"
        aria-labelledby="presentation-image"
      >
        <Image
          src={screen}
          alt="Imagem representativa mostrando uma tela com design de interiores"
          className="object-cover w-full h-full lg:w-full lg:h-auto rounded-md"
          width={600}
          height={400}
          aria-describedby="presentation-image-description"
        />
        <p id="presentation-image-description" className="sr-only">
          A imagem mostra um design de interiores em uma tela, representando o trabalho da designer.
        </p>
      </div>

      {/* Text Section */}
      <div
        className="flex flex-1 flex-col items-center justify-center lg:items-start lg:justify-center p-4 lg:p-8 lg:w-1/2 text-center lg:text-left"
        role="region"
        aria-labelledby="presentation-text"
      >
        <h1 id="presentation-heading" className="pb-8 text-3xl text-base_red lg:text-4xl font-bold ">
          Transforme seu espaço com experiência e paixão
        </h1>
        <p className="text-base lg:text-lg mb-4">
          Formada em design de interiores, no ano de 2021, pela Universidade Luterana do Brasil (ULBRA), localizada em Canoas, no estado do Rio Grande do Sul, Bianca é uma profissional dedicada e focada, com um atendimento humanizado que transforma o desenvolvimento de um projeto em uma experiência única!
        </p>
        <p className="text-base lg:text-lg">
          Transformar um ambiente exige conhecimento, técnica e um profissional competente. Bianca está sempre em busca dessas qualidades, proporcionando projetos exclusivos através de visitas a grandes eventos, viagens e novas experiências.
        </p>
      </div>
    </section>
  );
};
