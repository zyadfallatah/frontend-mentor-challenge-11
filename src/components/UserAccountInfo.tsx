import { UsernameSchema } from "../services/githubApi";
import { dateFormat } from "../util/dateFormatter";

const UserAccountInfo = ({ user }: { user: UsernameSchema }) => {
  const getDate = dateFormat(user?.created_at as string);

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
        {getDate}
      </p>
      <p className="hidden lg:block basis-full text-blueish-gray-color dark:text-white-alt-color">
        {user?.bio ? user.bio : "This profile has no bio"}
      </p>
    </div>
  );
};

export default UserAccountInfo;
