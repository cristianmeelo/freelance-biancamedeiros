import { useState } from "react";
import {
    HomeIcon,
    ClockIcon,
    DocumentTextIcon,
    GlobeAltIcon,
    CurrencyDollarIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";

const faqs = [
    {
        question: "Qual é o processo para iniciar um projeto de arquitetura?",
        answer:
            "O processo começa com uma consulta inicial para entender suas necessidades e desejos. Em seguida, elaboramos um conceito e um plano inicial, que é refinado até a aprovação final. Finalmente, avançamos para a execução e construção do projeto.",
        icon: <HomeIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        question: "Quanto tempo leva para completar um projeto de arquitetura?",
        answer:
            "O tempo de conclusão de um projeto varia dependendo da complexidade e do tamanho. Em geral, projetos residenciais podem levar de 6 a 12 meses, enquanto projetos comerciais podem levar mais tempo.",
        icon: <ClockIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        question: "Quais serviços estão incluídos no seu pacote de arquitetura?",
        answer:
            "Nossos serviços incluem design conceitual, elaboração de plantas, coordenação de construção, supervisão do projeto e consultoria em escolhas de materiais e acabamentos.",
        icon: <DocumentTextIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        question: "Como é feita a comunicação durante o projeto?",
        answer:
            "Mantemos uma comunicação regular através de reuniões, relatórios de progresso e atualizações por e-mail. Estamos sempre disponíveis para responder a perguntas e resolver dúvidas.",
        icon: <GlobeAltIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        question: "Qual é o custo estimado para um projeto de arquitetura?",
        answer:
            "O custo varia com base na complexidade do projeto e nas suas necessidades específicas. Oferecemos uma consulta gratuita para discutir suas necessidades e fornecer uma estimativa precisa.",
        icon: <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />,
    },
    {
        question: "Quais são os requisitos educacionais para um arquiteto?",
        answer:
            "Para se tornar um arquiteto, é necessário obter um diploma em Arquitetura e passar pelo exame de licenciamento. Muitos arquitetos também completam estágios e programas de pós-graduação para se especializar em áreas específicas.",
        icon: <AcademicCapIcon className="h-6 w-6 text-gray-500" />,
    },
];

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 w-full px-40">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Perguntas Frequentes
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 shadow-md rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center space-x-4">
                                    {faq.icon}
                                    <span className="text-lg font-semibold text-gray-700">
                                        {faq.question}
                                    </span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"
                                    }`}
                            >
                                <div className="p-6 text-gray-600">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
