import { createContext, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import User from "./components/User";

export const SearchContext = createContext<{
  username: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
}>({
  username: "",
});

function App() {
  const [username, setUsername] = useState("octocat");

  return (
    <>
      <Header />
      <SearchContext.Provider value={{ username, setUsername }}>
        <SearchInput />
        <User />
      </SearchContext.Provider>
    </>
  );
}

export default App;
