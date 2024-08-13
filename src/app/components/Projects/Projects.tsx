/* eslint-disable @next/next/no-img-element */

export const Projects = () => {
  return (
    <section className=" w-full relative bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className=" absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-50 animate-gradient"></div>
      </div>

      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          Nossos Projetos
        </h1>
        <p className="text-lg mb-12 text-white">
          Explore nossos projetos mais recentes e veja como transformamos
          espaços com criatividade e inovação.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="/images/after.jpeg"
              alt="Projeto 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Projeto 1</h2>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/after.jpeg"
              alt="Projeto 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Dormitório bacana e aconchegante</h2>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/after.jpeg"
              alt="Projeto 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Quarto charmoso com tons de azul</h2>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/after.jpeg"
              alt="Projeto 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold">Projeto 4</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

