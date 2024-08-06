import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/githubApi";
import GridLayout from "../layout/GridLayout";
import UserAccountInfo from "./UserAccountInfo";

const UserAccount = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["username"],
    queryFn: () => getUser("octocat"),
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <img
        src={user?.avatar_url}
        alt="user profile image"
        className="block size-[4.375rem] rounded-full md:size-[7.3125rem]"
      />
      <UserAccountInfo />

      <GridLayout>
        <p className="lg:hidden mt-8 md:mt-6 text-blueish-gray-color col-start-1 col-end-3 lg:col-start-2 dark:text-white-alt-color">
          {user?.bio ? user.bio : "No Bio Here"}
        </p>
      </GridLayout>
    </>
  );
};

export default UserAccount;
