import UserAccount from "./UserAccount";
const User = () => {
  return (
    <main
      className="grid grid-cols-[77px_1fr] md:grid-cols-[117px_1fr] gap-x-[1.1875rem]  md:gap-x-10 mt-4 
    bg-white-alt-color dark:bg-black-alt-color px-6 py-8 lg:px-12"
    >
      <UserAccount />
    </main>
  );
};

export default User;

// grid grid-cols-[77px_1fr] md:grid-cols-[117px_1fr]
