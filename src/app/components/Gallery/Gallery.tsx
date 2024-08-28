import Image from "next/image";
import CompareImage from "react-compare-image";
import imageTop from "../../../../public/images/after.jpeg"; // Substitua pelo caminho da sua imagem
import imageBottom from "../../../../public/images/before.png"; // Substitua pelo caminho da sua imagem
import { CompareSection } from "../CompareSection/CompareSection";

export const Gallery = () => {
  return (
    <>
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row">
          {/* Compare Section */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <CompareSection />
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="w-full lg:w-3/4 mb-6">
              <Image
                src={imageTop}
                alt="Imagem Superior da Galeria"
                width={600}
                height={400}
                layout="responsive"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-3/4">
              <Image
                src={imageBottom}
                alt="Imagem Inferior da Galeria"
                width={600}
                height={400}
                layout="responsive"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Section for Photo Grid */}
      <section className="py-24 sm:py-32 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Galeria de Fotos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="relative w-full h-[200px] md:h-[300px]">
                <Image
                  src={imageTop}
                  alt={`Imagem ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
