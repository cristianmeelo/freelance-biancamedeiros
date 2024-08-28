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
    { text: "Galeria", id: "gallery" },
    { text: "Contato", id: "contact" },
  ];

  const [linkHovered, setLinkHovered] = useState(DEFAULT_HOVERED);
  const [outMenu, setOutMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-8 bg-base_white z-50 flex items-center border-b-[1px] border-base_green">
      <div className="flex-shrink-0 mr-8">
        <Image
          src={logo}
          alt="Logo da marca, Bianca Medeiros e uma folha à direita"
          width={100}
          height={20}
          className="object-contain"
        />
      </div>
      <div className="flex-grow lg:hidden flex justify-end">
        {" "}
        {/* Ajustado para alinhar o menu no canto direito */}
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
        className={`lg:flex space-x-10 text-2xl font-roboto flex-grow ${menuOpen ? "block" : "hidden"} lg:block absolute lg:static top-20 left-0 w-full bg-base_light lg:bg-transparent border-b-4 border-base_green lg:border-0 transition-colors duration-300`}
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
                ? "text-base_green"
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
