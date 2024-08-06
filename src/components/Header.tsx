import Theme from "./Theme";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-black-color dark:text-white-color font-bold text-[1.625rem]">
        devfinder
      </h1>
      <Theme />
    </header>
  );
};

export default Header;
