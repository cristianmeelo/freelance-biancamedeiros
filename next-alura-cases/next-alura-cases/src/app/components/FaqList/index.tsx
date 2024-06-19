export interface FAQItem {
  index: number;
  question: string;
  answer: string;
}

export interface PageProps {
  qualquercoisa?: string;
  faq?: FAQItem[];
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const FAQ_API_URL =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: {
      qualquercoisa: 'xablauto',
      faq: faq,
    },
  };
}

export const FaqList: React.FC<PageProps> = ({ faq }) => {
  if (!faq) {
    return <p>No FAQ data available.</p>;
  }

  return (
    <ul>
      {faq.map(({ answer, question, index }: FAQItem) => (
        <li key={index}>
          <article>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};
