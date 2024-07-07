import React, { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';

import photoBianca from '../../../public/images/foto.png';

import 'aos/dist/aos.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { ComponentLink } from './base/link';

export const Designer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="flex w-full h-full flex-col">
      {/* <div className='flex py-8 items-center justify-center'>
        <h3 className='font-kandira text-[32px]' data-aos="zoom-in">Conheça a profissional...</h3>
      </div> */}
      <div className='flex flex-col items-center md:flex-row md:items-start py-20'>
        <div className="flex w-1/2 pt-8 md:pt-0">
          <div data-aos="fade-right">
            <Image
              src={photoBianca}
              alt="Foto da Bianca sentada em um balanço, com expressão alegre."
              width={800}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center px-8 pt-8 ">
          <p data-aos="fade-up" className=' font-kandira'>
            Formada em Design de Interiores pela Universidade Luterana do Brasil
            (ULBRA) em dois mil e vinte um, a Designer Bianca Medeiros tem diversos cursos na
            área de interiores, priorizando a saúde e o bem estar nos ambientes.
            Focada em projetos residenciais, ela está sempre em busca de
            aprimoramento e qualificação profissional, através de cursos na área,
            como por exemplo: Iluminação, gestão de projetos, software, entre
            outros... Tudo para proporcionar a melhor experiência na realização do
            sonhos de seus clientes! Além disso, viaja e visita frequentemente os
            grandes centros e eventos do setor para agregar ainda mais valor ao
            seu repertório. O resultado é um trabalho de alta qualidade, com
            estilo e bom gosto que é impresso em suas criações.

          </p>
          <div className='sm:w-full py-8 w-1/4'>

            <ComponentLink href="https://www.instagram.com/interiores.bianca/">quero saber mais</ComponentLink>
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="+5551994600686"
        accountName="Escritório Bianca Medeiros"
        avatar='/images/avatar.jpg'
        chatMessage='Olá! Quero tornar sua casa em um lar, me diga como posso tornar isso realidade.'
        statusMessage='Geralmente responde em minutos'
      />
    </div>
  );
};

export default Designer;
