import { PropsWithChildren } from "react";

const SocialLink = ({
  children,
  linkName,
}: PropsWithChildren & { linkName?: string | null }) => {
  const isLinkProvided = linkName !== null;
  return (
    <a
      href="#"
      className={`flex items-center gap-5 ${
        isLinkProvided
          ? "text-blueish-gray-color dark:text-white-alt-color"
          : "text-gray-color"
      }`}
    >
      <div className="min-w-5">{children}</div>
      <span className=" break-all">
        {linkName ? linkName : "Not Available"}
      </span>
    </a>
  );
};

export default SocialLink;
