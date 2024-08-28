import Image from "next/image";
import curtainImage1 from "../../../../public/images/screen.jpeg"; // Substitua com a imagem apropriada

export const Curtains = () => {
  return (
    <section className="bg-base_light py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h5 className="text-3xl sm:text-4xl font-bold text-start mb-6">
          Cortinas
        </h5>
        <p className="text-base sm:text-lg text-center mb-8">
          Bianca Medeiros dispõe da empresa Claudia Cortinas e Decorações, que é de sua família para personalizar seus projetos com produtos exclusivos, já que a fabricação é própria!
          Além das cortinas em tecido, a empresa trabalha com persianas, papel de parede, tapete, almofadas...
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 items-center justify-center lg:justify-start p-4">
            <Image
              src={curtainImage1} // Substitua com a imagem apropriada
              alt="Imagem de cortina 1"
              className="object-cover w-full h-auto"
              width={600}
              height={800}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-center p-4">
              <Image
                src={curtainImage1} // Substitua com a imagem apropriada
                alt="Imagem de cortina 2"
                className="object-cover w-full h-auto"
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-1 items-center justify-center p-4">
              <Image
                src={curtainImage1} // Substitua com a imagem apropriada
                alt="Imagem de cortina 3"
                className="object-cover w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center lg:justify-end p-4">
            <Image
              src={curtainImage1} // Substitua com a imagem apropriada
              alt="Imagem de cortina 1"
              className="object-cover w-full h-auto"
              width={600}
              height={800}
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.claudiacortinas.com.br"
            className="inline-block text-base bg-base_red font-semibold text-white hover:text-base_red transition-colors duration-300 underline-offset-2 hover:underline p-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visite o site da Claudia Cortinas e Decorações
          </a>
        </div>

      </div>
    </section>
  );
};
