import { UsernameSchema } from "../services/githubApi";
import GridLayout from "../layout/GridLayout";
import UserAccountInfo from "./UserAccountInfo";

const UserAccount = ({ user }: { user: UsernameSchema }) => {
  return (
    <>
      <img
        src={user?.avatar_url}
        alt="user profile image"
        className="block size-[4.375rem] rounded-full md:size-[7.3125rem]"
      />
      <UserAccountInfo user={user} />

      <GridLayout>
        <p className="lg:hidden mt-8 md:mt-6 text-blueish-gray-color col-start-1 col-end-3 lg:col-start-2 dark:text-white-alt-color">
          {user?.bio ? user.bio : "This profile has no bio"}
        </p>
      </GridLayout>
    </>
  );
};

export default UserAccount;
