"use client";

import SunSVG from "../../icons/sun.svg";
import MoonSVG from "../../icons/moon.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const ThemeChanger = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const isDark =
    theme === "system"
      ? systemTheme === "dark"
        ? true
        : false
      : theme === "dark"
      ? true
      : false;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted)
    return <Image src={MoonSVG} alt="Moon" width={30} height={30} />;
  return (
    <button
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <Image src={MoonSVG} alt="Moon" width={30} height={30} />
      ) : (
        <Image src={SunSVG} alt="Sun" width={30} height={30} />
      )}
    </button>
  );
};

export default ThemeChanger;
