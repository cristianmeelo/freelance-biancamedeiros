import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/logo.svg';

const DEFAULT_HOVERED = -1;
export const Header = () => {
  const links = [
    { text: 'Home', url: '#' },
    { text: 'Designer', url: 'base_orange' },
    { text: 'Projetos', url: 'base_red' },
    { text: 'Consultoria', url: 'base_green' },
    { text: 'Contato', url: 'base_light' },
  ];

  const [linkHovered, setLinkHovered] = useState(DEFAULT_HOVERED);
  const [outMenu, setOutMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-8 flex justify-between items-center bg-red-50 z-50">
      <div className="flex h-20 py-4">
        <Image
          src={logo}
          alt="Logo da marca, bianca medeiro e uma folha à direita"
          width={200}
        />
      </div>
      <ul
        className="flex space-x-10 text-2xl font-kandira"
        onMouseEnter={() => setOutMenu(true)}
        onMouseLeave={() => setOutMenu(false)}
      >
        {links.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setLinkHovered(index)}
            onMouseLeave={() => setLinkHovered(DEFAULT_HOVERED)}
            className={`relative cursor-pointer transition-colors duration-300 
              ${
                index === linkHovered
                  ? 'text-base-orange'
                  : !outMenu
                  ? 'text-black'
                  : 'text-base_light'
              }

                      `}
          >
            <a href={link.url} className="relative z-10">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
