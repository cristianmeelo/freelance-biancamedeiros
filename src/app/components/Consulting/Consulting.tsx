import Image from "next/image";
import consultingImage from "../../../../public/images/screen.jpeg";

export const Consulting = () => {
  return (
    <section className="bg-white h-[75vh] sm:py-32 py-12">
      <div className="container mx-auto px-4">
        <div className="border-b border-base_green ">

          <h4 className="text-3xl sm:text-4xl font-bold text-end mb-6">
            Consultoria
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-end">
          <div className="flex flex-1 items-center justify-center lg:justify-start p-4 lg:p-8">
            <Image
              src={consultingImage} // Substitua com a imagem apropriada
              alt="Imagem de consultoria"
              className="object-cover w-full h-full lg:w-1/2 lg:h-auto"
              width={600}
              height={400}
              aria-describedby="consulting-image-description"
            />
            <p id="consulting-image-description" className="sr-only">
              Imagem ilustrativa relacionada à consultoria, mostrando um design interior.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start p-4 lg:p-8">
            <p className="text-base sm:text-lg mb-4">
              É indicado para quem procura uma mudança mais rápida com baixo custo, em que o cliente mesmo possa alterar de acordo com um guia que a Bianca (designer de interiores) irá desenvolver pra você!
            </p>
            <p className="text-base sm:text-lg mb-4">
              Dentro do guia você terá paleta de cores, indicação dos materiais, indicação de mobiliário solto para comprar, além de uma planta técnica com as medidas e distribuição da mobília...
            </p>
            <button className="w-full lg:w-auto bg-base_red text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Solicite sua consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
