import { PropsWithChildren } from "react";

const GridLayout = ({ children }: PropsWithChildren) => {
  return <div className="col-start-1 col-end-3 lg:col-start-2">{children}</div>;
};

export default GridLayout;
