import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SearchContext } from "../App";
import { getUser } from "../services/githubApi";
import GridLayout from "../layout/GridLayout";
import SocialLinks from "./SocialLinks";
import UserAccount from "./UserAccount";
import UserStats from "./UserStats";

const User = () => {
  const { username } = useContext(SearchContext);

  const {
    data: user,
    isError,
    isLoading,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["username", { username }],
    queryFn: () => getUser(username),
    placeholderData: keepPreviousData,
  });

  if (isLoading)
    return (
      <h2 className="text-black-color dark:text-white-alt-color text-3xl mt-8 text-center">
        Loading...
      </h2>
    );

  if (isError)
    return (
      <h2 className="text-black-color dark:text-white-alt-color text-3xl mt-8 text-center">
        User Not Found 😢
      </h2>
    );

  return (
    <main
      className="grid grid-cols-[77px_1fr] md:grid-cols-[117px_1fr] gap-x-[1.1875rem]  md:gap-x-10 mt-4 
    bg-white-alt-color dark:bg-black-alt-color px-6 py-8 lg:px-12 rounded-[10px]"
    >
      <UserAccount user={user} />
      <GridLayout>
        <UserStats user={user!} />
        <SocialLinks user={user!} />
        {isPlaceholderData ? (
          <h2 className="text-black-color dark:text-white-alt-color text-xl mt-8 text-center">
            New User Fetching...
          </h2>
        ) : null}
      </GridLayout>
    </main>
  );
};

export default User;
