import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/githubApi";

const User = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["username"],
    queryFn: () => getUser("octocat"),
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main className="mt-4 bg-white-alt-color dark:bg-black-alt-color px-6 py-8 lg:px-12">
      <div className="flex items-center lg:items-start gap-[1.1875rem] md:gap-10">
        <img
          src={user?.avatar_url}
          alt="user profile image"
          className="size-[4.375rem] rounded-full md:size-[7.3125rem]"
        />
        <div className="flex-1">
          <div className="lg:flex justify-between">
            <div>
              <h1 className="font-bold text-[1rem] md:text-[1.625rem] text-black-alt-color dark:text-white-alt-color leading-8">
                {user?.name}
              </h1>
              <h3 className="text-[.8125rem] text-blue-color mb-[.375rem] lg:mb-5">
                @{user?.login}
              </h3>
            </div>
            <p className="text-gray-color dark:text-white-alt-color text-[15px]">
              Joined 25 Jan 2011
            </p>
          </div>
          <p className="hidden lg:block text-blueish-gray-color dark:text-white-alt-color">
            {user?.bio ? user.bio : "No Bio Here"}
          </p>
        </div>
      </div>
      <p className="block lg:hidden text-blueish-gray-color dark:text-white-alt-color">
        {user?.bio ? user.bio : "No Bio Here"}
      </p>
    </main>
  );
};

export default User;
