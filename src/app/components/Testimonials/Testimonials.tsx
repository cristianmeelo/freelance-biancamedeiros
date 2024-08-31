import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid"; // Importando ícone de estrela do Heroicons

const testimonials = [
  {
    quote: "Excelente profissional. Super dedicada e qualificada. Recomendo de olhos fechados!",
    name: "Fatima de Bem",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJbYPueqh-V6YJV9GNKNNvnld5UWOaQc48tnp9soZ-gz4CL5A=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "5 meses atrás",
    commentsCount: 10,
  },
  {
    quote: "Bianca é uma profissional extremamente atenciosa e faz a leitura daquilo que desejamos. Concilia praticidade e estética de forma leve e personalizada. Pontual nas entregas e cuidadosa até no pós-montagem, onde busca saber a funcionalidade do produto final e o feedback do usuário. Recomendo!",
    name: "Jeanne Alencar",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVDJomHAqN_7XwDCVE0D1czPL6tT0lOBi14S3-nfy2HwPymKq7M_Q=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "5 meses atrás",
    commentsCount: 10,
  },
  {
    quote: "A Bianca é uma ótima profissional, além de excelente pessoa. Mesmo sendo muito competente, escuta os desejos do cliente e conduz o processo com leveza, escuta e afetividade.",
    name: "Marcia Tedesco",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbTwpaOyTJoPkLiqtYmFo8Y6RHD7C4Dzw5INTMJBScMAKyhM4bcQ=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "11 meses atrás",
    commentsCount: 5,
  },
  {
    quote: "Excelente profissional! Atenciosa, busca entender a real necessidade do cliente. Trabalhos lindos e muito bem feitos!",
    name: "Thais Franciele Maito",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJg7R8ZGHfBYpfIXtTeaed7SskjtjSMf5y2HQ1eOIpuHk6MkQ=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "11 meses atrás",
    commentsCount: 2,
  },
  {
    quote: "Fiz as cortinas da sala e do meu quarto, e coloquei papel de parede no meu quarto. Tudo ficou impecável. Atendimento eficiente e entrega antes do prazo. As costuras e o caimento das cortinas ficaram excelentes, e o papel de parede, além de lindo, ficou muito bem colocado. Super recomendo!",
    name: "Juliane Santos Müller",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL8t8xedlV8l6NoCxHAMID6Mq5oWeVJ3k7YiPkzOGX3BL1c-A=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "11 meses atrás",
    commentsCount: 3,
  },
  {
    quote: "Amei o resultado da minha cortina! A forma como a Bianca conduz o atendimento, super atenciosa e como designer de interiores me deu um suporte incrível; sem contar que o produto é de muita qualidade, prazo de entrega... a equipe está de parabéns! Obrigada por todo carinho em decorar minha casa, teu trabalho é impecável e com certeza vou indicá-la para minha família e amigos!",
    name: "Daniela Bittencourt",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKXaUb7AqfwfhtjeXfuYM2R3rFHUHqpB3SzJYLV49x8i60NZA=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "2 anos atrás",
    commentsCount: 1,
  },

  {
    quote: "Ótimo atendimento e serviço de qualidade! Fiquei muito satisfeita com a cortina para minha sala!",
    name: "Daniela Kihara",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXcfuNdS2SsAhNbI_CQTy7rcC6xusoUp-zcY_p-3q429OYWYfc=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "um ano atrás",
    commentsCount: 2,
  },
  {
    quote: "Maravilhoso, não só o atendimento e produto são de qualidade, mas pós venda e suporte técnico são excelentes! Recomendo!!!",
    name: "Marcia Medeiros",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV1ChMw4jXIz3si-M159UQcLPD85S4kb_Z7LUB5s13uSnr23kA=w60-h60-p-rp-mo-br100",
    rating: 5,
    date: "2 anos atrás",
    commentsCount: 12,
  },
];



const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1" aria-label={`Rating: ${rating} out of ${totalStars}`}>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${index < fullStars ? "text-yellow-400" : index === fullStars && hasHalfStar ? "text-yellow-400" : "text-gray-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <div className="py-12 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Feedbacks
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Conheça quem confiou no nosso trabalho e veja o que eles dizem sobre nós.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg">
              <div className="flex items-center mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 ">{testimonial.name}</p>

                  <p className="text-sm text-left text-gray-500">{testimonial.commentsCount} {testimonial.commentsCount > 1 ? 'comentários' : 'comentário'} </p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={testimonial.rating} />
                <p className="text-sm text-gray-500 ml-4">{testimonial.date}</p> {/* Data ao lado das estrelas */}
              </div>
              <p className="mt-4 text-lg font-normal text-gray-900">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=feedbacks"
            className="inline-block text-base bg-base_red font-semibold text-white hover:text-base_red transition-colors duration-300 underline-offset-2 hover:underline p-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Veja nossos feedbacks no Google"
          >
            Veja nossos feedbacks no Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
