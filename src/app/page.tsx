"use client";
import { GetToKnowSection, HeaderSection, NavBar } from "@/components";
import ThemeChanger from "@/components/common/theme-changer";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <HeaderSection />
      <GetToKnowSection />
    </div>
  );
}
