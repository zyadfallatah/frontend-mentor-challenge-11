import { UsernameSchema } from "../services/githubApi";

const UserAccountInfo = ({ user }: { user: UsernameSchema }) => {
  return (
    <div className="lg:flex justify-between flex-wrap h-fit">
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
      <p className="hidden lg:block basis-full text-blueish-gray-color dark:text-white-alt-color">
        {user?.bio ? user.bio : "No Bio Here"}
      </p>
    </div>
  );
};

export default UserAccountInfo;
