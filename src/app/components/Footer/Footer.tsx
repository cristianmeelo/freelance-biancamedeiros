export const Footer = () => {
  return (
    <footer className="mt-4 py-12 border-t border-base_green w-full px-40">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Localização</h2>
          <p className="mt-2 text-gray-600">
            Venha nos visitar ou entre em contato para saber mais sobre nossos
            serviços e como podemos ajudá-lo a alcançar seu sonho.
          </p>
          <div className="mt-4">
            <p className="text-base text-gray-800">
              Rua Lorem Ipsum, 1234, Porto Alegre, RS 94910-567
            </p>
            <p className="text-base text-gray-800 mt-2">
              Telefone: <a href="tel:+5551994600686" className="text-base_green hover:text-gray-900">51 99460-0686</a>
            </p>
          </div>
        </div>
        <div className="flex w-full justify-around md:items-center md:justify-between py-4">
          <ul className="flex justify-center md:justify-start mb-4 md:mb-0">
            <li className="mx-2">
              <a
                href="https://www.instagram.com/interiores.bianca"
                className="flex items-center text-white hover:text-base_green bg-base_green hover:bg-opacity-60 rounded-full shadow transition duration-150 ease-in-out p-3"
                target="_blank"
                aria-label="Instagram"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8 6H20.2C23.4 6 26 8.6 26 11.8V20.2C26 21.7383 25.3889 23.2135 24.3012 24.3012C23.2135 25.3889 21.7383 26 20.2 26H11.8C8.6 26 6 23.4 6 20.2V11.8C6 10.2617 6.61107 8.78649 7.69878 7.69878C8.78649 6.61107 10.2617 6 11.8 6ZM11.6 8C10.6452 8 9.72955 8.37928 9.05442 9.05442C8.37928 9.72955 8 10.6452 8 11.6V20.4C8 22.39 9.61 24 11.6 24H20.4C21.3548 24 22.2705 23.6207 22.9456 22.9456C23.6207 22.2705 24 21.3548 24 20.4V11.6C24 9.61 22.39 8 20.4 8H11.6ZM21.25 9.5C21.5815 9.5 21.8995 9.6317 22.1339 9.86612C22.3683 10.1005 22.5 10.4185 22.5 10.75C22.5 11.0815 22.3683 11.3995 22.1339 11.6339C21.8995 11.8683 21.5815 12 21.25 12C20.9185 12 20.6005 11.8683 20.3661 11.6339C20.1317 11.3995 20 11.0815 20 10.75C20 10.4185 20.1317 10.1005 20.3661 9.86612C20.6005 9.6317 20.9185 9.5 21.25 9.5ZM16 11C17.3261 11 18.5979 11.5268 19.5355 12.4645C20.4732 13.4021 21 14.6739 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21C14.6739 21 13.4021 20.4732 12.4645 19.5355C11.5268 18.5979 11 17.3261 11 16C11 14.6739 11.5268 13.4021 12.4645 12.4645C13.4021 11.5268 14.6739 11 16 11ZM16 13C15.2044 13 14.4413 13.3161 13.8787 13.8787C13.3161 14.4413 13 15.2044 13 16C13 16.7956 13.3161 17.5587 13.8787 18.1213C14.4413 18.6839 15.2044 19 16 19C16.7956 19 17.5587 18.6839 18.1213 18.1213C18.6839 17.5587 19 16.7956 19 16C19 15.2044 18.6839 14.4413 18.1213 13.8787C17.5587 13.3161 16.7956 13 16 13Z" />
                </svg>
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://api.whatsapp.com/send?phone=5551994600686&text=Ol%C3%A1!+Gostaria+de+fazer+um+or%C3%A7amento!"
                className="flex items-center text-white hover:text-base_green bg-base_green hover:bg-opacity-60 rounded-full shadow transition duration-150 ease-in-out p-3"
                target="_blank"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.99 6C10.53 6 6.08 10.45 6.08 15.91C6.08 17.66 6.54 19.36 7.4 20.86L6 26L11.25 24.62C12.7 25.41 14.33 25.83 15.99 25.83C21.45 25.83 25.9 21.38 25.9 15.92C25.9 13.27 24.87 10.78 23 8.91C21.13 7.03 18.64 6 15.99 6ZM16 7.67C18.2 7.67 20.26 8.53 21.82 10.09C23.37 11.65 24.23 13.72 24.23 15.92C24.23 20.46 20.53 24.15 15.99 24.15C14.51 24.15 13.06 23.76 11.8 23L11.5 22.83L8.38 23.65L9.21 20.61L9.01 20.29C8.19 19 7.75 17.47 7.75 15.91C7.76 11.37 11.45 7.67 16 7.67ZM12.48 11.33C12.32 11.33 12.05 11.39 11.82 11.64C11.6 11.89 10.95 12.5 10.95 13.71C10.95 14.93 11.84 16.1 11.95 16.27C12.09 16.44 13.71 18.94 16.2 20C16.79 20.27 17.25 20.42 17.61 20.53C18.2 20.72 18.74 20.69 19.17 20.63C19.65 20.56 20.63 20.03 20.84 19.45C21.05 18.87 21.05 18.38 20.99 18.27C20.92 18.17 20.76 18.11 20.51 18C20.26 17.86 19.04 17.26 18.82 17.18C18.6 17.09 18.43 17.05 18.26 17.29C18.1 17.53 17.56 18.13 17.4 18.31C17.24 18.49 17.09 18.51 16.84 18.39C16.59 18.27 15.78 18.03 14.93 17.22C14.15 16.51 13.65 15.57 13.48 15.33C13.31 15.09 13.43 14.94 13.54 14.82C13.62 14.73 13.76 14.54 13.89 14.38C14.01 14.23 14.05 14.14 14.14 13.97C14.23 13.8 14.19 13.64 14.11 13.5C14.03 13.35 13.45 12.68 13.17 12.37C12.95 12.11 12.73 11.99 12.55 11.95C12.54 11.95 12.52 11.94 12.48 11.95L12.48 11.33Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center md:text-right">
            &copy; 2024 -{" "}
            <a href="https://www.linkedin.com/in/cristian-melo/" className="text-base_green hover:text-gray-900">
              Dev Cristian Melo
            </a>
            . Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
