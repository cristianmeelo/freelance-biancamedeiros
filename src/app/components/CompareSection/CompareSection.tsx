import CompareImage from "react-compare-image";

export const CompareSection = () => {
  const beforeImageUrl = "/images/before.png";
  const afterImageUrl = "/images/after.jpeg";

  return (
    <section className="relative w-full h-screen bg-gray-900 flex">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 text-white bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold mb-4">Transformação do Ambiente</h2>
        <p className="text-lg mb-8">
          Compare o ambiente antes e depois das reformas. Veja as diferenças e a
          evolução do espaço.
        </p>
        {/* <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
        >
          Saiba mais
        </a> */}
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gray-800">
        <CompareImage
          leftImage={beforeImageUrl}
          rightImage={afterImageUrl}
          sliderLineColor="rgba(255, 255, 255, 0.8)"
          // sliderLineBorderColor="#ffffff"
        />
      </div>
    </section>
  );
};
