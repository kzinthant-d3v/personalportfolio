import { twMerge } from "tailwind-merge";

interface GradientHeaderProps extends React.ComponentPropsWithoutRef<"h1"> {
  text: string;
}

const GradientHeader = ({ text, ...props }: GradientHeaderProps) => {
  return (
    <h1
      {...props}
      className={twMerge(
        "header-text-size font-extra-bold text-transparent bg-gradient-to-r from-[#D1A49D] from-10% via-[#93ACC8] to-[#D0D7BF] bg-clip-text inline-block",
        props.className
      )}
    >
      {text}
    </h1>
  );
};

export default GradientHeader;
