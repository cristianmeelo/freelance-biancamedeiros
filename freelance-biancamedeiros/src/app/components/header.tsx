export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-8 flex justify-between bg-red-50 z-50">
      <div>Logo</div>
      <ul className="flex  space-x-10 font-kandira">
        <li>Home</li>
        <li>Designer</li>
        <li>Projetos</li>
        <li>Consultoria</li>
        <li>Contato</li>
      </ul>
    </header>
  );
};
