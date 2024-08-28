import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";

const DEFAULT_HOVERED = -1;

export const Header = () => {
  const links = [
    { text: "Designer", id: "presentation" },
    { text: "Projetos", id: "projects" },
    { text: "Consultoria", id: "compare-section" },
    { text: "Cortinas", id: "curtains" },
    { text: "Galeria", id: "results" },
    { text: "Contato", id: "about" },
  ];

  const [linkHovered, setLinkHovered] = useState(DEFAULT_HOVERED);
  const [outMenu, setOutMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-8 bg-red-50 z-50 flex items-center">
      <div className="flex-shrink-0 h-20 py-4">
        <Image
          src={logo}
          alt="Logo da marca, bianca medeiros e uma folha à direita"
          width={200}
        />
      </div>
      <div className="flex-grow lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex space-x-10 text-2xl font-kandira flex-grow ${menuOpen ? "block" : "hidden"} lg:block absolute lg:static top-20 left-0 w-full bg-red-50 lg:bg-transparent`}
        onMouseEnter={() => setOutMenu(true)}
        onMouseLeave={() => setOutMenu(false)}
      >
        {links.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setLinkHovered(index)}
            onMouseLeave={() => setLinkHovered(DEFAULT_HOVERED)}
            className={`relative cursor-pointer transition-colors duration-300 
            ${index === linkHovered
                ? "text-base-orange"
                : !outMenu
                  ? "text-stone-900"
                  : "text-base_light"
              }
            flex-grow py-4 px-6 lg:py-0 lg:px-0
          `}
          >
            <a href={`#${link.id}`} className="relative z-10">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
