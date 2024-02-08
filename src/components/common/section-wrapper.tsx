import { PropsWithChildren } from "react";

const SectionWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="pt-10 pb-10 lg:pt-20 lg:pb-20">{children}</div>;
};

export default SectionWrapper;
