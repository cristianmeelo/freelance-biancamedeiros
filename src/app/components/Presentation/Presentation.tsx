import Image from "next/image";
import screen from "../../../../public/images/screen.jpeg";

export const Presentation = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-screen bg-white text-black">
      <div className="flex flex-1 items-center justify-center lg:justify-center p-4 lg:p-8">
        <Image
          src={screen}
          alt="Imagem representativa"
          className="object-cover w-full h-full lg:w-3/4 lg:h-auto"
          width={600}
          height={400}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center lg:items-start lg:justify-center p-4 lg:p-8 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
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
