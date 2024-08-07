import { UsernameSchema } from "../services/githubApi";

const UserStats = ({ user }: { user: UsernameSchema }) => {
  return (
    <div
      className="flex justify-between mt-6 text-center md:text-left px-4 md:px-8 py-[1.125rem] bg-white-color dark:bg-black-color 
    rounded-[10px] dark:text-white-alt-color"
    >
      <div className="flex-1">
        <h3 className="text-[11px] md:text-[13px] text-blueish-gray-color dark:text-white-alt-color">
          Repos
        </h3>
        <p className="text-[1rem] md:text-[22px] font-bold">
          {user?.public_repos}
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-[11px] md:text-[13px] text-blueish-gray-color dark:text-white-alt-color">
          Followers
        </h3>
        <p className="text-[1rem] md:text-[22px] font-bold">
          {user?.followers}
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-[11px] md:text-[13px] text-blueish-gray-color dark:text-white-alt-color">
          Following
        </h3>
        <p className="text-[1rem] md:text-[22px] font-bold">
          {user?.following}
        </p>
      </div>
    </div>
  );
};

export default UserStats;
