import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/githubApi";
import UserAccount from "./UserAccountInfo";

const User = () => {
  // const { data: user, isLoading } = useQuery({
  //   queryKey: ["username"],
  //   queryFn: () => getUser("octocat"),
  // });

  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <main className="mt-4 bg-white-alt-color dark:bg-black-alt-color px-6 py-8 lg:px-12">
      <UserAccount />
    </main>
  );
};

export default User;
