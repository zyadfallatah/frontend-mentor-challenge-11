import searchIcon from "../assets/icon-search.svg";
import { useContext, useState } from "react";
import { SearchContext } from "../App";
import { getUser } from "../services/githubApi";
import { useQuery } from "@tanstack/react-query";

const SearchInput = () => {
  const { username, setUsername } = useContext(SearchContext);
  const [search, setSearch] = useState("");

  const handleSubmit = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search === "") return;

    setUsername!(search);
  };

  const { isError } = useQuery({
    queryKey: ["username", { username }],
    queryFn: () => getUser(username),
  });

  return (
    <form
      className="flex items-center mt-8 gap-2 p-2 bg-white-alt-color dark:bg-black-alt-color text-black-alt-color dark:text-white-alt-color
      rounded-[10px]"
      onSubmit={handleSubmit}
    >
      <img src={searchIcon} alt="search Icon" className="md:pl-6" />
      <input
        className="w-full bg-transparent text-[13px] lg:text-[18px] placeholder:text-gray-color placeholder:dark:text-white-alt-color outline-0"
        type="text"
        placeholder="Search GitHub username…"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {isError && (
        <p className="text-[#F74646] text-[15px] text-right font-bold w-fit basis-[60%]">
          No Results
        </p>
      )}
      <input
        type="submit"
        value="Search"
        className="text-sm lg:text-[1rem] text-white-alt-color font-bold bg-blue-color px-4 py-3 lg:px-6 rounded-[10px] 
        duration-100 cursor-pointer hover:bg-[#60ABFF]"
      />
    </form>
  );
};

export default SearchInput;
