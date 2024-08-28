import Image from "next/image";
import screen from "../../../../public/images/screen.jpeg"; // Substitua com a imagem apropriada

export const Projects = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen w-screen bg-base_light text-black">
      <div className="flex flex-1 flex-col items-center justify-center lg:items-start lg:justify-center p-4 lg:p-8 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Projeto
        </h1>
        <p className="text-base lg:text-lg mb-4">
          Geralmente os clientes têm dúvidas em relação a como o projeto funciona!
        </p>
        <p className="text-base lg:text-lg mb-4">
          E não existe uma resposta pronta, pois cada cliente tem uma necessidade específica em relação ao que gostaria de fazer em sua casa.
        </p>
        <p className="text-base lg:text-lg mb-4">
          Pode ser desde um projeto do zero, em que a construtora entregou sem “nada” e temos que especificar tudo, do piso ao teto...
        </p>
        <p className="text-base lg:text-lg mb-4">
          Ou casos em que a necessidade é reformar, renovar, para trazer novamente um aconchego e identidade ao lar!
        </p>
        <p className="text-base lg:text-lg">
          Para que o projeto seja desenvolvido de forma organizada, temos etapas a serem seguidas dentro de um cronograma previamente estipulado e acordado com o cliente.
        </p>
        <button className="w-full lg:w-auto bg-base_red text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Faça seu orçamento aqui
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center lg:justify-center p-4 lg:p-8">
        <Image
          src={screen} // Substitua com a imagem apropriada
          alt="Imagem de projeto"
          className="object-cover w-full h-full lg:w-3/4 lg:h-auto"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};
