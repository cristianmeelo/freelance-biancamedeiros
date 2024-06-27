import { Arrow45 } from '@/app/assets/Arrow45';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href: string; // URL para redirecionar ao clicar no botão
    className?: string; // Classe opcional para estilos adicionais
}

export const ComponentLink: React.FC<ButtonProps> = ({ children, href, className = '' }) => {
    // Classes do Tailwind para estilizar o botão
    const buttonClasses = `
    flex
    w-auto
        inline-block
        bg-base_green
        text-slate-700
        font-semibold
        py-6 px-4
        rounded
        shadow-md
        focus:outline-none
        uppercase
        font-kandira
        ${className}
    `;

    return (


        <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
            {children}<Arrow45 />
        </a>

    );
};

