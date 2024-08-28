import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid"; // Importando ícone de estrela do Heroicons

const testimonials = [
  {
    quote: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    name: "Leslie Alexander",
    username: "@lesliealexander",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5, // Avaliação em estrelas
  },
  {
    quote: "Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.",
    name: "Michael Foster",
    username: "@michaelfoster",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.0, // Avaliação em estrelas
  },
  {
    quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.",
    name: "Dries Vincent",
    username: "@driesvincent",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5.0, // Avaliação em estrelas
  },
  {
    quote: "Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.",
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 4.8, // Avaliação em estrelas
  },
  {
    quote: "Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.",
    name: "Courtney Henry",
    username: "@courtneyhenry",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 3.5, // Avaliação em estrelas
  },
  {
    quote: "Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.",
    name: "Tom Cook",
    username: "@tomcook",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    rating: 4.2, // Avaliação em estrelas
  },
  {
    quote: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis.",
    name: "Whitney Francis",
    username: "@whitneyfrancis",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5.0, // Avaliação em estrelas
  },
  {
    quote: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
    name: "Leonard Krasner",
    username: "@leonardkrasner",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 4.1, // Avaliação em estrelas
  },
  {
    quote: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    name: "Floyd Miles",
    username: "@floydmiles",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 3.9, // Avaliação em estrelas
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1">
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
    <div className="py-24 sm:py-32 bg-gray-50">
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
                  <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-lg font-semibold text-gray-900">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=feedbacks"
            className="text-blue-500 underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja nossos feedback no Google
          </a>
        </div>
      </div>
    </div>
  );
};
