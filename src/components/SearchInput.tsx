import searchIcon from "../assets/icon-search.svg";

const SearchInput = () => {
  return (
    <form
      className="flex items-center mt-8 gap-2 p-2 bg-white-alt-color dark:bg-black-alt-color text-black-alt-color dark:text-white-alt-color
      rounded-[10px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <img src={searchIcon} alt="search Icon" className="md:pl-6" />
      <input
        className="w-full bg-transparent text-[13px]  placeholder:text-gray-color placeholder:dark:text-white-alt-color"
        type="text"
        placeholder="Search GitHub username…"
      />

      <input
        type="submit"
        value="Search"
        className="text-sm text-white-alt-color font-bold bg-blue-color px-4 py-3 rounded-[10px]"
      />
    </form>
  );
};

export default SearchInput;
