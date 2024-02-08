"use client";
import { HeaderSection, NavBar } from "@/components";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <HeaderSection />
    </div>
  );
}
