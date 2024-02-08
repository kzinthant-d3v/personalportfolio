"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface GradientHeaderProps extends React.ComponentPropsWithoutRef<"h1"> {
  text: string;
  isMain?: boolean;
  isAnimate?: boolean;
}

const GradientHeader = ({
  text,
  isMain,
  isAnimate,
  ...props
}: GradientHeaderProps) => {
  const splitText = text.split("");
  const [displayText, setDisplayText] = useState(
    isAnimate ? splitText[0] : text
  );

  useEffect(() => {
    if (!isAnimate) return;
    const intervalId = setInterval(() => {
      if (displayText.length === text.length) clearInterval(intervalId);
      setDisplayText((prev) => {
        const next = splitText[prev.length];
        return prev + (next ? next : "");
      });
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [displayText, splitText, text.length, isAnimate]);

  return (
    <div className="flex items-center">
      {isMain && (
        <div className="w-[40px] h-[7px] ml-[-20px] lg:w-[51px] lg:h-2 lg:ml-[-25px] rounded-md bg-black dark:moving-gradient rotate-90" />
      )}
      <h1
        {...props}
        className={twMerge(
          "header-text-size font-extra-bold text-transparent bg-clip-text bg-black dark:moving-gradient",
          props.className
        )}
      >
        {displayText}
      </h1>
    </div>
  );
};

export default GradientHeader;
